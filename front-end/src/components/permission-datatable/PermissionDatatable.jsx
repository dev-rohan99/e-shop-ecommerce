import React, { useEffect, useState } from 'react';
import DataTable from 'datatables.net-dt';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPermissionData } from '../../features/user/userSlice';
import { deletePermission, getAllPermission, updatePermission } from '../../features/user/userApiSlice';
import moment from "moment";
import Swal from 'sweetalert2';
import useInputControl from '../../hooks/useInputControl';
import createToast from '../../utilities/createToast';
import Modal from '../modal/Modal';


const PermissionDatatable = () => {

	const [modal, setModal] = useState(false);
	const dispatch = useDispatch();
    const { permissions } = useSelector(getAllPermissionData);
	const { input, setInput, handleInputChange } = useInputControl({
		name: ""
	});

    const handlePermissionUpdate = (e, id) => {
		e.preventDefault();
		if(!input.name){
			createToast("Please, fill out the form!", "warn");
		}else{
			dispatch(updatePermission({id: id, name: input.name}));
            dispatch(getAllPermission());
			setInput({
				name: ""
			});
			setModal(false);
		}
	}

    const handlePermissionDelete = (id) => {
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
                dispatch(deletePermission(id, Swal));
                dispatch(getAllPermission());
            }
        });
	}

    useEffect(() => {
        new DataTable('.datatable');
    }, []);

    useEffect(() => {
        dispatch(getAllPermission());
    }, [dispatch])

    return (
        <>
        
            {permissions ? (<table className="datatable table table-hover table-center mb-0">
                <thead>
                    <tr>
                        <th>Permission Name</th>
                        <th>Slug</th>
                        <th>Created At</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        [...permissions]?.reverse().map((data, index) => 
                            <tr key={index}>
                                <td>
                                    <h2 className="table-avatar">{data?.name}</h2>
                                </td>
                                <td>{data?.slug}</td>
                                <td>{moment(data?.createdAt).format('LLL')}</td>
                                
                                <td>
                                    <div className="status-toggle">
                                        <input type="checkbox" id={`status_${index}`} className="check" value={data?.status}/>
                                        <label htmlFor={`status_${index}`} className="checktoggle">checkbox</label>
                                    </div>
                                </td>

                                <td>
                                    <button 
                                        onClick={() => {
                                            setInput({name: data?.name});
                                            setModal(true);
                                        }} 
                                        className="btn btn-sm bg-danger-light edit mr-2"
                                    >
                                        <FaRegEdit style={{fontSize: "30px", margin:"auto"}} />
                                    </button>

                                    {modal && <Modal title={"Permission update"}  modalClose={setModal}>
                                        <form onSubmit={(e) => handlePermissionUpdate(e, data?._id)}>
                                            <div className="row form-row alllsds">

                                                <div className="col-12 mx-2">
                                                    <div className="form-group">
                                                        <label>Name</label>
                                                        <input type="text" name="name" value={input.name} onChange={handleInputChange} className="form-control"/>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block">Update</button>
                                        </form>
                                    </Modal>}

                                    <button onClick={() => handlePermissionDelete(data?._id)} className="btn btn-sm bg-danger-light delete"><FaRegTrashAlt style={{fontSize: "30px", margin:"auto"}} /></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>) : (
                <h3 className="mt-6 mb-6 text-center py-5">Sorry, permission data not found!</h3>
            )}
        
        </>
    )
}

export default PermissionDatatable;
