module.exports = function reverse (n) {
  return  parseInt(n.toString().split('').reverse().join(''))  //parseInt of '345'  '-'will be ignored as text
}
