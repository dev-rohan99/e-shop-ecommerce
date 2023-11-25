import React from 'react';
import VendorList from '../vendor-list/VendorList';


const VendorStores = () => {



    return (
        <>
        
        
            <main className="main">
                <nav className="breadcrumb-nav">
                    <div className="container">
                        <ul className="breadcrumb mb-6">
                            <li><a href="demo1.html">Home</a></li>
                            <li><a href="#">Vendor</a></li>
                            <li><a href="#">Dokan</a></li>
                            <li>Store List</li>
                        </ul>
                    </div>
                </nav>

                <div className="page-content mb-10 pb-2">
                    <div className="container">
                        <div className="toolbox vendor-toolbox pb-0">
                            <div className="toolbox-left mb-4 mb-md-0">
                                <a href="#" className="btn btn-primary btn-outline btn-rounded btn-icon-left vendor-search-toggle "><i className="w-icon-category"></i>Filter</a>
                                <label className="d-block">Total Store Showing 6</label>
                            </div>
                            <div className="toolbox-right">
                                <div className="toolbox-item toolbox-sort select-box mb-0">
                                    <label className="font-weight-normal">Sort by:</label>
                                    <select name="orderby" className="form-control">
                                        <option value="default" selected="selected">Default</option>
                                        <option value="recent">Most Recent</option>
                                        <option value="popular">Most Popular</option>
                                    </select>
                                </div>
                                <div className="toolbox-item toolbox-layout mb-0 d-flex">
                                    <a href="vendor-dokan-store-grid.html" className="icon-mode-grid btn-layout">
                                        <i className="w-icon-grid"></i>
                                    </a>
                                    <a href="vendor-dokan-store-list.html" className="icon-mode-list btn-layout active">
                                        <i className="w-icon-list"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="vendor-search-wrapper">
                            <form className="vendor-search-form">
                                <input type="email" className="form-control mr-4 bg-white" name="vendor" id="vendor"
                                    placeholder="Search Vendors" />
                                <button className="btn btn-primary btn-rounded" type="submit">Apply</button>
                            </form>
                        </div>

                        <VendorList/>

                    </div>
                </div>
            </main>
        
        
        </>
    )
}

export default VendorStores;
