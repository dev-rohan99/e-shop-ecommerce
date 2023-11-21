import React, { useEffect, useState } from 'react';
import DataTable from 'datatables.net-dt';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import useInputControl from '../../hooks/useInputControl';
import { getAllPermissionData, getAllRoleData } from '../../features/user/userSlice';
import { deleteRole, getAllPermission, getAllRole, updateRole } from '../../features/user/userApiSlice';
import Modal from '../modal/Modal';
import createToast from '../../utilities/createToast';
import moment from 'moment';
import Swal from 'sweetalert2';

const RoleDatatable = () => {

    const [modal, setModal] = useState(false);
	const dispatch = useDispatch();
    const { roles } = useSelector(getAllRoleData);
    const { permissions } = useSelector(getAllPermissionData);
    const { input, setInput, resetForm, handleInputChange } = useInputControl({
		name: "",
		permissions: null
	});
    const { input: roleInput, setInput: setRoleInput, resetForm: resetRoleForm, handleInputChange: handleEditRoleChange } = useInputControl({});

    const handleCheckBoxChange = (e) => {
		const value = e.target.value;
		const updatedList = [...roleInput.permissions];
		if(roleInput.permissions.includes(value)){
			updatedList.splice(roleInput.permissions.indexOf(value), 1);
		}else{
			updatedList.push(value);
		}
		setRoleInput((prevState) => ({
            ...prevState,
            permissions: updatedList
        }));
	}

    const handleRoleEdit = (id) => {
        setModal(true);
        const roleFind = roles.find((data) => data._id === id);
        setRoleInput(roleFind);
    }

    const handleRoleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateRole(roleInput));
        resetRoleForm();
        setModal(false);
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
                dispatch(getAllPermission());
            }
        });
    }

    useEffect(() => {
        new DataTable('.datatable');
    }, []);

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
                                {data?.permissions ? (<td width={"450px"} style={{display: "flex",justifyContent: "start",flexWrap: "wrap"}}>
                                    {[...data.permissions]?.map((data, index) => 
                                    
                                        <span style={{backgroundColor: "rgb(5 125 145)",fontSize: "13px"}} className="rounded mr-1 px-2 py-0 text-center text-white mt-1 mb-1" key={index}>{data}</span>
                                
                                    )}
                                </td>) : (<td>Not added yet!</td>)}
                                <td>{moment(data?.createdAt).format('LLL')}</td>
                                
                                <td>
                                    <div className="status-toggle">
                                        <input type="checkbox" id={`status_${index}`} className="check" checked/>
                                        <label htmlFor={`status_${index}`} className="checktoggle">checkbox</label>
                                    </div>
                                </td>
                                
                                <td>
                                    <button onClick={() => handleRoleEdit(data?._id)} className="btn btn-sm bg-danger-light edit mr-2"><FaRegEdit style={{fontSize: "30px", margin:"auto"}} /></button>

                                    {modal && <Modal title={"Role update"}  modalClose={setModal}>
                                        <form onSubmit={handleRoleUpdate}>
                                            <div className="row form-row alllsds">

                                                <div className="col-12 mx-2">
                                                    <div className="form-group">
                                                        <label>Name</label>
                                                        <input type="text" name="name" value={roleInput.name} onChange={handleEditRoleChange} className="form-control"/>
                                                    </div>
                                                </div>
                                                
                                            </div>

                                            <div className="row form-row alllsds">

                                                {permissions?.map((data, index) => <div key={`dfvv4477fgg${index}`} className="col-md-3">
                                                    <div className="form-group">
                                                        <input checked={roleInput?.permissions?.includes(data?.name)} type="checkbox" id={"agree-term" + index} className="agree-term" value={data?.name} onChange={handleCheckBoxChange} />
                                                        <label htmlFor={"agree-term" + index} className="label-agree-term"><span><span></span></span> {data?.name}</label>
                                                    </div>
                                                </div>)}

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

export default RoleDatatable;
