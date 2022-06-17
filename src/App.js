import React, {useState} from "react";
import JobsList from "./components/JobsList";
import TagFilter from "./components/TagFilter";
import styled from "styled-components";
import BgImg from "./images/bg-header-desktop.svg";
import data from "./data.json";

function App() {
  const [tags, setTags] = useState([]);

  const addTagHandler = (newTag) => {
    if (!tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
  };

  const removeTagHandler = (tagToRemove) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(newTags);
  };

  const clearTagsHandler = () => {
    setTags([]);
  };
  return (
    <AppWrapper>
      <header />
      <div className="app">
        <TagFilter
          showTagFilter={tags.length > 0}
          removeTag={removeTagHandler}
          selectedTags={tags}
          clearTags={clearTagsHandler}
        />
        <JobsList jobsData={data} selectedTags={tags} addTag={addTagHandler} />
      </div>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f0fafa;

  header {
    width: 100%;
    height: 140px;
    background: no-repeat url(${BgImg}), #5ca5a4;
    background-size: cover;
  }
  .app {
    width: 80%;
    margin: 0 auto;
    position: relative;
  }

  @media screen and (max-width: 740px) {
    .app {
      width: 330px;
      display: flex;
      justify-content: center;
    }
  }
`;
