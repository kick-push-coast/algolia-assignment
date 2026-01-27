import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch";
import { MobileFiltersProvider } from "./context/MobileFiltersContext";
import SearchBoxHeader from "./components/sections/SearchBoxHeader";
import SearchContents from "./components/sections/SearchContents";

const searchClient = algoliasearch("LLK6VK0IIY", "1601f62f4e3e133f6fbc2b67e744afc9");

export default function App() {
	return (
		<InstantSearch searchClient={searchClient} indexName="goodreads-popular-clean">
			<MobileFiltersProvider>
				<SearchBoxHeader />
				<SearchContents />
			</MobileFiltersProvider>
		</InstantSearch>
	);
}