import { Modal } from "react-bootstrap";
import "./Home.scss"

const HomeModal = ({ show, setModal, title, children }) => {
  return (
    <div className="modal">
      <Modal className="modal-main" show={true} onHide={() => setModal(false)} centered size="lg">
        <Modal.Header className="modal-header-cus">
          <Modal.Title>
            <span>{title}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </div>
  );
};

export default HomeModal;
