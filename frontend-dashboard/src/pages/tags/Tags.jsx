import React from 'react';
import TagsDataTable from '../../components/tags-datatable/TagsDataTable';


const Tags = () => {


    return (
        <>
        
            <div className="page-wrapper">
                <div className="content container-fluid">
                        
                    <div className="page-headerssssssssss">
                        <div className="row">
                            <div className="col-sm-7 col-auto">
                                <h3 className="page-title">Specialities</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Specialities</li>
                                </ul>
                            </div>
                            <div className="col-sm-5 col">
                                <a href="#Add_Specialities_details" data-toggle="modal" className="btn btn-primary float-right mt-2">Add</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        
                                        <TagsDataTable/>

                                    </div>
                                </div>
                            </div>
                        </div>			
                    </div>

                </div>	
            </div>	
        
        </>
    )
}

export default Tags;
