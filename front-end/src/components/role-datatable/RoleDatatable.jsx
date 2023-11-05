import React, { useEffect } from 'react';
import DataTable from 'datatables.net-dt';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

const RoleDatatable = () => {

    useEffect(() => {
        new DataTable('.datatable');
    }, []);

    return (
        <>
        
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
                    <tr>
                        <td>
                            <h2 className="table-avatar">Admin</h2>
                        </td>
                        <td>admin</td>
                        
                        <td>$3100.00</td>
                        <td>$3100.00</td>
                        
                        <td>
                            <div className="status-toggle">
                                <input type="checkbox" id="status_1" className="check" checked/>
                                <label htmlFor="status_1" className="checktoggle">checkbox</label>
                            </div>
                        </td>
                        
                        <td>
                            <button className="btn btn-sm bg-danger-light edit mr-2"><FaRegEdit style={{fontSize: "30px", margin:"auto"}} /></button>
                            <button className="btn btn-sm bg-danger-light delete"><FaRegTrashAlt style={{fontSize: "30px", margin:"auto"}} /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        
        </>
    )
}

export default RoleDatatable