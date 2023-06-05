
import { Button, Modal } from "react-bootstrap";
import { deleteProduct } from "../../services/productApi";
import { toast } from "react-toastify";

const ProductDelete = (props) => {
    const { show, handleClose, dataProductDelete } = props;




    const confirmDelete = async () => {
        const res = await deleteProduct(dataProductDelete.id);
        if (res && +res.status === 200) {
            toast.success("Xóa thành công! ")
        } else {
            toast.error("Xóa thất bại!")
        }
        console.log("xoa ", res);
    }


    return (
        <>
            <Modal show={show} onHide={handleClose}>




                <Modal.Header closeButton>
                    <Modal.Title>Xóa sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">

                        <b>ten xe ={dataProductDelete.name}</b>


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