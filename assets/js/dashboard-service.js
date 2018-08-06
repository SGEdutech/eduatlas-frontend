PubSub.subscribe('user', (msg, userInfo) => {
    navigationBar.render(userInfo);
});

user.getInfo().then(userInfo => {
    navigationBar.init(userInfo);
    userImgAndName.init(userInfo);
    userClaimedTuition.init(userInfo);
    dashboardBookmarks.init(userInfo);
    dashboardReviews.init(userInfo);
    dashboardEditProfile.init(userInfo);
    dashboardAddTuition.init(userInfo);
});

dashboardHideSubMenu.init();