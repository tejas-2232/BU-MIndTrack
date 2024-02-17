import Modal, { ModalBody, ModalFooter, ModalHeader } from "../components/Modal"


export const CommonModal = ({ showModal, className }) => {
    return (
        <Modal showModal={showModal} closeModal className={className} >
            <ModalHeader>
                <h3>{header}</h3>
            </ModalHeader>
            <ModalBody>
                {props.children}
            </ModalBody>
            <ModalFooter>
                {props.children}
            </ModalFooter>
        </Modal>
    )
}