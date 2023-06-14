
import { Button, Modal } from "react-bootstrap";

import { toast } from "react-toastify";
import { deleteCart } from "../../services/cartApi";

const CartDelete = (props) => {
    const { show, handleClose, dataCartDelete, handleDeleteCartFromModal } = props;




    const confirmDelete = async () => {
        const res = await deleteCart(dataCartDelete.id);

        if (res && +res.status === 200) {
            toast.success(`Xóa thành công xe: ${dataCartDelete.brandName} khỏi giỏ hàng!`);
            handleClose();
            handleDeleteCartFromModal(dataCartDelete);
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
                    <Modal.Title>Bạn có chắc chắn muốn xóa xe này khỏi giỏ hàng không?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">

                        <b>Tên xe = {dataCartDelete.name}</b>


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
export default CartDelete;