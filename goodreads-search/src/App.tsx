import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch";
import { RatingMenu } from "./components/refinements/RatingsMenu";
import SearchBoxHeader from "./components/header/SearchBoxHeader";
import HitsList from "./components/hits/HitsList";
import GenresMenu from "./components/refinements/GenresMenu";
import "./App.css";

const searchClient = algoliasearch("LLK6VK0IIY", "1601f62f4e3e133f6fbc2b67e744afc9");

export default function App() {
	return (
		<InstantSearch searchClient={searchClient} indexName="goodreads-popular-clean">
			<SearchBoxHeader />
			<div className="layout-container">
				<div className="layout-refinements">
					<GenresMenu />
					<RatingMenu attribute="rating" max={5} />
				</div>
				<div className="layout-hits">
					<HitsList />
				</div>
			</div>
		</InstantSearch>
	);
}