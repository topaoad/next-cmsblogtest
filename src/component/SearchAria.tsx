import React from 'react';
import ReactDOM from 'react-dom';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

export const SearchAria = () => {
  const searchClient = algoliasearch(
    "LU5FB0CBR5",
    "cd0760e4d83b3c73600bc9ab1220cc24"
  );
  const indexName = "microCMSblog";
  return (
    <div className="search-form">
      <InstantSearch indexName={indexName} searchClient={searchClient}>
        <SearchBox />
        <Hits />
      </InstantSearch>
    </div>
  );
};
