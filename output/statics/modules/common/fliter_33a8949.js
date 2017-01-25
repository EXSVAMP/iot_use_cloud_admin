define('common/fliter', function(require, exports, module) {

var app = angular.module('RDash');

app.filter("time_format", function () {
    return function (input) {

        if (input != undefined) {
            input = input.replace("T", " ");
        }
        return input;
    }
});
app.filter("pubsub", function () {
    return function (input) {

        if (input == 'pubsub') {
            input = 'sp';
        } else if (input == 'publish') {
            input = 'p';
        } else if (input == 'subscribe') {
            input = 's';
        } else {
            input = '';
        }
        return input;
    }
});

app.filter("booleanToString", function () {
    return function (input) {

        if (input) {
            input = '是';
        } else{
            input = '否';
        }
        return input;
    }
});

app.filter("img", function () {
    return function (img) {
        return 'http://'+img;
    }
});

});
