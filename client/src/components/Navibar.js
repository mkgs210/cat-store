import React, { useState } from 'react';
import { Nav, Navbar, Button, Container, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
	a, .navbar-brand, .navbar-nav .navbar-link {
		color: #adb1b8
		&:hover{
			color: white
		}
	}

`

export default function NaviBar() {


	const [show1, setShow1] = useState(false);

	const handleClose1 = () => setShow1(false);
	const handleShow1 = () => setShow1(true);

	const [show2, setShow2] = useState(false);

	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);

	return (
		<>
			<Styles>

				<Navbar collapseOnSelect expland='lg' bg='dark' variant='dark'>
					<Container>
						<Navbar.Brand>Webdev blog</Navbar.Brand>
						<Navbar.Toggle aria-controls='responsive-navbar-nav'/>
						<Navbar.Collapse id='responsive-navbar-nav'>
							<Nav className='mr-auto'>
								<Nav.Link as={Link} to="/">Home</Nav.Link>
								<Nav.Link as={Link} to="/users">Users</Nav.Link>
								<Nav.Link as={Link} to="/about">About</Nav.Link>
							</Nav>
							<Nav className="ms-auto">
								<Button variant='primary' className='me-2' onClick={handleShow1 }>Log In </Button>
								<Button variant='primary' className='me-3' onClick={handleShow2}>Sign out</Button>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</Styles>
			<Modal show={show1} onHide={handleClose1}>
				<Modal.Header closeButton>
					<Modal.Title>AAAAAA</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId='fromBasicEmail'>
							<Form.Label>Email adress</Form.Label>
							<Form.Control type='email' placeholder='Enter email' />
							<Form.Text className='text-muted'>Enter email</Form.Text>
						</Form.Group>
						<Form.Group controlId='fromBasicPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control type='password' placeholder='Enter password' />
							
						</Form.Group>
					</Form>

				</Modal.Body>
			</Modal>
			<Modal show={show2} onHide={handleClose2}>
				<Modal.Header closeButton>
					<Modal.Title>BBBBBBB</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId='fromBasicEmail'>
							<Form.Label>Email adress</Form.Label>
							<Form.Control type='email' placeholder='Enter email' />
							<Form.Text className='text-muted'>⠀</Form.Text>
						</Form.Group>
						<Form.Group controlId='fromBasicPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control type='password' placeholder='Enter password' />
							<Form.Text className='text-muted'>⠀</Form.Text>
						</Form.Group>
						<Form.Group controlId='fromBasicCheckbox'>
							<Form.Check type='checkbox' label='Remember me' />

						</Form.Group>
					</Form>

				</Modal.Body>
			</Modal>

		</>
)}