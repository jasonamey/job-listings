import React from "react";
import styled from "styled-components";

const Tag = ({tagContent, tagHandler, featured}) => {
  return (
    <TagWrapper
      className="selected-job-tag"
      key={Math.random().toString()}
      onClick={() => tagHandler(tagContent)}
    >
      <span className="tag-text">{tagContent}</span>
      {featured && <span className="tag-cancel">X</span>}
    </TagWrapper>
  );
};

const TagWrapper = styled.button`
  display: flex;
  align-items: center;
  border: none;
  font: inherit;
  font-size: 10px;
  font-weight: 700;
  border-radius: 3px;

  color: var(--dark-cyan);
  background-color: var(--light-gray-cyan);
  cursor: pointer;
  overflow: hidden;
  :not(:last-child) {
    margin-right: 10px;
  }
  .tag-text {
    display: flex;
    align-items: center;
    padding: 6px 8px 4px 8px;
    color: var(--dark-cyan);
    background-color: var(--light-gray-cyan);
  }
  .tag-cancel {
    height: 100%;
    padding: 6px 8px 4px 8px;
    display: flex;
    align-items: center;
    background-color: var(--dark-cyan);
    color: var(--light-gray-cyan);
  }
`;

export default Tag;
