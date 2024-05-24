import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Dragan Vasic</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} DRAGAVASIC</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Cryptodev0124"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src="/images/github1.png" alt="" width="20px" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://t.me/cryptodev0615"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src="/images/telegram1.png" alt="" width="20px" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/dragan-vasic-0b7077292/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src="/images/linkedin1.png" alt="" width="20px" />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="https://discord.com/drag.vas88"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src="/images/discord.png" alt="" width="20px" />
              </a>
            </li> */}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
