import HitsList from "../hits/HitsList";
import RefinementsList from "../refinements/RefinementsList";
import "./SearchContents.css";

export default function SearchContents() {

    return (
        <div className="layout-container">
            <RefinementsList />
            <HitsList />
        </div>
    )
}