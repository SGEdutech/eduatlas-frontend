const searchSuggestion = (() => {
    const $suggestionContainer = $('#autocomplete_container');
    const $searchInput = $('#search_input');
    let query;

    function bindEvents() {
        $searchInput.keyup(checkKey);
        $searchInput.blur(removeSuggestion);
    }

    function removeSuggestion() {
        setTimeout(function () {
            $suggestionContainer.empty();
        }, 1);
    }

    function checkKey(event) {
        if (event.keyCode === 13) {
            redirectToSearchPage();
        } else {
            getSuggestion().then(render);
        }
    }

    function redirectToSearchPage() {
        query = $searchInput.val();
        window.location.assign('TuitionDiscovery.html?items=18&page=1&c=true&name=' + query);
    }

    function getSuggestion() {
        query = $searchInput.val();
        const url = '/tuition/search';
        const data = {
            name: JSON.stringify({
                search: query,
                fullTextSearch: false,
            }),
            limit: 5,
            demands: 'name'
        };
        return $.ajax({url, data}); //Returns a promise
    }

    function render(suggestionArray) {
        const context = {suggestionArray};
        const suggestionHtml = template.searchResult(context);
        $suggestionContainer.html(suggestionHtml);
    }

    bindEvents();
})();