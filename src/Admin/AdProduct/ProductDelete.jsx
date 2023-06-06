
import { Button, Modal } from "react-bootstrap";
import { deleteProduct } from "../../services/productApi";
import { toast } from "react-toastify";

const ProductDelete = (props) => {
    const { show, handleClose, dataProductDelete, handleDeleteProductFromModal } = props;




    const confirmDelete = async () => {
        const res = await deleteProduct(dataProductDelete.id);
        if (res && +res.status === 200) {
            toast.success(`Xóa thành công: ${dataProductDelete.name}`);
            handleClose();
            handleDeleteProductFromModal(dataProductDelete);
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
                    <Modal.Title>Bạn có chắc chắn xóa sản phẩm này không?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">

                        <b>Tên xe = {dataProductDelete.name}</b>


                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => confirmDelete()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>);
};
export default ProductDelete;