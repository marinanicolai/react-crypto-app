import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Container, SocialMediaRow, InfoRow, Img } from "./Footer.styles";

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
        <InfoRow>
          Created by <strong>Marina Nicolai</strong>/ Powered by
          <Img>
            <img
              src="https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png"
              alt="CoinGheko"
              width="100%"
            />
          </Img>
          <strong>CoinGecko API</strong>
          <span className={"hide-xs"}> - 2022</span>
        </InfoRow>
      </Container>
    </>
  );
};

export default Footer;
