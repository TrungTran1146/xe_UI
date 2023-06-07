import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { ToastContainer, toast } from 'react-toastify';
import { putTypeCar } from "../../services/typeCarApi";

const TypeCarEdit = (props) => {
    const { show, handleClose, dataTypeCarEdit, handleEditTypeCarFromModal } = props;

    const [nameType, setName] = useState('');
    const [description, setDescription] = useState('');






    useEffect(() => {
        if (show) {
            setName(dataTypeCarEdit.nameType);
            setDescription(dataTypeCarEdit.description);
        }
    }, [dataTypeCarEdit]);



    const handleEditTypeCar = async () => {
        const res = await putTypeCar(dataTypeCarEdit.id, nameType, description);

        if (res && res.data.id) {
            handleClose();
            handleEditTypeCarFromModal({
                nameType: nameType,
                description: description,
                id: dataTypeCarEdit.id
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
                    <Button variant="primary" onClick={() => handleEditTypeCar()}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>);
};
export default TypeCarEdit;