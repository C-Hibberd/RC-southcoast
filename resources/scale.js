var x = 0;


function classValueAdd() {
    x += +document.getElementById("classinput").value;
    document.getElementById("yuh").value = x;
    var z = document.getElementById("yuh");
    localStorage.setItem("scale", z);
  }
  
  
  function classValueRemove() {
    x -= +document.getElementById("classinput").value;
    document.getElementById("yuh").value = x;
    var z = document.getElementById("yuh");
    localStorage.setItem("scale", z);
  }
