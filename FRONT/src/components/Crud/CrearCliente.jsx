import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {HOME} from '../../router/router'

const CrearCliente = () => {

  const navigate = useNavigate()

  const handleSubmit = (e) => {

  }

  return (
    <div>
      <br />
   <Container>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre" />
      </Form.Group>
<br />
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su apellido" />
      </Form.Group>
<br />
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="number" placeholder="Ingrese su apellido" />
      </Form.Group>
<br />
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>E-Mail</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su apellido" />
      </Form.Group>
<br />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
   </Container>

    </div>
  )
}

export default CrearCliente
