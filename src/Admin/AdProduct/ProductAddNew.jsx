import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { ToastContainer, toast } from 'react-toastify';
import { postCreateProduct } from "../../services/productApi";

const ProductAddNew = (props) => {
    const { show, handleClose, handleUpdateTable } = props;

    const [name, setName] = useState('');
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [brandId, setBrandId] = useState(8);
    const [typecarId, setTypeCarId] = useState(2);



    //Tạo sản phẩm
    // const newProduct = {
    //     name: name,
    //     price: price,
    //     status: status,
    //     description: description,
    //     image: image,
    //     brandId: brandId,
    //     typecarId: typecarId

    // };

    const handleSaveProduct = async () => {
        let res = await postCreateProduct(name, price, status, quantity, description, image, brandId, typecarId);

        if (res && res.data.id) {
            handleClose();
            setName('');
            setPrice();
            setStatus('');
            setQuantity();
            setDescription('');
            setImage('');
            setBrandId(8);
            setTypeCarId(2);
            handleUpdateTable({
                name: name,
                price: price,
                quantity: quantity,
                status: status,

                description: description,
                image: image,
                id: res.data.id
            })
            toast.success("Thêm xe thành công!");
            handleClose();




        } else {
            toast.error("Thêm xe thất bại!");
        }
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
                                <option value="">-- Chọn trạng thái --</option>
                                <option value="Còn hàng">Còn hàng</option>
                                <option value="Hết hàng">Hết hàng</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Số lượng</label>
                            <input type="number"
                                className="form-control"
                                placeholder="Nhập số lượng xe "
                                value={quantity}
                                onChange={(event) => setQuantity(event.target.value)} />

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
                    <Button variant="primary" onClick={() => handleSaveProduct()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>);
};
export default ProductAddNew;