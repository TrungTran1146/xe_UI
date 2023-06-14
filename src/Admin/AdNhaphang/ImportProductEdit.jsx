import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { ToastContainer, toast } from 'react-toastify';
import { putImportProduct } from "../../services/importProductApi";

const ImportProductEdit = (props) => {
    const { show, handleClose, dataImportProductEdit, handleEditImportProductFromModal } = props;

    const [nameType, setName] = useState('');
    const [description, setDescription] = useState('');






    useEffect(() => {
        if (show) {
            setName(dataImportProductEdit.nameType);
            setDescription(dataImportProductEdit.description);
        }
    }, [dataImportProductEdit]);



    const handleEditImportProduct = async () => {
        const res = await putImportProduct(dataImportProductEdit.id, nameType, description);

        if (res && res.data.id) {
            handleClose();
            handleEditImportProductFromModal({
                nameType: nameType,
                description: description,
                id: dataImportProductEdit.id
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
                    <Modal.Title>Sửa loại xe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">

                        <div className="mb-3">
                            <label className="form-label">Tên loại xe</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Nhập tên xe"
                                value={nameType}
                                onChange={(event) => setName(event.target.value)} />

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
                    <Button variant="primary" onClick={() => handleEditImportProduct()}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>);
};
export default ImportProductEdit;