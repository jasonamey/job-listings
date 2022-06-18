import React from "react";
import styled from "styled-components";
import TagList from "./TagList";
import Card from "./ui/Card";
import Badge from "./Badge";

function Job(props) {
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    new: newTag,
    postedAt,
    contract,
    location,
    languages,
  } = props.jobData;
  const {addTag} = props;
  const jobTags = [role, level, ...languages];

  return (
    <Card featured={featured}>
      <JobWrapper>
        <div className="job-content">
          <img className="job-content-logo" src={logo} alt={company} />
          <div className="job-content-text">
            <div className="row-1">
              <span className="company-label">{company}</span>
              {newTag && <Badge content={"new!"} newJob={true} />}
              {featured && <Badge content={"featured"} newJob={false} />}
            </div>
            <div className="row-2">
              <h1>{position}</h1>
            </div>
            <div className="row-3">
              {postedAt}
              <span aria-label="middle separating dot" role="img">
                ·
              </span>
              {contract}
              <span aria-label="middle separating dot" role="img">
                ·
              </span>
              {location}
            </div>
          </div>
        </div>
        <TagList featured={false} tagHandler={addTag} tags={jobTags} />
      </JobWrapper>
    </Card>
  );
}

const JobWrapper = styled.article`
  display: flex;
  width: 100%;
  justify-content: space-between;
  .job-content {
    display: flex;
    justify-content: space-between;
  }
  .job-content-logo {
    width: 62px;
    height: 62px;
    margin-right: 16px;
  }
  .job-content-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 184px;
    padding: 3px 0 3px 0;
    .row-1 {
      font-size: 11px;
      color: var(--dark-cyan);
      font-weight: 700;
      .company-label {
        margin-right: 12px;
      }
    }
    .row-2 {
      font-size: 12px;
      font-weight: 700;
      h1 {
        cursor: pointer;
        font-size: 12px;
        color: var(--x-dark-gray-cyan);
        &:hover {
          color: var(--dark-cyan);
        }
      }
    }
    .row-3 {
      font-size: 11px;
      color: var(--dark-gray-cyan);
      display: flex;
      justify-content: space-between;
    }
  }

  @media screen and (max-width: 740px) {
    display: block;
    padding: 0 0 0 0;
    .job-content {
      padding-top: 24px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      margin-bottom: 16px;
      .job-content-logo {
        position: absolute;
        top: 0;
        left: 0;
        width: 48px;
        height: 48px;
        margin-left: 24px;
        transform: translateY(-50%);
      }
      div[class^="row"] {
        margin-bottom: 16px;
      }
    }
  }
`;

export default Job;
