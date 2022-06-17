import React from "react";
import Tag from "./Tag";
import styled from "styled-components";

const TagList = ({tags, featured = false, tagHandler}) => {
  return (
    <TagListWrapper>
      {tags.map((tag) => (
        <li key={Math.random().toString()}>
          <Tag tagContent={tag} tagHandler={tagHandler} featured={featured} />
        </li>
      ))}
    </TagListWrapper>
  );
};

const TagListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  li {
    padding: 0;
    list-style: none;
  }
  @media screen and (max-width: 740px) {
    justify-content: flex-start;
  }
`;

export default TagList;
