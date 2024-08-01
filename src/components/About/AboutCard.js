import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dragan Vasic </span>
            from <span className="purple"> Belgrade, Serbia.</span>
            <br />
            I am currently employed as a blockchain developer at Zvecka.
            <br />
            I have completed Bachelor of Computer Science (BCs) in Computer Engineering at University of Novi Sad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Table Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Fishing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Strive to build things that make a difference!{" "}
          </p>
          <footer className="blockquote-footer">Dragan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
