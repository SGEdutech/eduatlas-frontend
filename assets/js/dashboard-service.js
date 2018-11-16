PubSub.subscribe('user', (msg, userInfo) => {
	navigationBar.render(userInfo);
	redirectOnLogout.init(userInfo);
});

PubSub.subscribeOnce('query.load', (msg, queryObject) => {
	redirectTabs.init(queryObject);
});

user.getInfo().then(userInfo => {
	navigationBar.init(userInfo, {
		colorOnScroll: false
	});
	userImgAndName.init(userInfo);
	dashboardBookmarks.init(userInfo);
	// dashboardReviews.init(userInfo);
	dashboardEditProfile.init(userInfo);
});

async function initModules() {
	try {
		const promiseArr = [];
		promiseArr.push(userApiCalls.getAllSMBatches());
		promiseArr.push(userApiCalls.getAllSMForums());
		promiseArr.push(userApiCalls.getAllSMSchedules());

		const [batches, forums, schedules] =
		await Promise.all(promiseArr);

		pillsAndPanes.init(batches);
		forum.init(forums);
		attendance.init(schedules);
	} catch (err) {console.error(err);}
}

initModules();

userNotification.init();
queryString.loadQueryString();
