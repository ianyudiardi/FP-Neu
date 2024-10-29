import React, {useState} from 'react'
import { Modal } from "flowbite-react";

export default function CustomModal({children, textTrigger, className}) {
    const [openModal, setOpenModal] = useState(false);

    function onCloseModal() {
        setOpenModal(false);
    }

    function onCloseModalSuccess(){
        setOpenModal(false);
        window.location.reload();
    }

    return (
        <>
            <button className={`${className}`} onClick={() => setOpenModal(true)}>{textTrigger}</button>
            <section className=""></section>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    {React.cloneElement(children, { sendToParent: onCloseModalSuccess })}
                </Modal.Body>
            </Modal>
        </>
    )
}
