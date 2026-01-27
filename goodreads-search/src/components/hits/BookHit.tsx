import type { Book } from "../../types/hits";

export function BookHit(props: {hit: Book}) {
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