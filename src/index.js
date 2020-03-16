exports.min = function min(array) {
    if (
        typeof array != "undefined" &&
        array != null &&
        array.length != null &&
        array.length > 0
    ) {
        return Math.min.apply(null, array);
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (
        typeof array != "undefined" &&
        array != null &&
        array.length != null &&
        array.length > 0
    ) {
        return Math.max.apply(null, array);
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (
        typeof array != "undefined" &&
        array != null &&
        array.length != null &&
        array.length > 0
    ) {
        var result = array.reduce(function(sum, current) {
            return sum + current;
        }, 0);
        return result / array.length;
    } else {
        return 0;
    }
};
