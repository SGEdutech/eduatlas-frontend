PubSub.subscribe('user', (msg, userInfo) => {
    navigationBar.render(userInfo);
    getInfo.updateUser(userInfo);
    claimModal.updateUserInfo(userInfo);
    reviews.updateUserInfo(userInfo);
    bookmark.updateUserInfo(userInfo);
});

PubSub.subscribeOnce('query.load', (msg, queryObject) => {
    getInfo.render(queryObject, 'school');
    reportModal.updateTuitionInfo(queryObject);
    reviews.updateInstituteInfo(queryObject);
    claimModal.updateQueryObj(queryObject);
});

PubSub.subscribeOnce('address.ready', (msg, address) => {
    map.render(address, 'map')
});

PubSub.subscribeOnce('loginModal.load', (msg, nothing) => {
    reviews.init('school');
});

user.getInfo().then(userInfo => {
    navigationBar.init(userInfo);
    claimModal.updateUserInfo(userInfo);
    getInfo.updateUser(userInfo);
    reviews.updateUserInfo(userInfo);
    bookmark.updateUserInfo(userInfo);
});

loginModal.init();
claimModal.init('school');
reportModal.init();

queryString.loadQueryString();
