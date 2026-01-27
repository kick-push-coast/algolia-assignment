// Import React InstantSearch
import { liteClient as algoliasearch } from "algoliasearch/lite";
import { Hits, InstantSearch } from "react-instantsearch";
import { BookHit } from "./components/hits/BookHit";
import SearchBoxHeader from "./components/header/SearchBoxHeader";

// Initialize the Algolia Search API client (use your credentials from the dashboard)
const searchClient = algoliasearch("LLK6VK0IIY", "1601f62f4e3e133f6fbc2b67e744afc9");

export default function App() {
	return (
		<InstantSearch searchClient={searchClient} indexName="goodreads-popular-clean">
      <SearchBoxHeader />
      <Hits hitComponent={BookHit} />
		</InstantSearch>
	);
}