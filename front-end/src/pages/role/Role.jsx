import React, { useState } from 'react';
import RoleDatatable from '../../components/role-datatable/RoleDatatable';
import Modal from '../../components/modal/Modal';


const Role = () => {

	const [modal, setModal] = useState(false);

    return (
        <>
        
            <div className="page-wrapper">
                <div className="content container-fluid">
				
					<div className="page-headerssssssssss">
						<div className="row">
							<div className="col-sm-12">
								<h3 className="page-title">List of Roles</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
									<li className="breadcrumb-item"><a href="javascript:(0);">Users</a></li>
									<li className="breadcrumb-item active">Roles</li>
								</ul>
							</div>
						</div>
					</div>
					
					<div className="row">
						<div className="col-sm-12">
								
							<button onClick={() => setModal(true)} className="btn btn-sm bg-primary-light mb-4">Add new role</button>

							<div className="card">
								<div className="card-body">
									<div className="table-responsive">

                                        <RoleDatatable/>

									</div>
								</div>
							</div>
						</div>			
					</div>
					
				</div>			
			</div>

			{modal && <Modal title={"Add new role"} modalClose={setModal}>
				<form>
					<div className="row form-row">

						<div className="col-12 mx-2">
							<div className="form-group">
								<label>Name</label>
								<input type="text" className="form-control"/>
							</div>
						</div>
						
					</div>
					<button type="submit" className="btn btn-primary btn-block">Cretate</button>
				</form>
			</Modal>}
        
        </>
    )
}

export default Role;
