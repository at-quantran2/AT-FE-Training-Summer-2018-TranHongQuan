function sum2Number(a = 0, b = 0) {
  return a === b ? (a + b) * 3 : a + b;
}
function abstract(a = 0) {
  return a > 19 ? (a  - 19) * 3 :  19 - a;
}

function maskedNumber3(a = '') {
  var b = [];
  var numberSum = 0 ;
  for (var i = 0 ; i < a.length - 1; i ++) {
    if (a[i] !== '*') {
      numberSum += parseInt(a[i]);
    }
  }
  for (var i = 0 ; i <= 9; i++) {
    var c = a.replace('*', i);
    if ((numberSum + i) % 3 === 0) {
      b.push(c);
    }
  }
  return b;
}

function maskedNumber6(a = '') {
  var c = maskedNumber3(a);
  var b = [];
  for (var i = 0 ; i < c.length - 1; i ++) {
    var st = c[i]; 
    if (st[st.length - 1] % 2 === 0) {
      b.push(st);
    }
  }
  return b;
}
