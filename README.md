# Mike Tyler - Algolia Assignment

## Where to find things

__Live search page__: https://kick-push-coast.github.io/algolia-assignment/

__Source code__: [/goodreads-search/](https://github.com/kick-push-coast/algolia-assignment/tree/main/goodreads-search)

__Data set files__: [/dataset/](https://github.com/kick-push-coast/algolia-assignment/tree/main/dataset)

This includes the original CSV from a [Goodreads book data set](https://www.kaggle.com/datasets/pooriamst/best-books-ever-dataset?resource=download) and the conversion script used to clean the data and convert it JSON to get it ready for indexing. The script does a couple basic things:
- Takes only books with > 15,000 ratings to trim index to the most-read books
- Converts data type of number, date, and array columns

## Methodology

The search UI was built based on theoretical requirements that might come out of discovery:

### Client priorities

The client has found that historically most users look for books either by a particular genre or by finding books that are highly rated by other users. They want to prioritize more powerful sorting and filtering capabilities based on genres and ratings. The organization also has an annual award that they give books, the "Goodreads Choice Award". They would like to highlight the award by making books that have won or been nominated more visible in search.

### Pain points

The client's current search solution has a few particular issues that they would like to address:

- Books can only be searched by title or description. Searches for specific genres and authors do no match on results.
- The search does not have a good mobile experience.
- The search has accessibility issues that have been reported by users.
- Harry Potter books are the most searched books, but searching for "harry potter" currently provides a disorganized list of results that includes other results like magazines at the top.

### Functional requirements

Users should be able to:
- Search for books by title, description, author, or genre
- Clearly see a book's genres and star ratings in results
- Filter books based on specific genres and star rating thresholds
- Sort results by star rating
- Easily use search on mobile and tablet devices
- Navigate the entire search UI using assistive technologies like keyboards and screen readers

### Relevance requirements

- Books that have won or been nominated for "Goodreads Choice Awards" should be given an organic relevance boost
- Searches for "harry potter" should present the main 7 books in order at the top of results
