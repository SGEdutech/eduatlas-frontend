let url_string = location.href; //window.location.href
let url = new URL(url_string);
let TuitionId = '';
TuitionId = url.searchParams.get("a");
if (TuitionId == '') {
    TuitionId = '5b2b61f20079142dad3acc94'
} else if (!TuitionId) {
    TuitionId = '5b2b61f20079142dad3acc94'
}

const TuitionJSON = $.ajax({
    url: 'http://eduatlas.com/tuition/',
    data: {
        _id: TuitionId
    }
});

TuitionJSON.then((data) => {
    //todo - optimize all the calls
    console.log(data);
    showCover(data.img_coverPic);
    showBasic(data.name, data.addressLine1, data.addressLine2, data.city, data.district, data.state, data.country, data.pin);
    showFacility(data.facilities);
    showDescription(data.description);
    showCategory(data.category);
    showContactPerson(data.contactPerson, data.primaryNumber, data.secondaryNumber, data.email, data.website);
    showSocialLinks(data.fbLink, data.instaLink, data.youtubeLink);
    showDaynTime(data.dayAndTimeOfOperation);
    showCourses(data.courses);
    showResults(data.bragging);
    showFaculty(data.team);
});

function showCover(path) {
    let Input = $("#coverInput").html();
    let template = Handlebars.compile(Input);
    let context = {
        path: path
    };
    $("#coverImgContainer").append(template(context));
}

function showBasic(name, al1, al2, city, distt, state, country, pin) {
    let Input = $("#basicInput").html();
    let template = Handlebars.compile(Input);
    let context = {
        name: name,
        addressLine1: al1,
        addressLine2: al2,
        city: city,
        district: distt,
        state: state,
        country: country,
        pin: pin
    };
    $("#basicContainer").append(template(context));
}

function showFacility(fasc) {
    let facilityInput = $("#facilityInput").html();
    let template = Handlebars.compile(facilityInput);
    let context = {
        facilities: fasc,
    };
    $("#facilityContainer").append(template(context));
}

function showDescription(desc) {
    let descInput = $("#descInput").html();
    let template = Handlebars.compile(descInput);
    let context = {
        desc: desc,
    };
    $("#descriptionContainer").append(template(context));
}

function showCategory(cate) {
    let Input = $("#cateInput").html();
    let template = Handlebars.compile(Input);
    let context = {
        cate: cate,
    };
    $("#cateContainer").append(template(context));
}

function showContactPerson(contactP, pNumber, sNumber, email, site) {
    let Input = $("#contactPersonInput").html();
    let template = Handlebars.compile(Input);
    let context = {
        contactPerson: contactP,
        primaryNumber: pNumber,
        secondaryNumber: sNumber,
        email: email,
        website: site
    };
    $("#contactPersonContainer").append(template(context));
}

function showSocialLinks(f, i, y) {
    let Input = $("#socialLinkInput").html();
    let template = Handlebars.compile(Input);
    let context = {
        // twitter: t,
        facebook: f,
        instagram: i,
        youtube: y,
    };
    $("#socialLinkContainer").append(template(context));
}

function showDaynTime(array) {
    let Input = $("#dayAndTimeOfOperationInput").html();
    let template = Handlebars.compile(Input);
    let context = {
        monFrom: '',
        monTo: '',
        tueFrom: '',
        tueTo: '',
        wedFrom: '',
        wedTo: '',
        thrFrom: '',
        thrTo: '',
        friFrom: '',
        friTo: '',
        satFrom: '',
        satTo: '',
        sunFrom: '',
        sunTo: '',
    };
    array.forEach((obj) => {
        let expr = obj.day;
        switch (expr) {
            case 'Monday':
                context.monFrom = obj.fromTime;
                context.monTo = obj.toTime;
                break;
            case 'Tuesday':
                context.tueFrom = obj.fromTime;
                context.tueTo = obj.toTime;
                break;
            case 'Wednesday':
                context.wedFrom = obj.fromTime;
                context.wedTo = obj.toTime;
                break;
            case 'Thursday':
                context.thrFrom = obj.fromTime;
                context.thrTo = obj.toTime;
                break;
            case 'Friday':
                context.friFrom = obj.fromTime;
                context.friTo = obj.toTime;
                break;
            case 'Saturday':
                context.satFrom = obj.fromTime;
                context.satTo = obj.toTime;
                break;
            case 'Sunday':
                context.sunFrom = obj.fromTime;
                context.sunTo = obj.toTime;
                break;
        }
    });

    $("#opration_hours_containers").append(template(context));
}

function addAllTimes() {
    // todo - fix the memory leak
    addDayAndTimeOfOperation('monForm');
    addDayAndTimeOfOperation('tueForm');
    addDayAndTimeOfOperation('wedForm');
    addDayAndTimeOfOperation('thrForm');
    addDayAndTimeOfOperation('friForm');
    addDayAndTimeOfOperation('satForm');
    addDayAndTimeOfOperation('sunForm');
}

function deleteTime(day) {
    const promise = $.ajax({
        url: 'http://eduatlas.com/tuition/delete/dayAndTimeOfOperation/' + TuitionId,
        type: 'DELETE',
        data: {
            day: day
        }
    });

    promise.then(() => {
        alert("time deleted successfully")
    }).catch((err) => {
        console.log(err);
        alert("time deletion failed")
    })
}

