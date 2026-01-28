import { SearchBox } from "react-instantsearch";
import "./SearchBoxInput.css";

export default function SearchBoxInput() {
    return (
        <SearchBox
            classNames={{
                root: "search-box-root",
                form: "search-box-form",
                input: "search-box-input",
                submit: "search-box-submit-btn",
                reset: "search-box-reset-btn"
            }}
            placeholder="Search books by title, author, genre, or description"
        />
    )
}