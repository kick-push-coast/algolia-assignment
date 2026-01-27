import { BookHit } from "./BookHit";
import { Hits, Pagination, SortBy, Stats } from "react-instantsearch";
import "./HitsList.css";

export default function HitsList() {
    return (
        <div className="hits-list-container">
            <div className="hits-list-header">
                <Stats />
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
                classNames={{
                    list: "hits-pagination-list",
                    link: "hits-pagination-link",
                    selectedItem: "hits-pagination-selected"
                }}
            />
        </div>
    )
}