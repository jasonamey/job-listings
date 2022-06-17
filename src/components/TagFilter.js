import React from "react";
import styled from "styled-components";
import TagList from "./TagList";

function TagFilter({selectedTags, removeTag, clearTags, showTagFilter}) {
  const showTag = showTagFilter ? 1 : 0;
  return (
    <TagFilterWrapper style={{opacity: showTag}}>
      <TagList featured={true} tagHandler={removeTag} tags={selectedTags} />
      <button className="clear-button" onClick={clearTags}>
        Clear
      </button>
    </TagFilterWrapper>
  );
}

export default TagFilter;

const TagFilterWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 15px 30px;
  transform: translateY(-150%);
  border-radius: 3px;
  width: 100%;
  position: absolute;
  box-shadow: 0px 1px 8px 0px hsla(180, 8%, 52%, 0.3);

  .clear-button {
    font: inherit;
    color: var(--dark-cyan);
    background: transparent;
    border: none;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
  }
`;
