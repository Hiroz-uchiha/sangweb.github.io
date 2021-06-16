// 1.Mengambil data dari index.html
const input = document.querySelector("input");
const data = document.getElementsByClassName("link")[0]

//2.Jika sudah diambil maka kita membuat sebuah fungsi didalamnya.
input.addEventListener("click",function(){
    data.classList.toggle("geser");
})