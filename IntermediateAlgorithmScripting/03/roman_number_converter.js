function convert(num) {
  var arr = convertRomanArray(num);
  var result = getRoman(arr);
  console.log(result);
  return result;
}

function convertRomanArray(num){
  var romanNumbers = [ 1000, 500, 100, 50, 10, 5, 1];
  var rel = [];
  var index = 0;
  while( index < romanNumbers.length ) {
    rel.push(num / romanNumbers[index] | 0);
    num = num % romanNumbers[index];
    index++;
  }
  return rel;
}

function getRoman(arr) {
  var romanChars = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  var rel = "";
  arr.forEach(function(num, index) {
    if (arr[index + 1] % 5 === 4) {
      rel += romanChars[index + 1];
      rel += num > 0 ? romanChars[index -1] : romanChars[index];
      arr[index + 1] = 0;
    } else {
      rel += mutilConcat(num, romanChars[index]);
    }
  });
  return rel;
}

function mutilConcat(num, char){
  var rel = "";
  for(var i = 0; i < num; i++) {
    rel += char;
  }
  return rel;
}

var num = process.argv[2] || 36;
convert(num);

