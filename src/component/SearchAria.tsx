import React from 'react';
import ReactDOM from 'react-dom';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

export const SearchAria = () => {
  const searchClient = algoliasearch(
    process.env.ALGONIA_APPLICATION_ID,
    process.env.ALGONIA_SEARCH_ONLY_API_KEY
  );
  const indexName = process.env.ALGONIA_INITINDEX;
  return (
    <div className="search-form">
      <InstantSearch indexName={indexName} searchClient={searchClient}>
        <SearchBox />
        <Hits />
      </InstantSearch>
    </div>
  );
};
