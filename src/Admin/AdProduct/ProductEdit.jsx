import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { ToastContainer, toast } from 'react-toastify';
import { putUpdateProduct } from "../../services/productApi";

const ProductEdit = (props) => {
    const { show, handleClose, dataProductEdit, handleEditProductFromModal } = props;

    const [name, setName] = useState('');
    const [price, setPrice] = useState();
    const [status, setStatus] = useState('');
    const [quantity, setQuantity] = useState();
    const [description, setDescription] = useState('');
    const [image, setImage] = useState();
    const [brandId, setBrandId] = useState(8);
    const [typeCarId, setTypeCarId] = useState(2);




    const handleImage = (event) => {
        setImage(event.target.files[0]);
    };

    useEffect(() => {
        if (show) {
            setName(dataProductEdit.name);
            setPrice(dataProductEdit.price);
            setStatus(dataProductEdit.status);
            setQuantity(dataProductEdit.quantity);
            setDescription(dataProductEdit.description);
            setImage(dataProductEdit.image);
            setBrandId(dataProductEdit.brandId);
            setTypeCarId(dataProductEdit.typeCarId);

        }
    }, [dataProductEdit]);

    const handleEditProduct = async () => {

        const res = await putUpdateProduct(dataProductEdit.id, name, price, status, quantity, description, image, brandId, typeCarId);

        if (res && res.data.id) {
            handleClose();
            handleEditProductFromModal({
                name: name,
                price: price,
                quantity: quantity,
                status: status,
                description: description,
                image: image,
                id: dataProductEdit.id
            })
            toast.success("Sửa thông tin thành công!");
            handleClose();
        } else {
            toast.error("Sửa thông tin thất bại!");
        }

    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sửa sản phẩm</Modal.Title>
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
                            <input type="file"
                                className="form-control"
                                placeholder="Chọn ảnh"
                                name="image"
                                // value={image}
                                onChange={handleImage} />

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
                    <Button variant="primary" onClick={() => handleEditProduct()}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>);
};
export default ProductEdit;