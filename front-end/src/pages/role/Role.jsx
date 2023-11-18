import React, { useEffect, useState } from 'react';
import RoleDatatable from '../../components/role-datatable/RoleDatatable';
import Modal from '../../components/modal/Modal';
import useInputControl from '../../hooks/useInputControl';
import { useDispatch, useSelector } from 'react-redux';
import { setUserMessageEmpty } from '../../features/user/userSlice';
import createToast from '../../utilities/createToast';
import { createUserRole } from '../../features/user/userApiSlice';


const Role = () => {

	const [modal, setModal] = useState(false);
	const { input, setInput, handleInputChange } = useInputControl({
		name: ""
	});
	const dispatch = useDispatch();
    const { error, message } = useSelector((state) => state.user);

	const handleRoleCreate = (e) => {
		e.preventDefault();
		if(!input.name){
			createToast("Please, fill out the form!", "warn");
		}else{
			dispatch(createUserRole(input));
			setInput({
				name: ""
			});
			setModal(false);
		}
	}

	useEffect(() => {
        if(error){
            createToast(error, "warn");
            dispatch(setUserMessageEmpty());
        }
        if(message){
            createToast(message, "success");
            dispatch(setUserMessageEmpty());
        }
    }, [error, message]);

    return (
        <>
        
            <div className="page-wrapper">
                <div className="content container-fluid">
				
					<div className="page-headerssssssssss">
						<div className="row">
							<div className="col-sm-12">
								<h3 className="page-title">List of Roles</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
									<li className="breadcrumb-item"><a href="javascript:(0);">Users</a></li>
									<li className="breadcrumb-item active">Roles</li>
								</ul>
							</div>
						</div>
					</div>
					
					<div className="row">
						<div className="col-sm-12">
								
							<button onClick={() => setModal(true)} className="btn btn-sm bg-primary-light mb-4">Add new role</button>

							<div className="card">
								<div className="card-body">
									<div className="table-responsive">

                                        <RoleDatatable/>

									</div>
								</div>
							</div>
						</div>			
					</div>
					
				</div>			
			</div>

			{modal && <Modal title={"Add new role"} modalClose={setModal}>
				<form onSubmit={handleRoleCreate}>
					<div className="row form-row">

						<div className="col-12 mx-2">
							<div className="form-group">
								<label>Name</label>
								<input name="name" onChange={handleInputChange} value={input.name} type="text" className="form-control"/>
							</div>
						</div>
						
					</div>
					<button type="submit" className="btn btn-primary btn-block">Create</button>
				</form>
			</Modal>}
        
        </>
    )
}

export default Role;
