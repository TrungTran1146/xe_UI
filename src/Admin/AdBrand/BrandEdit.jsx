import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { ToastContainer, toast } from 'react-toastify';
import { putBrand } from "../../services/brandApi";

const BrandEdit = (props) => {
    const { show, handleClose, dataBrandEdit, handleEditBrandFromModal } = props;

    const [brandName, setName] = useState('');
    const [description, setDescription] = useState('');






    useEffect(() => {
        if (show) {
            setName(dataBrandEdit.brandName);
            setDescription(dataBrandEdit.description);
        }
    }, [dataBrandEdit]);



    const handleEditBrand = async () => {
        const res = await putBrand(dataBrandEdit.id, brandName, description);

        if (res && res.data.id) {
            handleClose();
            handleEditBrandFromModal({
                brandName: brandName,
                description: description,
                id: dataBrandEdit.id
            })
            toast.success("Sửa thông tin thành công!");
            handleClose();
        } else {
            toast.error("Sửa thông tin thất bại!");
        }
    }


    return (
        <>
            <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sửa hãng xe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">

                        <div className="mb-3">
                            <label className="form-label">Tên hãng xe</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Nhập tên xe"
                                value={brandName}
                                onChange={(event) => setName(event.target.value)} />

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
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={() => handleEditBrand()}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>);
};
export default BrandEdit;