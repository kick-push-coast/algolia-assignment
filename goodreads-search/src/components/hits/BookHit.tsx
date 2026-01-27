import type { Book } from "../../types/hits";
import "./BookHit.css";

export function BookHit(props: {hit: Book}) {
  const book = props.hit;
  const bookUrl = `https://www.goodreads.com/book/show/${book.bookId}`;

  return (
    <article>
      <a href={bookUrl} className="search-result">
        <div className="result-image">
          <img src={book.coverImg} alt={`Cover of ${book.title}`} />
        </div>
        <div className="result-contents">
          <div className="result-header">
            <h2 className="result-title">{book.title}</h2>

            <div className="result-rating">
              <span className="stars">★ {book.rating} / 5</span>
              <span className="liked">{book.likedPercent}% liked</span>
            </div>
          </div>
          <p className="result-author">by {book.author}</p>
          <p className="result-description">{book.description}</p>
          <div className="result-footer">
            {Array.isArray(book.genres) ? (
              <div className="genres">
                {book.genres.map((g) => (
                  <span key={g} className="genre">
                    {g}
                  </span>
                ))}
              </div>
            ) : (
              <span className="genre">{book.genres}</span>
            )}
          </div>
        </div>
      </a>
    </article>
  );
}