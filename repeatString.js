const input= 'abc'
const toBeRepeat= 3
const string = repeat(input, toBeRepeat)
function repeat(string, n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += string;
  }
  return result;
}
console.log(string);