
exports.min = function min (array=[]) {
  if (array.length != 0) {
  let minValue = array.sort(function(a, b) { return a - b; });
  return minValue[0];
  } else {
    return 0;
  }
}

exports.max = function max (array=[]) {
  if (array.length != 0) {
    let maxValue = array.sort(function(a, b) { return a - b; });
    return maxValue[maxValue.length - 1]
  } else {
    return 0;
  }
}

exports.avg = function avg (array=[]) {
  if (array.length != 0) {
  return array.reduce((sum, current) => sum + current, 0) / array.length;
  } else {
    return 0;
  }
}
