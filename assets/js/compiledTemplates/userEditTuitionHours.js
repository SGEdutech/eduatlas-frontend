this["template"]["userEditTuitionHours"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<form class=\"row\" id=\"monForm\">\n    <div class=\"col-4\">\n        Monday:\n        <input hidden name=\"day\" value=\"Monday\">\n    </div>\n    <div class=\"col-3\">\n        <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.monFrom || (depth0 != null ? depth0.monFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monFrom","hash":{},"data":data}) : helper)))
    + "\" name=\"fromTime\"\n               type=\"text\">\n    </div>\n    <div class=\"col-3\">\n        <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.monTo || (depth0 != null ? depth0.monTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monTo","hash":{},"data":data}) : helper)))
    + "\" name=\"toTime\"\n               type=\"text\">\n    </div>\n    <div class=\"col-2\">\n        <button class=\"btn btn-danger btn-fab btn-fab-mini btn-round deleteBtn\"\n                onclick=\"deleteTime('Monday')\">\n            <i class=\"material-icons\">\n                delete\n            </i>\n        </button>\n    </div>\n</form>\n\n\n<form class=\"row\" id=\"tueForm\">\n    <div class=\"col-4\">\n        Tuesday:\n        <input hidden name=\"day\" value=\"Tuesday\">\n    </div>\n    <div class=\"col-3\">\n        <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.tueFrom || (depth0 != null ? depth0.tueFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tueFrom","hash":{},"data":data}) : helper)))
    + "\" name=\"fromTime\">\n    </div>\n    <div class=\"col-3\">\n        <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.tueTo || (depth0 != null ? depth0.tueTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tueTo","hash":{},"data":data}) : helper)))
    + "\" name=\"toTime\">\n    </div>\n    <div class=\"col-2\">\n        <button class=\"btn btn-danger btn-fab btn-fab-mini btn-round deleteBtn\"\n                onclick=\"deleteTime('Tuesday')\">\n            <i class=\"material-icons\">\n                delete\n            </i>\n        </button>\n    </div>\n</form>\n\n\n<form class=\"row\" id=\"wedForm\">\n    <div class=\"col-4\">\n        Wednesday:\n        <input hidden name=\"day\" value=\"Wednesday\">\n    </div>\n    <div class=\"col-3\">\n        <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.wedFrom || (depth0 != null ? depth0.wedFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wedFrom","hash":{},"data":data}) : helper)))
    + "\" name=\"fromTime\">\n    </div>\n    <div class=\"col-3\">\n        <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.wedTo || (depth0 != null ? depth0.wedTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wedTo","hash":{},"data":data}) : helper)))
    + "\" name=\"toTime\">\n    </div>\n    <div class=\"col-2\">\n        <button class=\"btn btn-danger btn-fab btn-fab-mini btn-round deleteBtn\"\n                onclick=\"deleteTime('Wednesday')\">\n            <i class=\"material-icons\">\n                delete\n            </i>\n        </button>\n    </div>\n</form>\n\n\n<form class=\"row\" id=\"thrForm\">\n    <div class=\"col-4\">\n        Thursday:\n        <input hidden name=\"day\" value=\"Thursday\">\n    </div>\n    <div class=\"col-3\">\n        <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.thrFrom || (depth0 != null ? depth0.thrFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thrFrom","hash":{},"data":data}) : helper)))
    + "\" name=\"fromTime\">\n    </div>\n    <div class=\"col-3\">\n        <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.thrTo || (depth0 != null ? depth0.thrTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thrTo","hash":{},"data":data}) : helper)))
    + "\" name=\"toTime\">\n    </div>\n    <div class=\"col-2\">\n        <button class=\"btn btn-danger btn-fab btn-fab-mini btn-round deleteBtn\"\n                onclick=\"deleteTime('Thursday')\">\n            <i class=\"material-icons\">\n                delete\n            </i>\n        </button>\n    </div>\n</form>\n\n\n<form class=\"row\" id=\"friForm\">\n    <div class=\"col-4\">\n        Friday:\n        <input hidden name=\"day\" value=\"Friday\">\n    </div>\n    <div class=\"col-3\">\n        <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.friFrom || (depth0 != null ? depth0.friFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"friFrom","hash":{},"data":data}) : helper)))
    + "\" name=\"fromTime\">\n    </div>\n    <div class=\"col-3\">\n        <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.friTo || (depth0 != null ? depth0.friTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"friTo","hash":{},"data":data}) : helper)))
    + "\" name=\"toTime\">\n    </div>\n    <div class=\"col-2\">\n        <button class=\"btn btn-danger btn-fab btn-fab-mini btn-round deleteBtn\"\n                onclick=\"deleteTime('Friday')\">\n            <i class=\"material-icons\">\n                delete\n            </i>\n        </button>\n    </div>\n</form>\n\n\n<form class=\"row\" id=\"satForm\">\n    <div class=\"col-4\">\n        Saturday:\n        <input hidden name=\"day\" value=\"Saturday\">\n    </div>\n    <div class=\"col-3\">\n        <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.satFrom || (depth0 != null ? depth0.satFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"satFrom","hash":{},"data":data}) : helper)))
    + "\" name=\"fromTime\">\n    </div>\n    <div class=\"col-3\">\n        <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.satTo || (depth0 != null ? depth0.satTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"satTo","hash":{},"data":data}) : helper)))
    + "\" name=\"toTime\">\n    </div>\n    <div class=\"col-2\">\n        <button class=\"btn btn-danger btn-fab btn-fab-mini btn-round deleteBtn\"\n                onclick=\"deleteTime('Saturday')\">\n            <i class=\"material-icons\">\n                delete\n            </i>\n        </button>\n    </div>\n</form>\n\n\n<form class=\"row\" id=\"sunForm\">\n    <div class=\"col-4\">\n        Sunday:\n        <input hidden name=\"day\" value=\"Sunday\">\n    </div>\n    <div class=\"col-3\">\n        <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.sunFrom || (depth0 != null ? depth0.sunFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sunFrom","hash":{},"data":data}) : helper)))
    + "\" name=\"fromTime\">\n    </div>\n    <div class=\"col-3\">\n        <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.sunTo || (depth0 != null ? depth0.sunTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sunTo","hash":{},"data":data}) : helper)))
    + "\" name=\"toTime\">\n    </div>\n    <div class=\"col-2\">\n        <button class=\"btn btn-danger btn-fab btn-fab-mini btn-round deleteBtn\"\n                onclick=\"deleteTime('Sunday')\">\n            <i class=\"material-icons\">\n                delete\n            </i>\n        </button>\n    </div>\n</form>";
},"useData":true});