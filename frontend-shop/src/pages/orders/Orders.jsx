import React from 'react';

const Orders = () => {



    return (
        <>
        
            
            <div className="tab-pane mb-4" id="account-orders">
                <div className="icon-box icon-box-side icon-box-light">
                    <span className="icon-box-icon icon-orders">
                        <i className="w-icon-orders"></i>
                    </span>
                    <div className="icon-box-content">
                        <h4 className="icon-box-title text-capitalize ls-normal mb-0">Orders</h4>
                    </div>
                </div>

                <table className="shop-table account-orders-table mb-6">
                    <thead>
                        <tr>
                            <th className="order-id">Order</th>
                            <th className="order-date">Date</th>
                            <th className="order-status">Status</th>
                            <th className="order-total">Total</th>
                            <th className="order-actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="order-id">#2321</td>
                            <td className="order-date">August 20, 2021</td>
                            <td className="order-status">Processing</td>
                            <td className="order-total">
                                <span className="order-price">$121.00</span> for
                                <span className="order-quantity"> 1</span> item
                            </td>
                            <td className="order-action">
                                <a href="#"
                                    className="btn btn-outline btn-default btn-block btn-sm btn-rounded">View</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="order-id">#2321</td>
                            <td className="order-date">August 20, 2021</td>
                            <td className="order-status">Processing</td>
                            <td className="order-total">
                                <span className="order-price">$150.00</span> for
                                <span className="order-quantity"> 1</span> item
                            </td>
                            <td className="order-action">
                                <a href="#"
                                    className="btn btn-outline btn-default btn-block btn-sm btn-rounded">View</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="order-id">#2319</td>
                            <td className="order-date">August 20, 2021</td>
                            <td className="order-status">Processing</td>
                            <td className="order-total">
                                <span className="order-price">$201.00</span> for
                                <span className="order-quantity"> 1</span> item
                            </td>
                            <td className="order-action">
                                <a href="#"
                                    className="btn btn-outline btn-default btn-block btn-sm btn-rounded">View</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="order-id">#2318</td>
                            <td className="order-date">August 20, 2021</td>
                            <td className="order-status">Processing</td>
                            <td className="order-total">
                                <span className="order-price">$321.00</span> for
                                <span className="order-quantity"> 1</span> item
                            </td>
                            <td className="order-action">
                                <a href="#"
                                    className="btn btn-outline btn-default btn-block btn-sm btn-rounded">View</a>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <a href="shop-banner-sidebar.html" className="btn btn-dark btn-rounded btn-icon-right">Go
                    Shop<i className="w-icon-long-arrow-right"></i></a>
            </div>

        
        </>
    )
}


export default Orders;
