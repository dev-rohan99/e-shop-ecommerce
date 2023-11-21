import React, { useEffect } from 'react';
import DataTable from 'datatables.net-dt';


const TagsDataTable = () => {

    useEffect(() => {
        new DataTable('.datatable');
    }, []);

    return (
        <>
        
            <table className="datatable table table-hover table-center mb-0">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tags</th>
                        <th className="text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#SP001</td>
                        
                        <td>
                            <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2">
                                    <img className="avatar-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Speciality"/>
                                </a>
                                <a href="profile.html">Urology</a>
                            </h2>
                        </td>
                    
                        <td className="text-right">
                            <div className="actions">
                                <a className="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_specialities_details">
                                    <i className="fe fe-pencil"></i> Edit
                                </a>
                                <a  data-toggle="modal" href="#delete_modal" className="btn btn-sm bg-danger-light">
                                    <i className="fe fe-trash"></i> Delete
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        
        </>
    )
}

export default TagsDataTable;
