import * as React from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const OPTIONS = [
  { key: 'cc', value: 'Cédula de ciudadanía' },
  { key: 'passport', value: 'Pasaporte' },
];

export default function FormComponent() {
  const [isValid, setIsValid] = React.useState(false);
  const [typeDoc, setTypeDoc] = React.useState<string>();
  const [numDoc, setNumDoc] = React.useState<string>("10100100102");
  const navigate = useNavigate();

  React.useEffect(() => {
    const validType = typeDoc && typeDoc !== 'empty';
    const lengthNum = numDoc && numDoc.toString().length;
    const validNum = lengthNum >= 8 && lengthNum <= 11;
    if (validType && validNum) setIsValid(true);
    else setIsValid(false);
  }, [typeDoc, numDoc]);

  return (
    <Container>
      <Stack direction="vertical">
        <Form onSubmit={handleSubmit}>
          <Form.Text className="span-form">Todos los campos son obligatorios</Form.Text>
          <br />
          <Form.Label className="label-form" htmlFor="type">
            Tipo de documento
          </Form.Label>
          <Form.Select 
            id="type" className="input-form" name="type" onChange={onChangeType}>
            <option value="empty" defaultChecked>
              Selecciona tipo de documento
            </option>
            {OPTIONS.map((val, i) => (
              <option key={val.key} value={val.key}>
                {val.value}
              </option>
            ))}
          </Form.Select>

          <Form.Label className="label-form" htmlFor="number">
            Número de documento
          </Form.Label>
          <Form.Control
            id="number"
            name="number"
            type="tel"
            value={numDoc}
            onChange={onChangeNum}
            className="input-form"
            minLength={8}
            maxLength={11}
          ></Form.Control>
          <Form.Control
            type="submit"
            value="Buscar"
            className="btn-form"
            disabled={!isValid}
          />
        </Form>
      </Stack>
    </Container>
  );

  function onChangeType(e: React.ChangeEvent<HTMLSelectElement>) {
    e.preventDefault();
    setTypeDoc(e.target.value);
  }

  function onChangeNum(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    let val = e.target.value
    // @ts-ignore
    if(!isNaN(val)) setNumDoc(val);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const type = data?.get('type')?.toString() + '';
    const num = data?.get('number')?.toString() + '';
    console.log(type, num);
    navigate(`/search?num=${num}&type=${type}`);
  }
}
