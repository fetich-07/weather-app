import React from "react";

function SearchBar() {
    return (
        <div>
            <form>
                <input type="search" placeholder="Найти город" />
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Icon">
                            <path id="Vector" d="M14.4808 14.4808L21 21M9.5 16C13.0899 16 16 13.0899 16 9.5C16 5.91015 13.0899 3 9.5 3C5.91015 3 3 5.91015 3 9.5C3 13.0899 5.91015 16 9.5 16Z" stroke="#1B1D1F" stroke-width="2" stroke-linecap="round" />
                        </g>
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default SearchBar;