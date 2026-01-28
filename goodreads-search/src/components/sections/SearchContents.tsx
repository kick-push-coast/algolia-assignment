import { useMobileFilters } from "../../context/MobileFiltersContext";
import HitsList from "../hits/HitsList";
import GenresMenu from "../refinements/GenresMenu";
import { RatingMenu } from "../refinements/RatingsMenu";
import "./SearchContents.css";

export default function SearchContents() {
    const { isMobileFiltersOpen, toggleMobileFilters } = useMobileFilters();

    return (
        <div className="layout-container">
            <div className={`layout-refinements ${isMobileFiltersOpen ? 'layout-refinements-mobile-open' : ''}`}>
                <h2 className="layout-refinements-header">
                    Filters
                </h2>
                <div className="layout-menus">
                    <GenresMenu />
                    <RatingMenu attribute="rating" max={5} />
                </div>
                <button className="layout-refinements-mobile-close-btn" onClick={toggleMobileFilters}>
                    Apply & Close
                </button>
            </div>
            <div className="layout-hits">
                <HitsList />
            </div>
        </div>
    )
}