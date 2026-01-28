import GenresMenu from "../refinements/GenresMenu";
import { RatingMenu } from "../refinements/RatingsMenu";
import { useMobileFilters } from "../../context/MobileFiltersContext";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import "./RefinementsList.css";

export default function RefinementsList() {
    const { isMobileFiltersOpen, toggleMobileFilters } = useMobileFilters();
    const isMobile = useMediaQuery("(max-width: 1000px)");
    
    return (
        <aside
            className={`refinements-list ${isMobileFiltersOpen ? 'refinements-list-mobile-open' : ''}`}
            id="filters"
            role={isMobile && isMobileFiltersOpen ? "dialog" : undefined}
            aria-modal={isMobile && isMobileFiltersOpen ? "true" : undefined}
            aria-labelledby={isMobile && isMobileFiltersOpen ? "filters-heading" : undefined}    
        >
            <h2 id="filters-heading" className="refinements-list-header">
                Filters
            </h2>
            <div className="refinements-list-menus">
                <GenresMenu />
                <RatingMenu attribute="rating" max={5} />
            </div>
            <button className="refinements-list-mobile-close-btn" onClick={toggleMobileFilters}>
                Apply & Close
            </button>
        </aside>
    )
}