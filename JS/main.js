let img = document.querySelector("img")
let i = 0 ;
setInterval(() => {
   i++ ;
   if (i>4) {
      i=1 ;
   }
   img.setAttribute("src" , `imgs/${i}.jpg`)
}, 2000);
