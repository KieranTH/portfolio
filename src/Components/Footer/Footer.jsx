import React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";


import './Footer.scss';

function Footer(props){
  return(
  <div className="footer">
    <Box className="mainBox">
      <Container>
        <Row>
          <Column>
            <Heading>Contact Me</Heading>
            <FooterLink href={"mailto: Kieran.hughes2@live.co.uk"}>E-Mail</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://github.com/KieranTH/">
                <span style={{ marginLeft: "10px" }}>
                  GitHub
                </span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <Container className="copy-cont">
        <Row className="copyRow">
          <p className="copyright">
            &copy; Copyright 2021 - Kieran Hughes
          </p>
        </Row>
      </Container>
    </Box>
  </div>
  );
}

export default Footer;
