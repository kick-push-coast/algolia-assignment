import { BookHit } from "./BookHit";
import { Hits, Pagination, SortBy, Stats } from "react-instantsearch";
import "./HitsList.css";
import { useMobileFilters } from "../../context/MobileFiltersContext";
import FilterIcon from "../../icons/FiltersIcon";

export default function HitsList() {
    const { toggleMobileFilters } = useMobileFilters();

    return (
        <div className="hits-list-container">
            <div className="hits-list-header">
                <button className="hits-list-filters-button" onClick={toggleMobileFilters}>
                    Filters
                    <FilterIcon size={17} color="#595959" />
                </button>
                <Stats className="hits-stats" />
                <SortBy
                    items={[
                        { label: "Sort by relevance", value: "goodreads-popular-clean" },
                        { label: "Sort by rating", value: "goodreads-popular-clean_rating_desc" }
                    ]}
                    classNames={{
                        select: "hits-list-sort-select"
                    }}
                />
            </div>
            <Hits
                hitComponent={BookHit} 
                classNames={{
                    list: "hits-list"
                }}
            />
            <Pagination
                padding={1}
                showFirst={false}
                showLast={false}
                classNames={{
                    list: "hits-pagination-list",
                    link: "hits-pagination-link",
                    selectedItem: "hits-pagination-selected"
                }}
            />
        </div>
    )
}