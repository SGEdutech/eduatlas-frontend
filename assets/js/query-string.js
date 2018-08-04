const queryString = (() => {

    function returnQueryString() {
        let url_string = location.href; //window.location.href
        let url = new URL(url_string);
        let objToReturn = {};
        objToReturn._id = url.searchParams.get("_id");
        objToReturn.page = url.searchParams.get("page");
        objToReturn.page = parseInt(objToReturn.page);
        objToReturn.items = url.searchParams.get("items");
        objToReturn.items = parseInt(objToReturn.items);
        objToReturn.c = url.searchParams.get("c");
        objToReturn.c = (objToReturn.c === 'true');
        objToReturn.name = url.searchParams.get("name");
        objToReturn.state = url.searchParams.get("state");
        objToReturn.city = url.searchParams.get("city");
        objToReturn.sortBy = url.searchParams.get("sortBy");
        PubSub.publish('query.load', objToReturn);

        // console.log(objToReturn)
    }

    return {returnQueryString};
})();