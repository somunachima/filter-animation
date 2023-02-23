import { useEffect } from "react";

function Filter() {
    return(
        <div className="filter-container">
            <button>All</button>
            <button>Anime</button>
            <button>Action</button>
            <button>Comedy</button>
            <button>Sci-Fi</button>
        </div>
    )
}

export default Filter;
