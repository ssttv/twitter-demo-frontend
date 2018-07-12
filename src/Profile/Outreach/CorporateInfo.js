// @flow
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CorporateInfo = styled.ul`
  padding: 0;
  list-style: none;
  margin-top: 15px;
`;

const Note = styled.li`
  display: inline-block;
  padding-right: 8px;
  font-size: 13px;
  line-height: 18px;
`;

const NoteLink = styled(Link)`
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
  <CorporateInfo>
    <Note>
      <Copyright>© 2018 Twitter</Copyright>
    </Note>
    <Note>
      <NoteLink to="/about">About</NoteLink>
    </Note>
    <Note>
      <NoteLink to="/support">Help Center</NoteLink>
    </Note>
    <Note>
      <NoteLink to="/terms">Terms</NoteLink>
    </Note>
    <Note>
      <NoteLink to="/privacy_policy">Privacy policy</NoteLink>
    </Note>
    <Note>
      <NoteLink to="/cookies">Cookies</NoteLink>
    </Note>
    <Note>
      <NoteLink to="/ads">Ads Info</NoteLink>
    </Note>
  </CorporateInfo>
);
