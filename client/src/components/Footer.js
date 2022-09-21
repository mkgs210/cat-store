import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => (
	<>
	<p></p>
		<Container fluid style={{ backgroundColor: '#212529', color: '#fff' }}>
			<Container style={{display:'flex', justifyContent:'center', padding: '10px', paddingBottom: '1px'}}>
			<p>Наши контакты +7(800)555-35-35</p>
			</Container>
		</Container>
	</>
);

export default Footer;