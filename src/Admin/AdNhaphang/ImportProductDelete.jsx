
import { Button, Modal } from "react-bootstrap";
import { deleteTypeCar } from "../../services/typeCarApi";
import { toast } from "react-toastify";

const ImportProductDelete = (props) => {
    const { show, handleClose, dataTypeCarDelete, handleDeleteTypeCarFromModal } = props;




    const confirmDelete = async () => {
        const res = await deleteTypeCar(dataTypeCarDelete.id);

        if (res && +res.status === 200) {
            toast.success(`Xóa thành công loại xe: ${dataTypeCarDelete.nameType}`);
            handleClose();
            handleDeleteTypeCarFromModal(dataTypeCarDelete);
        } else {
            toast.error("Xóa thất bại!")
        }

    }


    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Bạn có chắc chắn xóa loại xe này không?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">

                        <b>Tên loại xe = {dataTypeCarDelete.nameType}</b>


                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={() => confirmDelete()}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </>);
};
export default ImportProductDelete;