(function (exports) {
    "use strict;"
    
    function ParamGetJson(url) {
        this.url = url;
        this.dataType = "json";
        this.type = "GET";
    }

    exports.ParamGetJson = ParamGetJson;

})(this);