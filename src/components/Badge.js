import React from "react";
import styled from "styled-components";

const Badge = ({content, newJob}) => {
  return <BadgeWrapper newJob={newJob}>{content}</BadgeWrapper>;
};

const BadgeWrapper = styled.span`
  font-size: 7px;
  font-family: inherit;
  font-weight: 700;
  color: white;
  border-radius: 14px;
  padding: 5px 5px 3px 5px;
  text-transform: uppercase;
  border: none;
  background-color: ${(props) =>
    props.newJob ? "var(--dark-cyan)" : "var(--x-dark-gray-cyan)"};
  margin-right: ${(props) => (props.newJob ? "6px" : "")};
`;

export default Badge;
