import React from 'react';


const VendorList = () => {



    return (
        <>
        
        
            <div className="store store-list mt-4">
                <div className="store-header">
                    <a href="vendor-dokan-store.html">
                        <figure className="store-banner">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Daraz_Logo.png" alt="Vendor" 
                                width="400" height="188" style={{backgroundColor: "#40475E"}} />
                        </figure>
                    </a>
                    <label className="featured-label">Featured</label>
                </div>
                <div className="store-content">
                    <figure className="seller-brand">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4dWTvCCZ8wqknPQv02X0UgWJ-ZBpVV4oH6-Eeh2d-B7dvPKzksvB7JOK5uQ0kQ_LRQ8&usqp=CAU" alt="Brand" width="80" height="80" />
                    </figure>
                    <div className="seller-date">
                        <h4 className="store-title">
                            <a href="vendor-dokan-store.html">Vendor 1</a>
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
                        <a href="vendor-dokan-store.html" className="btn btn-dark btn-link btn-underline btn-icon-right btn-visit">
                            Visit Store<i className="w-icon-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        
        
        </>
    )
}

export default VendorList;
