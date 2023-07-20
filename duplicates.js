const input=[1, 20, 3, 1, 3, 3];
const result=duplicates(input);
console.log(result);
function duplicates(input) {
    const uniqueSet=new Set(input);
    return Array.from(uniqueSet);
  }