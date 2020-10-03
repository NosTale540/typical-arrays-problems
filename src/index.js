exports.min = function min(array) {
    if (array == undefined || array.length == 0) {
        return(0);
    }

    let result = array[0];

    for (i = 1; i < array.length; i++) {
        if (array[i] < result) {
            result = array[i];
        }
    }
    return result;
}

exports.max = function max(array) {
    let result = 0;
    if (array == undefined || array.length == 0) {
        return(0);
    }
    for (i = 0; i < array.length; i++) {
        if (array[i] > result) {
            result = array[i];
        }
    }
    return result;
}

exports.avg = function avg(array) {
    if (array == undefined || array.length == 0) {
        return(0);
    }

    let resultAvg = 0;

    for (i = 0; i < array.length; i++) {
        resultAvg += array[i];
    }
    resultAvg = resultAvg / array.length;
    return resultAvg;
}

