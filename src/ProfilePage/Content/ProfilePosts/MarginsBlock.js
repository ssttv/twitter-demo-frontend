import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MarginsBlock = styled.ul`
  padding: 0;
  list-style: none;
  margin: 15px 0 0 22px;
`;

const Contact = styled.li`
  display: inline-block;
  padding-right: 8px;
  font-size: 13px;
  line-height: 18px;
`;

const ContactLink = styled(Link)`
  text-decoration: none;
  color: #718290;

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.span`
  color: #718290;
`;

export default () => (
  <MarginsBlock>
    <Contact>
      <Copyright>© 2018 Twitter</Copyright>
    </Contact>
    <Contact>
      <ContactLink to="/about">About</ContactLink>
    </Contact>
    <Contact>
      <ContactLink to="/Contact">Help Center</ContactLink>
    </Contact>
    <Contact>
      <ContactLink to="/terms">Terms</ContactLink>
    </Contact>
    <Contact>
      <ContactLink to="/privacy_policy">Privacy policy</ContactLink>
    </Contact>
    <Contact>
      <ContactLink to="/cookies">Cookies</ContactLink>
    </Contact>
    <Contact>
      <ContactLink to="/ads">Ads Info</ContactLink>
    </Contact>
  </MarginsBlock>
);
