
import { Button, Modal } from "react-bootstrap";
import { deleteBrand } from "../../services/brandApi";
import { toast } from "react-toastify";

const BrandDelete = (props) => {
    const { show, handleClose, dataBrandDelete, handleDeleteBrandFromModal } = props;




    const confirmDelete = async () => {
        const res = await deleteBrand(dataBrandDelete.id);

        if (res && +res.status === 200) {
            toast.success(`Xóa thành công hãng xe: ${dataBrandDelete.brandName}`);
            handleClose();
            handleDeleteBrandFromModal(dataBrandDelete);
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

                        <b>Tên hãng xe = {dataBrandDelete.brandName}</b>


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
export default BrandDelete;