import React from 'react';
import PermissionDatatable from '../../components/permission-datatable/PermissionDatatable';


const Permission = () => {
  return (
    <>
        
		<div className="page-wrapper">
			<div className="content container-fluid">
					
				<div className="page-headerssssssssss">
					<div className="row">
						<div className="col-sm-12">
							<h3 className="page-title">List of Permissions</h3>
							<ul className="breadcrumb">
								<li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
								<li className="breadcrumb-item"><a href="javascript:(0);">Users</a></li>
								<li className="breadcrumb-item active">Permissions</li>
							</ul>
						</div>
					</div>
				</div>
				
				<div className="row">
					<div className="col-sm-12">
						<div className="card">
							<div className="card-body">
								<div className="table-responsive">

									<PermissionDatatable/>

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

export default Permission