import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import lunr from "lunr";
import { componentSearchIndex } from "../searchIndex";
import "@visual-framework/vf-search-client-side/vf-search-client-side.css";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("search_query") || "").trim();

  useEffect(() => {
    // vf-search-client-side expects global `lunr` and `searchIndex` variables.
    window.lunr = lunr;
    window.searchIndex = {
      pages: componentSearchIndex.map((item, index) => ({
        id: String(index),
        title: item.name,
        text: `${item.description}`,
        url: item.path,
      })),
    };

    let isMounted = true;

    import("@visual-framework/vf-search-client-side/vf-search-client-side.js")
      .then(({ vfSearchClientSide }) => {
        if (isMounted) {
          vfSearchClientSide();
        }
      })
      .catch(() => {
        const resultsContainer = document.querySelector(
          "[data-vf-search-client-side-results]",
        );
        if (resultsContainer) {
          resultsContainer.textContent =
            "Search is temporarily unavailable. Please try again.";
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <section class="vf-intro" id="an-id-for-anchor">
        <div></div>

        <div class="vf-stack">
          <h1 class="vf-intro__heading ">Search</h1>
          <p class="vf-lede">Search documentation and guidance.</p>

          <p class="vf-intro__text"></p>
        </div>
      </section>
      <div className="embl-grid embl-grid--has-centered-content">
        <div></div>
        <div className="vf-stack vf-stack--400">
          <form
            action=""
            method="GET"
            className="vf-form vf-form--search vf-form--search--responsive | vf-sidebar vf-sidebar--end"
          >
            <div className="vf-sidebar__inner">
              <div className="vf-form__item | vf-search__item">
                <label
                  className="vf-form__label vf-u-sr-only | vf-search__label"
                  htmlFor="search_query"
                >
                  Search
                </label>
                <input
                  type="search"
                  id="search_query"
                  placeholder="Search components and documentation"
                  name="search_query"
                  defaultValue={query}
                  className="vf-search__input | vf-form__input"
                  data-vf-search-client-side-input
                  data-vf-search-client-side-destination-prefix=""
                />
              </div>
              <button
                type="submit"
                className="vf-search__button | vf-button vf-button--primary"
              >
                <span className="vf-button__text">Search</span>
                <svg
                  className="vf-icon vf-icon--search-btn | vf-button__icon"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 140 140"
                  width="140"
                  height="140"
                >
                  <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
                    <path
                      d="M23.414,20.591l-4.645-4.645a10.256,10.256,0,1,0-2.828,2.829l4.645,4.644a2.025,2.025,0,0,0,2.828,0A2,2,0,0,0,23.414,20.591ZM10.25,3.005A7.25,7.25,0,1,1,3,10.255,7.258,7.258,0,0,1,10.25,3.005Z"
                      fill="#FFFFFF"
                      stroke="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </form>

          <div className="vf-search-client-side vf-grid | vf-content">
            <div
              className="results-container"
              data-vf-search-client-side-results
            >
              Loading...
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default SearchResults;
