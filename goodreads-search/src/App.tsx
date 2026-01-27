import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch";
import SearchBoxHeader from "./components/header/SearchBoxHeader";
import HitsList from "./components/hits/HitsList";

const searchClient = algoliasearch("LLK6VK0IIY", "1601f62f4e3e133f6fbc2b67e744afc9");

export default function App() {
	return (
		<InstantSearch searchClient={searchClient} indexName="goodreads-popular-clean">
			<SearchBoxHeader />
			<HitsList />
		</InstantSearch>
	);
}