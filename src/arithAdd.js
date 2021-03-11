 function arithSetUp() {
    var x = document.getElementById("frm1");
      var inp = [];
      var i;
      for (i = 0; i < x.length ;i++) {
        if (!x.elements[i].value) {
          alert(TypeError("Cannot use NULL in formula"))
          console.log(TypeError("Cannot use NULL in formula"))
          document.getElementById("jsOut").innerHTML = '';
          return 1;
        }
        inp.push(parseInt(x.elements[i].value, 10));
        console.log(inp)
      }
      arithSeq(inp[0],inp[1],inp[2])
    }
    
    function arithSeq(first, last, diff) {
        var fin = first + (last-1)*diff;
        var sum = 0;
        var n = last/2;
        sum = n*(first+fin);
        console.log(sum);
        if (sum.toString().length > 10) {
          document.getElementById("jsOut").innerHTML = '';
          alert("The answer is: " + sum)
          return sum;
        }
        document.getElementById("jsOut").innerHTML = sum;
        return sum;
    }

