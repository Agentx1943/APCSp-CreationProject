function numType(num1,num2) {
    var result = "";
    
    if (num1 == num2) {
      result = "Whole, Integer, Rational,"
      console.log(result);
      document.getElementById("jsOut1").innerHTML = result;
      return;
    }
    if (num1 % 1 == 0 && num1 >= 0) {
    result = "Whole " +",";
    }
    if (num1 % 1 == 0) {
    result += "integer" +",";
    }
    if (num1 / num2 % 1 != 0 && num1 / num2 != num1) {
    result += ("rational") +",";
    }
    console.log(result);
    document.getElementById("jsOut1").innerHTML = result;
    return result;
}

function typeSetUp() {
    var x = document.getElementById("frm2");
      var inp = [];
      var i;
      for (i = 0; i < x.length ;i++) {
        inp.push(parseInt(x.elements[i].value, 10));
        console.log(inp)
      }
      numType(inp[0],inp[1])
    }