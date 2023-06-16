
import { Button, Modal } from "react-bootstrap";
import { apiDeleteOrder } from "../../services/orderApi";
import { toast } from "react-toastify";

const OrderDelete = (props) => {
    const { show, handleClose, dataOrderDelete, handleDeleteOrderFromModal } = props;




    const confirmDelete = async () => {
        const res = await apiDeleteOrder(dataOrderDelete.id);

        if (res && +res.status === 200) {
            toast.success(`Xóa thành công hãng xe: ${dataOrderDelete.name}`);
            handleClose();
            handleDeleteOrderFromModal(dataOrderDelete);
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
                    <Modal.Title>Bạn có chắc chắn xóa hãng xe này không?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">

                        <b>Tên hãng xe = {dataOrderDelete.brandName}</b>


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
export default OrderDelete;