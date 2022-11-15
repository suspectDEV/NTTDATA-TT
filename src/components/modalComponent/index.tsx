import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';


function AlertComponent({ ...props }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Documento inexistente
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        No se han encontrado resultados con el número o tipo de documento seleccionado.
        <br />
        Verifique la documentación para ingresar un documento válido.
      </Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button>
            Regresar
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

// function AlertDispatch() {
//   const [modalShow, setModalShow] = useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>


//     </>
//   );
// }

export default AlertComponent;