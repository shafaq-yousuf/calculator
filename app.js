var display = document.getElementById("inp");

function getval(a){
    console.log(a);
display.value += a;
}
function clearAll(){
    display.value = "";
}
function totalvalue(){

    var a = eval(display.value)
    display.value = a;
}
function boxchange(a){
    a.className = nextbox;
    }
var a = document.getElementById("shapediv");

function shape(cls){
a.className = cls;
}

// var a = document.getElementsByTagName("P")
// console.log(a)

// var parent = document.getElementById("parent");
// var b = parent.getElementsByTagName("P")
// console.log(b);

// for(var i = 0; i<a.length; i++){
//     a[i].className = "color"
// }










