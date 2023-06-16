import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { ToastContainer, toast } from 'react-toastify';
import { postCreateProduct } from "../../services/productApi";

const ProductAddNew = (props) => {
    const { show, handleClose, handleUpdateTable, listBrand, listTypeCar } = props;

    const [name, setName] = useState('');
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [brandId, setBrandId] = useState();
    const [typeCarId, setTypeCarId] = useState();
    const [image, setFile] = useState();

    const changeHandler = (event) => {
        setFile(event.target.files[0]);
    };
    const handleSaveProduct = async () => {
        let res = await postCreateProduct(name, price, status, quantity, description, image, brandId, typeCarId);

        if (res && res.data.id) {
            handleClose();
            setName('');
            setPrice();
            setStatus('');
            setQuantity();
            setDescription('');
            setFile();
            setBrandId();
            setTypeCarId();
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
                            <label htmlFor="status" className="form-label">
                                Hãng xe
                            </label>

                            <select
                                type="text"
                                className="form-control"
                                id=""
                                value={brandId}
                                onChange={(e) => setBrandId(e.target.value)}
                            >
                                <option value="">-- Chọn hãng xe --</option>
                                {listBrand.map(item => (
                                    <option key={item.id} value={item.id}>{item.brandName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">
                                Loại xe
                            </label>

                            <select
                                type="text"
                                className="form-control"
                                id=""
                                value={typeCarId}
                                onChange={(e) => setTypeCarId(e.target.value)}
                            >
                                <option value="">-- Chọn loại xe --</option>
                                {listTypeCar.map(type => (
                                    <option key={type.id} value={type.id}>{type.nameType}</option>
                                ))}
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
                            <input type="file"
                                className="form-control"
                                name="image"
                                placeholder="Chọn ảnh"
                                onChange={changeHandler} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Mô tả
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
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={() => handleSaveProduct()}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>);
};
export default ProductAddNew;