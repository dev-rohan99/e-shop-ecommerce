import React, { useEffect, useState } from 'react';
import PermissionDatatable from '../../components/permission-datatable/PermissionDatatable';
import Modal from '../../components/modal/Modal';
import useInputControl from '../../hooks/useInputControl';
import { useDispatch, useSelector } from 'react-redux';
import createToast from '../../utilities/createToast';
import { createUserPermission } from '../../features/user/userApiSlice';
import { setUserMessageEmpty } from '../../features/user/userSlice';


const Permission = () => {

	const [modal, setModal] = useState(false);
	const { input, setInput, handleInputChange } = useInputControl({
		name: ""
	});
	const dispatch = useDispatch();
    const { error, message, permissions } = useSelector((state) => state.user);

	const handlePermissionCreate = (e) => {
		e.preventDefault();
		if(!input.name){
			createToast("Please, fill out the form!", "warn");
		}else{
			dispatch(createUserPermission(input));
			setInput({
				name: ""
			});
			setModal(false);
		}
	}

	useEffect(() => {
        if(error && permissions){
            createToast(error, "warn");
            dispatch(setUserMessageEmpty());
        }
        if(message && permissions){
            createToast(message, "success");
            dispatch(setUserMessageEmpty());
        }
    }, [error, message, permissions, dispatch]);


	return (
		<>
			
			<div className="page-wrapper">
				<div className="content container-fluid">
						
					<div className="page-headerssssssssss">
						<div className="row">
							<div className="col-sm-12">
								<h3 className="page-title">List of Permissions</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
									<li className="breadcrumb-item"><a href="javascript:(0);">Users</a></li>
									<li className="breadcrumb-item active">Permissions</li>
								</ul>
							</div>
						</div>
					</div>
					
					<div className="row">
						<div className="col-sm-12">
							
							<button onClick={() => setModal(true)} className="btn btn-sm bg-primary-light mb-4">Add new permission</button>

							<div className="card">
								<div className="card-body">
									<div className="table-responsive">

										<PermissionDatatable/>

									</div>
								</div>
							</div>
						</div>			
					</div>
					
				</div>			
			</div>

			{modal && <Modal title={"Add new permission"}  modalClose={setModal}>
				<form onSubmit={handlePermissionCreate}>
					<div className="row form-row">

						<div className="col-12 mx-2">
							<div className="form-group">
								<label>Name</label>
								<input type="text" name="name" value={input.name} onChange={handleInputChange} className="form-control"/>
							</div>
						</div>
						
					</div>
					<button type="submit" className="btn btn-primary btn-block">Cretate</button>
				</form>
			</Modal>}
			
		</>
	)
}

export default Permission