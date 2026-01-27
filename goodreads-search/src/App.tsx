// Import React InstantSearch
import { liteClient as algoliasearch } from "algoliasearch/lite";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch";

// Initialize the Algolia Search API client (use your credentials from the dashboard)
const searchClient = algoliasearch("LLK6VK0IIY", "1601f62f4e3e133f6fbc2b67e744afc9");

interface Book {
  bookId: string,
  title: string,
  series: string,
  author: string,
  rating: number,
  description: string,
  language: string,
  isbn: string,
  genres: string[],
  bookFormat: string,
  pages: number,
  publisher: string,
  publishDate: number,
  awards: string[],
  numRatings: number,
  ratingsByStars: number[],
  likedPercent: number,
  coverImg: string,
  objectID: string
}

export default function App() {
	return (
		<InstantSearch searchClient={searchClient} indexName="goodreads-popular-clean">
      <SearchBox />
      <Hits hitComponent={Hit} />
		</InstantSearch>
	);
}

function Hit(props: {hit: Book}) {
  const book = props.hit;
  return (
    <article>
      <img src={book.coverImg} alt={book.title} />
      <p>{book.genres[0]}</p>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </article>
  );
}