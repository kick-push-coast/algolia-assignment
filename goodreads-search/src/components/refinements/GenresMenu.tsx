import { RefinementList } from "react-instantsearch";
import "./GenresMenu.css";

export default function GenresMenu() {
    return (
        <div>
            <h3 className="refinements-genre-header">Genre</h3>
            <RefinementList 
                attribute="genres"
                limit={8}
                showMore
                classNames={{
                    list: "refinements-genre-list",
                    item: "refinements-genre-item",
                    checkbox: "refinements-genre-input",
                    labelText: "refinements-genre-label",
                    count: "refinements-genre-count",
                    showMore: "refinements-genre-show-more",
                    selectedItem: "refinements-genre-item-selected"
                }}
            />
        </div>
    )
}