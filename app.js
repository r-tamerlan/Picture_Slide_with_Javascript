let resimler = new Array("url(img/1.jpg)", "url(img/2.jpg)", "url(img/3.jpg)",
    "url(img/4.jpg)", "url(img/5.jpg)", "url(img/6.jpg)", "url(img/7.jpg)", "url(img/8.jpg)")
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let slayd = document.getElementById("slayd");
let z = 0;

btn2.addEventListener("click", function() {

    if (z == 0) { z = 1 }

    slayd.style.background = resimler[z];
    if (z == 7) { z = 0 }
    z++;
})

btn1.addEventListener("click", function() {
    if (z == 0) { z = 7 }
    slayd.style.background = resimler[z];
    if (z == 0) { z = 7 }
    z--;
})