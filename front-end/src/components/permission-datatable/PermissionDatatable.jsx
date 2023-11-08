import React, { useEffect } from 'react';
import DataTable from 'datatables.net-dt';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPermissionData } from '../../features/user/userSlice';
import { getAllPermission } from '../../features/user/userApiSlice';
import moment from "moment";


const PermissionDatatable = () => {

	const dispatch = useDispatch();
    const { permissions } = useSelector(getAllPermissionData);

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
                        permissions?.map((data, index) => 
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
                                    <button className="btn btn-sm bg-danger-light edit mr-2"><FaRegEdit style={{fontSize: "30px", margin:"auto"}} /></button>
                                    <button className="btn btn-sm bg-danger-light delete"><FaRegTrashAlt style={{fontSize: "30px", margin:"auto"}} /></button>
                                </td>
                            </tr>
                        ).reverse()
                    }
                </tbody>
            </table>) : (
                <h3 className="mt-6 mb-6 text-center py-5">Sorry, permission data not found!</h3>
            )}
        
        </>
    )
}

export default PermissionDatatable;
