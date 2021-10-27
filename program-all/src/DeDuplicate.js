function solution01(arr) {
  return [...new Set(arr)];
}

function solution02(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

module.exports = {
  solution01,
  solution02
}