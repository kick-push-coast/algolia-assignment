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
                <button className="layout-refinements-mobile-close-btn" onClick={toggleMobileFilters}>
                    X
                </button>
                <GenresMenu />
                <RatingMenu attribute="rating" max={5} />
            </div>
            <div className="layout-hits">
                <HitsList />
            </div>
        </div>
    )
}