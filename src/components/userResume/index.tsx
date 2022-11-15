import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import HardCodedUsers from '../../data/users';
import { Container, Form, Stack } from 'react-bootstrap';
import AlertComponent from '../modalComponent';

interface iUser {
  name?: string;
  lastname?: string;
}

const UserResumeComponent = () => {
  const [searchParams] = useSearchParams();
  const [modalShow, setModalShow] = useState(false);
  const [user, setUser] = useState<iUser>({});

  useEffect(() => {
    let type = searchParams.get('type');
    let num = searchParams.get('num');
    if (num && type) setUser(HardCodedUsers[type][num]);
    if (!HardCodedUsers[type][num]) setModalShow(true)
  }, []);

  return (
    <Container>
      <h5 className="tlt-form">Información básica</h5>
      <Form>
        <Stack direction="vertical">
          <Form.Label className="label-form" disabled>
            Primer apellido
          </Form.Label>
          <Form.Control
            disabled
            className="input-form"
            value={user?.lastname}
          ></Form.Control>
          <Form.Label className="label-form" disabled>
            Primer nombre
          </Form.Label>
          <Form.Control
            className="input-form"
            disabled
            value={user?.name}
          ></Form.Control>
        </Stack>
      </Form>
      <Link className="link-form" to="/">
        Regresar
      </Link>
      <AlertComponent />
      <AlertComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default UserResumeComponent;
