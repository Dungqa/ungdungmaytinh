var a=document.getElementById("so1");
var b=document.getElementById("so2");
function cong(a,b) {
    var ketqua= a+b;
    var y=document.getElementById('ketqua');
    y.innerHTML=("Result:"+" "+ketqua);
    console.log(ketqua);
}
function tru(a,b) {
    var ketqua= a-b;
    var y=document.getElementById('ketqua');
    y.innerHTML=("Result:"+" "+ketqua);
    console.log(ketqua);
}
function nhan(a,b) {
    var ketqua= a*b;
    var y=document.getElementById('ketqua');
    y.innerHTML=("Result:"+" "+ketqua);
    console.log(ketqua);
}
function chia(a,b) {
    var ketqua= a/b;
    var y=document.getElementById('ketqua');
    y.innerHTML=("Result:"+" "+ketqua);
    console.log(ketqua);
}
