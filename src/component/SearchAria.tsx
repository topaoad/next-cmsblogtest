import React from "react";
// import ReactDOM from "react-dom";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

export const SearchAria = () => {
  const searchClient = algoliasearch(
    process.env.ALGONIA_APPLICATION_ID as string,
    process.env.ALGONIA_SEARCH_ONLY_API_KEY as string
  );
  const indexName: string = process.env.ALGONIA_INITINDEX as string;
  return (
    <div className="search-form">
      <InstantSearch indexName={indexName} searchClient={searchClient}>
        <SearchBox />
        <Hits />
      </InstantSearch>
    </div>
  );
};
