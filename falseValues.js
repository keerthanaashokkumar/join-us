const input=[42, "everything", "", 2, false, "everything"];
const result=falseValues(input);
console.log(result);
function falseValues(arr) {
    return arr.filter(Boolean);
  }