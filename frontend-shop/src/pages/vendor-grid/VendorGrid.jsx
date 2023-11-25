import React from 'react';


const VendorGrid = () => {



    return (
        <>
        
        
            <div className="row cols-lg-3 cols-md-2 cols-sm-2 cols-1 mt-4">
                <div className="store-wrap mb-4">
                    <div className="store store-grid">
                        <div className="store-header">
                            <figure className="store-banner">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4dWTvCCZ8wqknPQv02X0UgWJ-ZBpVV4oH6-Eeh2d-B7dvPKzksvB7JOK5uQ0kQ_LRQ8&usqp=CAU" alt="Vendor" 
                                    width="400" style={{backgroundColor: "#40475E",height:"194px"}} />
                            </figure>
                        </div>
                        
                        <div className="store-content">
                            <h4 className="store-title">
                                <a href="vendor-dokan-store.html">Vendor 1</a>
                                <label className="featured-label">Featured</label>
                            </h4>
                            <div className="ratings-container">
                                <div className="ratings-full">
                                    <span className="ratings" style={{width: "100%"}}></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                </div>
                            </div>
                            <div className="store-address">
                                Steven Street, El Carjon
                                California, United States (US)
                            </div>
                            <ul className="seller-info-list list-style-none">
                                <li className="store-phone">
                                    <a href="tel:1234567890"><i className="w-icon-phone"></i>1234567890</a>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="store-footer">
                            <figure className="seller-brand">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4dWTvCCZ8wqknPQv02X0UgWJ-ZBpVV4oH6-Eeh2d-B7dvPKzksvB7JOK5uQ0kQ_LRQ8&usqp=CAU" alt="Brand" width="80" height="80" />
                            </figure>
                            <a href="vendor-dokan-store.html" className="btn btn-dark btn-link btn-underline btn-icon-right btn-visit">
                                Visit Store<i className="w-icon-long-arrow-right"></i></a>
                        </div>
                        
                    </div>
                </div>
            </div>

        
        </>
    )
}

export default VendorGrid;
