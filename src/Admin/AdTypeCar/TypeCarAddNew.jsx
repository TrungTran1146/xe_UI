import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { ToastContainer, toast } from 'react-toastify';
import { postTypeCar } from "../../services/typeCarApi";

const TypeCarAddNew = (props) => {
    const { show, handleClose, handleUpdateTable } = props;

    const [nameType, setNameType] = useState('');
    const [description, setDescription] = useState('');





    const handleSaveTypeCar = async () => {
        let res = await postTypeCar(nameType, description);
        if (res && res.data.id) {
            handleClose();
            setNameType('');
            setDescription('');
            handleUpdateTable({
                nameType: nameType,
                description: description,
                id: res.data.id
            })
            toast.success("Thêm loại xe thành công!");
            handleClose();
        } else {
            toast.error("Thêm loại xe thất bại!");
        }
    }



    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm loại xe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">

                        <div className="mb-3">
                            <label className="form-label">Tên loại xe</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Nhập tên loại xe"
                                value={nameType}
                                onChange={(event) => setNameType(event.target.value)} />

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
                    <Button variant="primary" onClick={() => handleSaveTypeCar()}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>);
};
export default TypeCarAddNew;