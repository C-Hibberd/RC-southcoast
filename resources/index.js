
var i = 0;

function add12Points() {
  i += 12;
  document.getElementById("inc").value = i;
}


function remove12Points() {
  i -= 12;
  document.getElementById("inc").value = i;
}


function add6Points() {
  i += 6;
  document.getElementById("inc").value = i;
}


function remove6Points() {
  i -= 6;
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


