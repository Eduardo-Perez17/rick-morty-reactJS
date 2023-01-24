import React from 'react';
import { EpisodieCard } from '../EpisodieCard';

const EpisodieSearch = ({ episodes }) => {
  return (
    <>
      {episodes.results?.map((episodesData) => (
        <React.Fragment key={episodesData.id}>
          <EpisodieCard episodes={episodesData} />
        </React.Fragment>
      ))}
    </>
  );
};

export default EpisodieSearch;
