import React from "react";
import styled from "styled-components";

const Card = ({children, featured}) => {
  return (
    <CardWrapper>
      {featured && <div className={`side`}></div>}
      {children}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 24px 24px 24px 24px;
  border-radius: 3px;
  box-shadow: 0px 1px 8px 0px hsla(180, 8%, 52%, 0.3);
  position: relative;
  overflow: hidden;
  margin-bottom: 16px;
  .side {
    position: absolute;
    height: 100%;
    width: 3px;
    background-color: var(--dark-cyan);
    margin-left: -24px;
  }
  @media screen and (max-width: 740px) {
    width: 330px;
    box-shadow: 0px 5px 8px 0px hsla(180, 8%, 52%, 0.3);
    margin-bottom: 50px;
    overflow: visible;
    .side {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
  }
`;

export default Card;
