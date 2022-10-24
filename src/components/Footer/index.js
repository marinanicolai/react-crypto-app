import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Container, SocialMediaRow } from "./Footer.styles";

const Footer = () => {
  return (
    <>
      <Container>
        <SocialMediaRow>
          <a
            href="https://www.linkedin.com/in/marina-nicolai-b627b1128/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:nicolaimarina@gmail.com">
            <HiMail />
          </a>
          <a
            href="https://github.com/marinanicolai"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare />
          </a>
        </SocialMediaRow>
      </Container>
    </>
  );
};

export default Footer;
