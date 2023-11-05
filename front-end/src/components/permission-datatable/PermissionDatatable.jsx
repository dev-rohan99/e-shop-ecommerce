import React, { useEffect } from 'react';
import DataTable from 'datatables.net-dt';

const PermissionDatatable = () => {

    useEffect(() => {
        new DataTable('.datatable');
    }, []);

    return (
        <>
        
            <table className="datatable table table-hover table-center mb-0">
                <thead>
                    <tr>
                        <th>Permission Name</th>
                        <th>Slug</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h2 className="table-avatar">Admin</h2>
                        </td>
                        <td>admin</td>
                        
                        <td>
                            <div className="status-toggle">
                                <input type="checkbox" id="status_1" className="check" checked/>
                                <label htmlFor="status_1" className="checktoggle">checkbox</label>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        
        </>
    )
}

export default PermissionDatatable