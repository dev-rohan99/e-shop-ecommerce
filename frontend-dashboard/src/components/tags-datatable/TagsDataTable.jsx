import React, { useEffect, useState } from 'react';
import DataTable from 'datatables.net-dt';
import { useDispatch, useSelector } from 'react-redux';
import useInputControl from '../../hooks/useInputControl';
import { deleteShopTag, getShopTag, updateShopTag, updateShopTagStatus } from '../../features/shop/shopAoiSlice';
import Swal from 'sweetalert2';
import createToast from '../../utilities/createToast';
import Modal from '../modal/Modal';


const TagsDataTable = () => {
    
	const [modal, setModal] = useState(false);
	const { input, setInput, handleInputChange, resetForm } = useInputControl({
		name: ""
	});
    const { isLoading, tags } = useSelector((state) => state.shop);
	const dispatch = useDispatch();
    useEffect(() => {
        new DataTable('.datatable');
    }, []);

    const handleTagStatusUpdate = (status, id) => {
        dispatch(updateShopTagStatus({id: id, status}));
    }

    const handleTagUpdate = (e, id) => {
        e.preventDefault();
        if(!input.name){
			createToast("Please, fill out the form!", "warn");
		}else{
			dispatch(updateShopTag(id, {name: input.name}));
			resetForm();
			setModal(false);
		}
    }

    const handleBrandDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if(result.isConfirmed){
                dispatch(deleteShopTag(id, Swal));
                dispatch(getShopTag());
            }
        })
    }

    return (
        <>
        
            {tags ? (<table className="datatable table table-hover table-center mb-0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Status</th>
                        <th className="text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        [...tags]?.reverse().map((data, index) => 
                            <tr key={index}>
                                <td>{data?.name}</td>
                                
                                <td>
                                    <h2 className="table-avatar">
                                        <a href="profile.html">{data?.slug}</a>
                                    </h2>
                                </td>
                                
                                <td>
                                    <div className="status-toggle">
                                        <input type="checkbox" id={`status_${index}`} className="check" checked={data.status ? true : false}/>
                                        <label onClick={() => handleTagStatusUpdate(data?.status, data?._id)} htmlFor={`status_${index}`} className="checktoggle">checkbox</label>
                                    </div>
                                </td>
                            
                                <td className="text-right">
                                    <div className="actions">
                                        <a onClick={() => {
                                            setInput({name: data?.name});
                                            setModal(true);
                                        }} className="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_specialities_details">
                                            <i className="fe fe-pencil"></i> Edit
                                        </a>

                                        {modal && <Modal title={"Permission update"}  modalClose={setModal}>
                                        <form onSubmit={(e) => handleTagUpdate(e, data?._id)}>
                                            <div className="row form-row">

                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Name</label>
                                                        <input type="text" name="name" value={input.name} onChange={handleInputChange} className="form-control"/>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block">Update</button>
                                        </form>
                                    </Modal>}

                                        <a onClick={() => handleBrandDelete(data?._id)}  data-toggle="modal" href="#delete_modal" className="btn btn-sm bg-danger-light">
                                            <i className="fe fe-trash"></i> Delete
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>) : (
                <h3 className="mt-6 mb-6 text-center py-5">Sorry, tag data not found!</h3>
            )}
        
        </>
    )
}

export default TagsDataTable;
