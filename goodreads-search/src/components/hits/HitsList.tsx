import { BookHit } from "./BookHit";
import { Hits, Pagination, SortBy, Stats } from "react-instantsearch";
import { useMobileFilters } from "../../context/MobileFiltersContext";
import FilterIcon from "../../icons/FiltersIcon";
import "./HitsList.css";

export default function HitsList() {
    const { isMobileFiltersOpen, toggleMobileFilters } = useMobileFilters();

    return (
        <main className="hits-list-container">
            <div className="hits-list-header">
                <button  
                    aria-expanded={isMobileFiltersOpen}
                    aria-controls="filters"
                    className="hits-list-filters-button" 
                    onClick={toggleMobileFilters}
                >
                    Filters
                    <FilterIcon size={17} color="#595959" />
                </button>
                <Stats
                    aria-live="polite" 
                    className="hits-stats"
                />
                <SortBy
                    items={[
                        { label: "Sort by relevance", value: "goodreads-popular" },
                        { label: "Sort by rating", value: "goodreads-popular_rating_desc" }
                    ]}
                    classNames={{
                        select: "hits-list-sort-select"
                    }}
                />
            </div>
            <Hits
                aria-live="polite" 
                hitComponent={BookHit} 
                classNames={{
                    list: "hits-list"
                }}
            />
            <Pagination
                padding={1}
                classNames={{
                    list: "hits-pagination-list",
                    link: "hits-pagination-link",
                    selectedItem: "hits-pagination-selected"
                }}
            />
        </main>
    )
}