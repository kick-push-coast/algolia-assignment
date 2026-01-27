import SearchBoxInput from "./SearchBoxInput";
import "./SearchBoxHeader.css";

export default function SearchBoxHeader() {
    return (
        <div className="search-box-header">
            <h1 className="search-box-header-title">
                Discover your next good read.
            </h1>
            <SearchBoxInput />
        </div>
    )
}