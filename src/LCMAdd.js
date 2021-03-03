function gcdSetUp() {
    var x = document.getElementById("frm5");
      var inp = [];
      var i;
      for (i = 0; i < x.length ;i++) {
        inp.push(parseInt(x.elements[i].value, 10));
        console.log(inp)
      }
      gcd(inp[0],inp[1])
    }

    function lcmSetUp() {
        var x = document.getElementById("frm4");
          var inp = [];
          var i;
          for (i = 0; i < x.length ;i++) {
            inp.push(parseInt(x.elements[i].value, 10));
            console.log(inp)
          }
          lcm(inp[0],inp[1])
        }

function lcm(num1, num2) {
    var ans = Math.abs(num1*num2);
    console.log(num1 + " " +num2);
    ans = ans / gcd(num1,num2)
    console.log(ans);
  document.getElementById("lcmOut").innerHTML = ans;
  return ans
}

function gcd(num1, num2) {
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  while(num2) {
    var x = num2;
    num2 = num1 % num2;
    num1 = x;
  }
  console.log(num1);
  document.getElementById("gcdOut").innerHTML = num1;
  return num1;
}
