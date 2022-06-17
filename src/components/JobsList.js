import React from "react";
import Job from "./Job";
import styled from "styled-components";
import {hasTag} from "../utils/helpers";

function JobsList({jobsData, selectedTags, addTag}) {
  const viewableJobs =
    selectedTags.length === 0
      ? jobsData
      : jobsData.filter((job) => hasTag(job, selectedTags));

  const jobsContent = viewableJobs.map((job) => {
    return (
      <Job key={job.id} addTag={addTag} jobData={job} featured={job.featured} />
    );
  });

  return <JobsListWrapper>{jobsContent}</JobsListWrapper>;
}

const JobsListWrapper = styled.section`
  margin-top: 52px;
`;

export default JobsList;
