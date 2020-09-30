module.exports = function reverse (n) {
  let str = n.toString();
  str = str.split('').reverse().join('');
  if(str.includes('-')){str = str.replace(/-/,'')}
  return Number(str);
}
