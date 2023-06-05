import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { ToastContainer, toast } from 'react-toastify';
import { postCreateProduct } from "../../services/productApi";

const ProductAddNew = (props) => {
    const { show, handleClose, handleUpdateTable } = props;

    const [name, setName] = useState('');
    const [price, setPrice] = useState();
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [brandId, setBrandId] = useState(8);
    const [typecarId, setTypeCarId] = useState(2);



    //Tạo sản phẩm
    const newProduct = {
        name,
        price,
        status,
        description,
        image,
        brandId,
        typecarId

    };

    const handleSaveProduct = async () => {
        let res = await postCreateProduct(newProduct);
        console.log("check res>>", res)
        // if (res && res.id) {
        //     handleClose();
        //     setName('');
        //     setPrice(0);
        //     setStatus('');
        //     setDescription('');
        //     setImage('');
        //     setBrandId(8);
        //     setTypeCarId(2);

        //     toast.success("Thêm xe thành công!");
        //     handleUpdateTable({ first_name: name, id: res.id })
        // } else {
        //     toast.error("Thêm xe thất bại!");
        // }
    }



    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">

                        <div className="mb-3">
                            <label className="form-label">Tên xe</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Nhập tên xe"
                                value={name}
                                onChange={(event) => setName(event.target.value)} />

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Giá xe</label>
                            <input type="number"
                                className="form-control"
                                placeholder="Nhập giá xe "
                                value={price}
                                onChange={(event) => setPrice(event.target.value)} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">
                                Trạng thái
                            </label>
                            <select
                                type="text"
                                className="form-control"
                                id="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="">-- Select Status --</option>
                                <option value="con">Còn hàng</option>
                                <option value="het">Hết hàng</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Ảnh</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Chọn ảnh"
                                value={image}
                                onChange={(event) => setImage(event.target.value)} />

                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Description
                            </label>
                            <textarea
                                className="form-control"
                                type="text"
                                rows="3"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveProduct}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>);
};
export default ProductAddNew;