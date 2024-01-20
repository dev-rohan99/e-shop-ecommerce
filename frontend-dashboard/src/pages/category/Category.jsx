import React, { useEffect, useState } from 'react'
import Modal from '../../components/modal/Modal'
import useInputControl from '../../hooks/useInputControl';
import { useDispatch, useSelector } from 'react-redux';
import CategoryDatatable from '../../components/category-datatable/CategoryDatatable';
import createToast from '../../utilities/createToast';
import { setShopMessageEmpty } from '../../features/shop/shopSlice';
import { createShopCategory } from '../../features/shop/shopAoiSlice';

const Category = () => {

    const [modal, setModal] = useState(false);
	const { input, setInput, resetForm, handleInputChange } = useInputControl({
		name: "",
        parentCat: "",
        icon: "",
        photo: ""
	});
	const dispatch = useDispatch();
    const { isLoading, error, message, categories } = useSelector((state) => state.shop);

    const handleCatPhotoPreview = (e) => {
        setInput({
            ...input,
            photo : e.target.files[0]
        });
    }

    const handleCatIconPreview = (e) => {
        setInput({
            ...input,
            icon : e.target.files[0]
        });
    }

    const handleCategoryCreate = (e) => {
        e.preventDefault();
        console.log("Input:", input);
        console.log("Categories:", categories);
        if(!input.name || !input.icon || !input.photo){
            createToast("Please, fill out the form!", "warn");
        }else{
            const formData = new FormData();
            formData.append("name", input.name);
            formData.append("parentCategoryId", input.parentCat);
            formData.append("category-icon", input.icon);
            formData.append("category-photo", input.photo);
            dispatch(createShopCategory(formData));
            setInput({
                name: "",
                parentCat: "",
                icon: "",
                photo: ""
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
                            <div className="col-sm-7 col-auto">
                                <h3 className="page-title">Specialities</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Specialities</li>
                                </ul>
                            </div>
                            <div className="col-sm-5 col">
                                <a onClick={() => setModal(true)} href="#" data-toggle="modal" className="btn btn-primary float-right mt-2">Add</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        
                                        <CategoryDatatable/>

                                    </div>
                                </div>
                            </div>
                        </div>			
                    </div>

                </div>	
            </div>

            {modal && <Modal title={"Add new category"} modalClose={setModal}>
				<form onSubmit={handleCategoryCreate}>
					<div className="row form-row">

						<div className="col-12">
							<div className="form-group">
								<label>Category Name</label>
								<input name="name" onChange={handleInputChange} value={input.name} type="text" className="form-control"/>
							</div>
						</div>

						{categories && <div className="col-12">
							<div className="form-group">
								<label>Parent Category (Optional)</label>
								<select className="form-control" value={input.parentCat} name="parentCat" onChange={handleInputChange} aria-label="Default select example">
                                    <option>Select Parent Category</option>
                                    {categories && categories?.map((item, index) => (
                                        <option key={index} value={item._id}>{item.name}</option>
                                    ))}
                                </select>
							</div>
						</div>}
                        
						<div className="col-12">
							<div className="form-group">
								<label>Category Icon</label>
								<input name="category-icon" accept="image/svg, image/png" onChange={(e) => handleCatIconPreview(e)} type="file" className="form-control"/>
							</div>
						</div>

						<div className="col-12">
							<div className="form-group">
								<label>Category Photo</label>
								<input name="category-photo" accept="image/png, image/jpeg, image/jpg" onChange={(e) => handleCatPhotoPreview(e)} type="file" className="form-control"/>
							</div>
						</div>

                        <div className="col-12">
                            {input.photo && <div className="form-group">
                                <img style={{height: "120px", objectFit: "cover"}} src={URL.createObjectURL(input.photo)} alt="logo" className="rounded w-100" />
                            </div>}
                        </div>
						
					</div>
					<button type="submit" className="btn btn-primary btn-block">Create</button>
				</form>
			</Modal>}


        </>
    )
}

export default Category