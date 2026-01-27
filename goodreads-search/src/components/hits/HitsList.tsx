import { BookHit } from "./BookHit";
import { Hits } from "react-instantsearch";
import "./HitsList.css";

export default function HitsList() {
    return (
        <Hits
            hitComponent={BookHit} 
            classNames={{
                list: "hits-list"
            }}
        />
    )
}