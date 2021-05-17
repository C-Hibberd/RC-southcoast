
function rulesetValue() {
    var e = document.getElementById("myselect");
    var strUser = e.value;
    localStorage.setItem("ruleset", strUser);
    console.log(strUser)
}
