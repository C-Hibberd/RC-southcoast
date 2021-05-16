var x = localStorage.getItem("scale");
var i = x;

function getRuleset() {
  var e = localStorage.getItem("ruleset");
  console.log(e);
  if (e == 1) {
    s = 15;
      d = 10;
      f = 10;
      g = 8;
      h = 7;
      j = 5;
      k = 3;
      l = 1;
      document.getElementById("num1").innerHTML = s;
      document.getElementById("num2").innerHTML = d;
      document.getElementById("num3").innerHTML = f;
      document.getElementById("num4").innerHTML = g;
      document.getElementById("num5").innerHTML = h;
      document.getElementById("num6").innerHTML = j;
      document.getElementById("num7").innerHTML = k;
      document.getElementById("num8").innerHTML = l;
   }
   else if (e == 2) {
     s = 12;
     d = 6;
     f = 6;
     g = 5;
     h = 5;
     j = 3;
     k = 3;
     l = 1;
     document.getElementById("num1").innerHTML = s;
      document.getElementById("num2").innerHTML = d;
      document.getElementById("num3").innerHTML = f;
      document.getElementById("num4").innerHTML = g;
      document.getElementById("num5").innerHTML = h;
      document.getElementById("num6").innerHTML = j;
      document.getElementById("num7").innerHTML = k;
      document.getElementById("num8").innerHTML = l;
   }
   else if (e == 3) {
     s = 12;
     d = 12;
     f = 10;
     g = 8;
     h = 5;
     j = 3;
     k = 2;
     l = 1;
     document.getElementById("num1").innerHTML = s;
      document.getElementById("num2").innerHTML = d;
      document.getElementById("num3").innerHTML = f;
      document.getElementById("num4").innerHTML = g;
      document.getElementById("num5").innerHTML = h;
      document.getElementById("num6").innerHTML = j;
      document.getElementById("num7").innerHTML = k;
      document.getElementById("num8").innerHTML = l;
   }
}

var s = 0;
var d = 0;
var f = 0;
var g = 0;
var h = 0;
var j = 0;
var k = 0;
var l = 0;

function addPoints1() {
  i += s;
  document.getElementById("inc").value = i;
}


function removePoints1() {
  i -= s;
  document.getElementById("inc").value = i;
}


function addPoints2() {
  i += d;
  document.getElementById("inc").value = i;
}


function removePoints2() {
  i -= d;
  document.getElementById("inc").value = i;
}

function addPoints3() {
  i += f;
  document.getElementById("inc").value = i;
}


function removePoints3() {
  i -= f;
  document.getElementById("inc").value = i;
}

function addPoints4() {
  i += g;
  document.getElementById("inc").value = i;
}


function removePoints4() {
  i -= g;
  document.getElementById("inc").value = i;
}

function addPoints5() {
  i += h;
  document.getElementById("inc").value = i;
}


function removePoints5() {
  i -= h;
  document.getElementById("inc").value = i;
}

function addPoints6() {
  i += j;
  document.getElementById("inc").value = i;
}


function removePoints6() {
  i -= j;
  document.getElementById("inc").value = i;
}

function addPoints7() {
  i += k;
  document.getElementById("inc").value = i;
}


function removePoints7() {
  i -= k;
  document.getElementById("inc").value = i;
}

function addPoints8() {
  i += l;
  document.getElementById("inc").value = i;
}


function removePoints8() {
  i -= l;
  document.getElementById("inc").value = i;
}


function classValueAdd() {
  i += +document.getElementById("classinput").value;
  document.getElementById("yuh").value = i;
}


function classValueRemove() {
  i -= +document.getElementById("classinput").value;
  document.getElementById("yuh").value = i;
}
