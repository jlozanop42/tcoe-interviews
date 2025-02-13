const SELECTORS = {
    SEARCH_RESULTS: ".search__results-list div[data-uri]",
    FILTER_DROPDOWN: "ul[class*='search__dropdown']",
    NEWEST_BUTTON: "#newest",
    RELEVANCE_BUTTON: "#relevance",
    SEARCH_INPUT: "input.search__input",
}

class SearchResultsPage {
    get searchResultsList() {
        return $$(SELECTORS.SEARCH_RESULTS)
    }

    get firstSearchResult() {
        return $(SELECTORS.SEARCH_RESULTS)
    }

    get filterDropdown() {
        return $(SELECTORS.FILTER_DROPDOWN)
    }

    get newestButton() {
        return $(SELECTORS.NEWEST_BUTTON)
    }

    get relevanceButton() {
        return $(SELECTORS.RELEVANCE_BUTTON)
    }

    get searchInput() {
        return $(SELECTORS.SEARCH_INPUT)
    }

    async waitForListToLoad() {
        await this.firstSearchResult.waitForDisplayed()
    }

    async isFirstResultDisplayed() {
        await this.waitForListToLoad()
        return await this.firstSearchResult.isDisplayed()
    }

    async areElementsDisplayed() {
        return await this.filterDropdown.isDisplayed() && await this.newestButton.isDisplayed() && await this.relevanceButton.isDisplayed()
                && await this.searchInput.isDisplayed()
    }
}

export default new SearchResultsPage()
