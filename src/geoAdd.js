function geoSetUp() {
    var x = document.getElementById("frm3");
      var inp = [];
      var i;
      for (i = 0; i < x.length ;i++) {
        if (!x.elements[i].value) {
          alert(TypeError("Cannot use NULL in formula"))
          console.log(TypeError("Cannot use NULL in formula"))
          document.getElementById("jsOut3").innerHTML = '';
          return 1;
        }
        inp.push(parseInt(x.elements[i].value, 10));
        console.log(inp)
      }
      geoSeq(inp[0],inp[1],inp[2])
    }

    function geoSeq(first, last, ratio) {
        //var fin = first * Math.pow(ratio, last-1)
        var sum = 0;
        var numerator = first * (1 - Math.pow(ratio,last))
        var denominator = 1 - ratio
        sum = numerator/denominator
        console.log(sum);
        if (sum.toString().length > 10) {
          document.getElementById("jsOut3").innerHTML = '';
          alert("The answer is: " + sum)
          return sum;
        }
        document.getElementById("jsOut3").innerHTML = sum;
        return sum;
    }