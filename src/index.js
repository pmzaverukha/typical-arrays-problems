exports.min = function min(array) {
    // return Math.min.apply(0, array);
    if (Array.isArray(array) && array.length)
        return Math.min.apply(0, array);
    else
        return 0;
}

exports.max = function max(array) {
    if (Array.isArray(array) && array.length)
        return Math.max.apply(null, array);
    else
        return 0;

}

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length)
        return array.reduce((a, b) => (a + b)) / array.length;
    else
        return 0;

}
