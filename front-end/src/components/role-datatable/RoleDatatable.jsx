import React, { useEffect, useState } from 'react';
import DataTable from 'datatables.net-dt';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import useInputControl from '../../hooks/useInputControl';
import { getAllRoleData } from '../../features/user/userSlice';
import { deleteRole, getAllRole, updateRole } from '../../features/user/userApiSlice';
import Modal from '../modal/Modal';
import createToast from '../../utilities/createToast';
import moment from 'moment';
import Swal from 'sweetalert2';

const RoleDatatable = () => {

    const [modal, setModal] = useState(false);
	const dispatch = useDispatch();
    const { roles } = useSelector(getAllRoleData);
    const { input, setInput, handleInputChange } = useInputControl({
		name: ""
	});

    const handleRoleUpdate = (e, id) => {
        e.preventDefault();
        if(!input.name){
            createToast("Please, fill out the form!", "warn");
        }else{
            dispatch(updateRole({id: id, name: input.name}));
            dispatch(getAllRole());
            setInput({
				name: ""
			});
			setModal(false);
        }
    }

    const handleRoleDelete = (id) => {
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
                dispatch(deleteRole(id, Swal));
                dispatch(getAllRole());
            }
        });
    }

    useEffect(() => {
        new DataTable('.datatable');
    }, []);

    useEffect(() => {
        dispatch(getAllRole());
    }, [dispatch]);

    return (
        <>
        
            {
                roles ? (
                    <table className="datatable table table-hover table-center mb-0">
                        <thead>
                            <tr>
                                <th>Role Name</th>
                                <th>Slug</th>
                                <th>Permissions</th>
                                <th>Created At</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...roles]?.reverse().map((data, index) => <tr key={index}>
                                <td>
                                    <h2 className="table-avatar">{data?.name}</h2>
                                </td>
                                <td>{data?.slug}</td>
                                {roles?.permissions ? (<td>{data?.permissions?.map((data, index) => 
                                    
                                    <span style={{backgroundColor:"#19C1DC",fontSize:"16px"}} className="rounded p-2 text-center" key={index}>{data}</span>
                                
                                )}</td>) : (<td>Not added yet!</td>)}
                                <td>{moment(data?.createdAt).format('LLL')}</td>
                                
                                <td>
                                    <div className="status-toggle">
                                        <input type="checkbox" id={`status_${index}`} className="check" checked/>
                                        <label htmlFor={`status_${index}`} className="checktoggle">checkbox</label>
                                    </div>
                                </td>
                                
                                <td>
                                    <button onClick={() => {
                                            setInput({name: data?.name});
                                            setModal(true);
                                        }} className="btn btn-sm bg-danger-light edit mr-2"><FaRegEdit style={{fontSize: "30px", margin:"auto"}} /></button>

                                    {modal && <Modal title={"Role update"}  modalClose={setModal}>
                                        <form onSubmit={(e) => handleRoleUpdate(e, data?._id)}>
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

                                    <button onClick={() => handleRoleDelete(data?._id)} className="btn btn-sm bg-danger-light delete"><FaRegTrashAlt style={{fontSize: "30px", margin:"auto"}} /></button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                ) : (
                    <h3 className="mt-6 mb-6 text-center py-5">Sorry, role data not found!</h3>
                )
            }
        
        </>
    )
}

export default RoleDatatable