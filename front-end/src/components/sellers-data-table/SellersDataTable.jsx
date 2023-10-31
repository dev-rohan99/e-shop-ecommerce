import React, { useEffect } from 'react';
import DataTable from 'datatables.net-dt';


const SellersDataTable = () => {

    useEffect(() => {
        new DataTable('.datatable');
    }, []);

    return (
        <>
        
            <table className="datatable table table-hover table-center mb-0">
                <thead>
                    <tr>
                        <th>Doctor Name</th>
                        <th>Speciality</th>
                        <th>Member Since</th>
                        <th>Earned</th>
                        <th>Account Status</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="User Image"/></a>
                                <a href="profile.html">Dr. Ruby Perrin</a>
                            </h2>
                        </td>
                        <td>Dental</td>
                        
                        <td>14 Jan 2019 <br/><small>02.59 AM</small></td>
                        
                        <td>$3100.00</td>
                        
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

export default SellersDataTable