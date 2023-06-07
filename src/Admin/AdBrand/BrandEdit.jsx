// import { useEffect, useState } from "react";
// import { Button, Modal } from "react-bootstrap";

// import { ToastContainer, toast } from 'react-toastify';
// import { putUpdateProduct } from "../../services/productApi";

// const BrandEdit = (props) => {
//     const { show, handleClose, dataBrandEdit } = props;

//     const [name, setName] = useState('');
//     const [price, setPrice] = useState();
//     const [status, setStatus] = useState('');
//     const [description, setDescription] = useState('');
//     const [image, setImage] = useState('');
//     const [brandId, setBrandId] = useState(8);
//     const [typecarId, setTypeCarId] = useState(2);





//     useEffect(() => {
//         if (show) {
//             setName(dataBrandEdit.name);
//             setPrice(dataBrandEdit.price);
//             setStatus(dataBrandEdit.status);
//             setDescription(dataBrandEdit.description);
//             setImage(dataBrandEdit.image);

//         }
//     }, [dataBrandEdit]);

//     const editProduct = {
//         name: name,
//         price: price,
//         status: status,
//         description: description,
//         image: image,
//         // brandId,
//         // typecarId

//     };
//     console.log(dataBrandEdit.id, name, price, status, description, image);
//     const handleEditProduct = async () => {
//         const res = await putUpdateProduct(dataBrandEdit.id, editProduct);
//         console.log(res);
//     }


//     return (
//         <>
//             <Modal show={show}
//                 onHide={handleClose}
//                 backdrop="static"
//                 keyboard={false}
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title>Sửa sản phẩm</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <div className="body-add-new">

//                         <div className="mb-3">
//                             <label className="form-label">Tên xe</label>
//                             <input type="text"
//                                 className="form-control"
//                                 placeholder="Nhập tên xe"
//                                 value={name}
//                                 onChange={(event) => setName(event.target.value)} />

//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">Giá xe</label>
//                             <input type="number"
//                                 className="form-control"
//                                 placeholder="Nhập giá xe "
//                                 value={price}
//                                 onChange={(event) => setPrice(event.target.value)} />

//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="status" className="form-label">
//                                 Trạng thái
//                             </label>
//                             <select
//                                 type="text"
//                                 className="form-control"
//                                 id="status"
//                                 value={status}
//                                 onChange={(e) => setStatus(e.target.value)}
//                             >
//                                 {/* <option value="">-- Select Status --</option> */}
//                                 <option value="Còn hàng">Còn hàng</option>
//                                 <option value="Hết hàng">Hết hàng</option>
//                             </select>
//                         </div>

//                         <div className="mb-3">
//                             <label className="form-label">Ảnh</label>
//                             <input type="text"
//                                 className="form-control"
//                                 placeholder="Chọn ảnh"
//                                 value={image}
//                                 onChange={(event) => setImage(event.target.value)} />

//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">
//                                 Description
//                             </label>
//                             <textarea
//                                 className="form-control"
//                                 type="text"
//                                 rows="3"
//                                 value={description}
//                                 onChange={(e) => setDescription(e.target.value)}
//                             ></textarea>
//                         </div>
//                     </div>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={() => handleEditProduct()}>
//                         Confirm
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>);
// };
// export default BrandEdit;