function palSetUp() {
    var x = document.getElementById("frm6");
      var inp = [];
      var i;
      for (i = 0; i < x.length ;i++) {
        if (!x.elements[i].value) {
            alert(TypeError("Cannot use NULL in formula"))
            console.log(TypeError("Cannot use NULL in formula"))
            document.getElementById("palOut").innerHTML = '';
            return 1;
          }
        inp.push(parseInt(x.elements[i].value, 10));
        console.log(inp)
      }
      palindromeCheck(inp[0])
    }

function palindromeCheck(num) {
    var reversedInteger = 0
    //var remainder = 0;
    var originalInteger = 0;
    var isPal = false

    originalInteger = num

    while( num > 0 )
    {
        reversedInteger = reversedInteger * 10 + num % 10;
        num = Math.floor(num / 10);
        console.log(reversedInteger);
    }
    console.log(originalInteger);
    console.log(reversedInteger);
    if (originalInteger == reversedInteger) {
        console.log(originalInteger + " is a palindrome.");
        isPal = true;
        console.log(isPal);
        document.getElementById("palOut").innerHTML = isPal;
        return isPal;
    }
    else {
        console.log(originalInteger + " is not a palindrome.");
        console.log(isPal);
        document.getElementById("palOut").innerHTML = isPal;
        return isPal;
    }
}
