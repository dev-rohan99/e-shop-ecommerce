import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import DataTable from 'datatables.net-dt';
import Swal from 'sweetalert2';
import moment from "moment";
import { deleteSellerOrAdminBrand, getSellerOrAdminBrands, updateSellerOrAdminBrand, updateSellerOrAdminBrandStatus } from '../../features/shop/shopAoiSlice';
import useInputControl from '../../hooks/useInputControl';
import Modal from '../modal/Modal';
import createToast from '../../utilities/createToast';


const BrandDatatable = () => {


	const [modal, setModal] = useState(false);
	const { input, setInput, handleInputChange, resetForm } = useInputControl({
		name: "",
		logo: ""
	});
    const { isLoading, brands } = useSelector((state) => state.shop);
	const dispatch = useDispatch();

    const handleBrandStatusUpdate = (status, id) => {
        dispatch(updateSellerOrAdminBrandStatus({id: id, status}));
    }

    const handleFileInputChange = (e, fieldName) => {
        const file = e.target.files[0];
        setInput((prevInput) => ({
          ...prevInput,
          [fieldName]: file,
        }));
      };

    const handleBrandUpdate = (e, id) => {
        e.preventDefault();
        if(!input.name || !input.logo){
			createToast("Please, fill out the form!", "warn");
		}else{
			dispatch(updateSellerOrAdminBrand(id, {name: input.name, logo: input.logo}));
			resetForm();
			setModal(false);
		}
    }

    const handleBrandDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if(result.isConfirmed){
                dispatch(deleteSellerOrAdminBrand(id, Swal));
                dispatch(getSellerOrAdminBrands());
            }
        })
    }


    return (
        <>
        
        
            {brands ? (<table className="datatable table table-hover table-center mb-0">
                <thead>
                    <tr>
                        <th>Logo</th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Created At</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        [...brands]?.reverse().map((data, index) => 
                            <tr key={index}>
                                <td>
                                    <img src={data?.logo} alt="" className="rounded shadow" style={{width:"60px",height:"60px",objectFit:"cover`"}} />
                                </td>
                                <td>
                                    <h2 className="table-avatar">{data?.name}</h2>
                                </td>
                                <td>{data?.slug}</td>
                                <td>{moment(data?.createdAt).format('LLL')}</td>
                                
                                <td>
                                    <div className="status-toggle">
                                        <input type="checkbox" id={`status_${index}`} className="check" checked={data.status ? true : false}/>
                                        <label onClick={() => handleBrandStatusUpdate(data?.status, data?._id)} htmlFor={`status_${index}`} className="checktoggle">checkbox</label>
                                    </div>
                                </td>

                                <td>
                                    <button 
                                        onClick={() => {
                                            setInput({name: data?.name, logo: data?.logo});
                                            setModal(true);
                                        }} className="btn btn-sm bg-info-light mr-2"
                                    >
                                            <FaRegEdit style={{fontSize: "15px", margin:"auto"}} />
                                    </button>

                                    {modal && <Modal title={"Permission update"}  modalClose={setModal}>
                                        <form onSubmit={(e) => handleBrandUpdate(e, data?._id)}>
                                            <div className="row form-row">

                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Name</label>
                                                        <input type="text" name="name" value={input.name} onChange={handleInputChange} className="form-control"/>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Logo</label>
                                                        <input type="file" name="logo" onChange={(e) => handleFileInputChange(e, 'logo')} className="form-control"/>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-block">Update</button>
                                        </form>
                                    </Modal>}

                                    <button onClick={() => handleBrandDelete(data?._id)} className="btn btn-sm bg-danger-light"><FaRegTrashAlt style={{fontSize: "15px", margin:"auto"}} /></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>) : (
                <h3 className="mt-6 mb-6 text-center py-5">Sorry, permission data not found!</h3>
            )}
        
        
        </>
    )
}

export default BrandDatatable;

