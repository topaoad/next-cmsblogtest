import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

export default function Search(): JSX.Element {
  const searchClient = algoliasearch('Application ID', 'Search-Only API Key');
  const indexName = '新規で作成した index の名前：今回の例では fwywd';
  return (
    <div>
      <InstantSearch indexName={indexName} searchClient={searchClient}>
        <SearchBox />
        <Hits />
      </InstantSearch>
    </div>
  );
}