function addDayAndTimeOfOperation(id) {
    // data is in Form
    // get the data and send it in post request
    const promise = $.ajax({
        url: 'http://eduatlas.com/tuition/add/dayAndTimeOfOperation/' + TuitionId,
        type: 'POST',
        data: $('#' + id).serialize()
    });

    promise.then(() => {
        // alert("time updated successfully")
    }).catch((err) => {
        console.log(err);
        alert("time addition failed")
    })
}

function saveDetails(id) {
    const Promise = $.ajax({
        url: 'http://eduatlas.com/tuition/' + TuitionId,
        type: 'PUT',
        data: $('#' + id).serialize()
    });

    Promise.then(() => {
        alert('Saved Successfully')
    }).catch((err) => {
        alert('Saving Unsuccessful');
        console.log(err)
    })
}

function showCourses(array) {
    let Input = $("#coursesInput").html();
    let template = Handlebars.compile(Input);
    Handlebars.registerHelper('list', function (items, options) {
        let output = '';
        for (let i = 0, l = items.length; i < l; i++) {
            output += options.fn(items[i]);
        }
        return output;
    });

    let context = {
        key: []
    };

    let counter = 1;
    array.forEach((obj) => {
        let newObj = {
            id: counter,
            title: obj.title,
            duration: obj.duration,
            fee: obj.fee,
            ageGroup: obj.ageGroup,
        };
        context.key.push(newObj);
        counter++;
    });

    $("#coursesContainer").append(template(context));
}

// id will be set by handleBars
// first argument is title of course you want to delete (for server side), second is id of the card you want to delete (for client side)
function deleteCourse(title, id) {

    const promise = $.ajax({
        url: 'http://eduatlas.com/tuition/delete/courses/' + TuitionId,
        type: 'DELETE',
        data: {
            title: title
        }
    });

    promise.then(() => {
        alert("course deleted successfully")
    }).catch((err) => {
        console.log(err);
        alert("course deletion failed")
    });

    $('#' + id).remove();
}

function addCourse() {
    // data is in Form
    // form id is newCourse
    // get the data and send it in post request
    const AddedCourse = $.ajax({
        url: 'http://eduatlas.com/tuition/add/courses/' + TuitionId,
        type: 'POST',
        data: $('#newCourse').serialize()
    });

    AddedCourse.then(() => {
        alert("course added successfully")
    }).catch((err) => {
        console.log(err);
        alert("course addition failed")
    })
}

function showResults(array) {
    let Input = $("#resultInput").html();
    let template = Handlebars.compile(Input);
    Handlebars.registerHelper('list', function (items, options) {
        let output = '';
        for (let i = 0, l = items.length; i < l; i++) {
            output += options.fn(items[i]);
        }
        return output;
    });

    let context = {
        key: []
    };

    let counter = 1;
    array.forEach((obj) => {
        let newObj = {
            id: counter,
            img_path: obj.img_path,
            title: obj.title,
            description: obj.description,
        };
        context.key.push(newObj);
        counter++;
    });

    $("#resultsContainer").append(template(context));

}

function addResult() {
    // data is in Form
    // form id is newCourse
    // get the data and send it in post request
    const promise = $.ajax({
        url: 'http://eduatlas.com/tuition/add/bragging/' + TuitionId,
        type: 'POST',
        data: $('#newResult').serialize()
    });

    promise.then(() => {
        alert("result added successfully")
    }).catch((err) => {
        console.log(err);
        alert("result addition failed")
    })
}

function deleteResult(title, id) {

    const promise = $.ajax({
        url: 'http://eduatlas.com/tuition/delete/bragging/' + TuitionId,
        type: 'DELETE',
        data: {
            title: title
        }
    });

    promise.then((data) => {
        alert("result deleted successfully")
    }).catch((err) => {
        console.log(err);
        alert("result deletion failed")
    });

    $('#' + id).remove();
}

function showFaculty(array) {
    let Input = $("#facultyInput").html();
    let template = Handlebars.compile(Input);
    Handlebars.registerHelper('list', function (items, options) {
        let output = '';
        for (let i = 0, l = items.length; i < l; i++) {
            output += options.fn(items[i]);
        }
        return output;
    });

    let context = {
        key: []
    };

    let counter = 1;
    array.forEach((obj) => {
        let newObj = {
            id: counter,
            img_path: obj.img_path,
            name: obj.name,
            description: obj.description,
            qualification: obj.qualification
        };
        context.key.push(newObj);
        counter++;
    });

    $("#facultyContainer").append(template(context));

}

function addFaculty() {
    // data is in Form
    // form id is newCourse
    // get the data and send it in post request
    const promise = $.ajax({
        url: 'http://eduatlas.com/tuition/add/team/' + TuitionId,
        type: 'POST',
        data: $('#newFaculty').serialize()
    });

    promise.then(() => {
        alert("Faculty added successfully")
    }).catch((err) => {
        console.log(err);
        alert("Faculty addition failed")
    })
}

function deleteFaculty(name, id) {

    const promise = $.ajax({
        url: 'http://eduatlas.com/tuition/delete/team/' + TuitionId,
        type: 'DELETE',
        data: {
            name: name
        }
    });

    promise.then((data) => {
        alert("faculty deleted successfully")
    }).catch((err) => {
        console.log(err);
        alert("faculty deletion failed")
    });

    $('#' + id).remove();
}