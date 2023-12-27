import React, { useState } from 'react';
import TagsDataTable from '../../components/tags-datatable/TagsDataTable';
import { useDispatch } from 'react-redux';
import useInputControl from '../../hooks/useInputControl';
import Modal from '../../components/modal/Modal';
import createToast from '../../utilities/createToast';
import { createShopTag } from '../../features/shop/shopAoiSlice';


const Tags = () => {

    const [modal, setModal] = useState(false);
	const { input, setInput, resetForm, handleInputChange } = useInputControl({
		name: "",
		permissions: []
	});
	const dispatch = useDispatch();

    const handleTagCreate = (e) => {
        e.preventDefault();
        if(!input.name){
			createToast("Please, fill out the form!", "warn");
		}else{
			dispatch(createShopTag(input));
            resetForm();
			setModal(false);
		}
    }

    return (
        <>
        
            <div className="page-wrapper">
                <div className="content container-fluid">
                        
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-7 col-auto">
                                <h3 className="page-title">Specialities</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Specialities</li>
                                </ul>
                            </div>
                            <div className="col-sm-5 col">
                                <a onClick={() => setModal(true)} href="#" data-toggle="modal" className="btn btn-primary float-right mt-2">Add</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        
                                        <TagsDataTable/>

                                    </div>
                                </div>
                            </div>
                        </div>			
                    </div>

                </div>	
            </div>	


            {modal && <Modal title={"Add new role"} modalClose={setModal}>
				<form onSubmit={handleTagCreate}>
					<div className="row form-row">

						<div className="col-12">
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

export default Tags;
