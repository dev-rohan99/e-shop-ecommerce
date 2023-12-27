import React, { useEffect, useState } from 'react';
import Modal from '../../components/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import useInputControl from '../../hooks/useInputControl';
import createToast from '../../utilities/createToast';
import { createSellerOrAdminBrand } from '../../features/shop/shopAoiSlice';
import { setShopMessageEmpty } from '../../features/shop/shopSlice';
import BrandDatatable from '../../components/brands-datatable/BrandDatatable';


const Brand = () => {

    const [modal, setModal] = useState(false);
	const { input, setInput, resetForm, handleInputChange } = useInputControl({
		name: "",
		logo: ""
	});
	const dispatch = useDispatch();
    const { isLoading, error, message } = useSelector((state) => state.shop);

    const handleLogoPreview = (e) => {
        console.log(e.target.files[0]);
        setInput({
            ...input,
            logo : e.target.files[0]
        });
    }

    const handleBrandCreate = (e) => {
        e.preventDefault();
        if(!input.name || !input.logo){
            createToast("Please, fill out the form!", "warn");
        }else{
            const formData = new FormData();
            formData.append("name", input.name);
            formData.append("logo", input.logo);
            dispatch(createSellerOrAdminBrand(formData));
            setInput({
                name: "",
		        logo: ""
            });
            resetForm();
        }
    }

    useEffect(() => {
        if(error){
            createToast(error, "warn");
            dispatch(setShopMessageEmpty());
        }
        if(message){
            createToast(message, "success");
            dispatch(setShopMessageEmpty());
        }
    }, [error, message, dispatch]);

    return (
        <>
        
        
            <div className="page-wrapper">
                <div className="content container-fluid">
				
					<div className="page-header">
						<div className="row">
							<div className="col-sm-12">
								<h3 className="page-title">List of Roles</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
									<li className="breadcrumb-item"><a href="javascript:(0);">Users</a></li>
									<li className="breadcrumb-item active">Brands</li>
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

                                        <BrandDatatable/>

									</div>
								</div>
							</div>
						</div>			
					</div>
					
				</div>			
			</div>

			{modal && <Modal title={"Create new brand"} modalClose={setModal}>
				<form onSubmit={handleBrandCreate}>
					<div className="row form-row">

						<div className="col-12">
							<div className="form-group">
								<label>Name</label>
								<input name="name" onChange={handleInputChange} value={input.name} type="text" className="form-control"/>
							</div>
							<div className="form-group">
								<label>Logo</label>
								<input name="logo" onChange={(e) => handleLogoPreview(e)} accept="image/png, image/jpeg, image/jpg" type="file" className="form-control"/>
							</div>
							{input.logo && <div className="form-group">
								<img style={{height: "150px", objectFit: "cover"}} src={URL.createObjectURL(input.logo)} alt="logo" className="rounded w-100" />
							</div>}
						</div>
						
					</div>
					<button type="submit" className="btn btn-primary btn-block">{isLoading ? "Creating . . ." : "Create"}</button>
				</form>
			</Modal>}

        
        </>
    )
}

export default Brand;
