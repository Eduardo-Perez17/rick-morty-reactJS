import React from 'react';

import { CharacterArticle } from '../../components/CharacterArticle';

const CharactersSearch = ({ characterValue }) => {
  return (
    <>
      {characterValue.results && (
        <>
          {characterValue.results.length > 1 ? (
            characterValue.results.map((characterData) => (
              <React.Fragment key={characterData.id}>
                <CharacterArticle characterValue={characterData} />
              </React.Fragment>
            ))
          ) : (
            <>
              {characterValue.results && (
                <>
                  {characterValue.results.map((characterData) => (
                    <React.Fragment key={characterData.id}>
                      <CharacterArticle characterValue={characterData} />
                    </React.Fragment>
                  ))}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default CharactersSearch;
