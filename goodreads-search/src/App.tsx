import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch, RefinementList } from "react-instantsearch";
import SearchBoxHeader from "./components/header/SearchBoxHeader";
import HitsList from "./components/hits/HitsList";
import "./App.css";
import { RatingMenu } from "./components/refinements/RatingsMenu";

const searchClient = algoliasearch("LLK6VK0IIY", "1601f62f4e3e133f6fbc2b67e744afc9");

export default function App() {
	return (
		<InstantSearch searchClient={searchClient} indexName="goodreads-popular-clean">
			<SearchBoxHeader />
			<div className="layout-container">
				<div className="layout-refinements">
					<h3 className="refinements-genre-header">Genres</h3>
					<RefinementList 
						attribute="genres"
						limit={8}
						showMore
						classNames={{
							list: "refinements-genre-list",
							item: "refinements-genre-item",
							labelText: "refinements-genre-label",
							count: "refinements-genre-count",
							showMore: "refinements-genre-show-more"
						}}
					/>
					<RatingMenu attribute="rating" max={5} />
				</div>
				<div className="layout-hits">
					<HitsList />
				</div>
			</div>
		</InstantSearch>
	);
}