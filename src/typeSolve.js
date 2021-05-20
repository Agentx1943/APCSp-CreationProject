function numType(num1,num2) {
    var result = "";
    
    if (num1 == num2) {
      result = "Whole, Integer, Rational"
      console.log(result);
      document.getElementById("jsOut1").innerHTML = result;
      return;
    }
    if (num1/num2 % 1 == 0 && num1/num2 >= 0) {
    result = "Whole";
    }
    if (num1/num2 % 1 == 0) {
      if(result.length > 0) {
        result += ", ";
      }
      result += "Integer";
    }
    if (num1 / num2 % 1 != 0 && num1 / num2 != num1) {
      if(result.length > 0) {
        result += ", ";
      }
      result += ("Rational");
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
        if (!x.elements[i].value) {
          alert(TypeError("Cannot use NULL in formula"))
          console.log(TypeError("Cannot use NULL in formula"))
          document.getElementById("jsOut1").innerHTML = '';
          return 1;
        }
        inp.push(parseInt(x.elements[i].value, 10));
        console.log(inp)
      }
      numType(inp[0],inp[1])
    }