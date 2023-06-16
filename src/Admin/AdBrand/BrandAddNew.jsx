import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { ToastContainer, toast } from 'react-toastify';
import { postBrand } from "../../services/brandApi";

const BrandAddNew = (props) => {
    const { show, handleClose, handleUpdateTable } = props;

    const [brandName, setBrandName] = useState('');
    const [description, setDescription] = useState('');





    const handleSaveBrand = async () => {
        let res = await postBrand(brandName, description);
        if (res && res.data.id) {
            handleClose();
            setBrandName('');
            setDescription('');
            handleUpdateTable({
                brandName: brandName,
                description: description,
                id: res.data.id
            })
            toast.success("Thêm hãng xe thành công!");
            handleClose();
        } else {
            toast.error("Thêm hãng xe thất bại!");
        }
    }



    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm hãng xe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">

                        <div className="mb-3">
                            <label className="form-label">Tên hãng xe</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Nhập tên xe"
                                value={brandName}
                                onChange={(event) => setBrandName(event.target.value)} />

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
                    <Button variant="primary" onClick={() => handleSaveBrand()}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>);
};
export default BrandAddNew;