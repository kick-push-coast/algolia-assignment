import SearchBoxInput from "../inputs/SearchBoxInput";
import "./SearchBoxHeader.css";

export default function SearchBoxHeader() {
    return (
        <header className="search-box-header">
            <h1 className="search-box-header-title">
                Discover your next good read.
            </h1>
            <SearchBoxInput />
        </header>
    )
}