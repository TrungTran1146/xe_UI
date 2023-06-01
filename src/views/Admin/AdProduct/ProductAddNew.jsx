import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import { ToastContainer, toast } from 'react-toastify';


const ProductAddNew = (props) => {
    const { show, handleClose, handleUpdateTable } = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");


    const handleSaveUser = async () => {
        let res = await (name, job);

        if (res && res.id) {
            handleClose();
            setName("");
            setJob("");
            toast.success("A User is create succeed!");
            handleUpdateTable({ first_name: name, id: res.id })
        } else {
            toast.error("An error...");
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">

                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter Name"
                                value={name}
                                onChange={(event) => setName(event.target.value)} />

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Job</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter Job"
                                value={job}
                                onChange={(event) => setJob(event.target.value)} />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveUser}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>);
};
export default ProductAddNew;