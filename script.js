const navbar = document.getElementById('navbar');
const nbar = document.getElementById('nbar');
nbar.addEventListener("click",()=>{
    navbar.style.right="0px";
})

const close_bar = document.getElementById('close-bar');
close_bar.addEventListener("click",()=>{
    navbar.style.right="-300px";
})

// SHOP PAGE
// for(let i = 1;i <= 4;i++){
//     var str = "small_img_col-"+i;
//     const curr = document.getElementsByClassName(str)[0];
//     curr.addEventListener("click",()=>{
//         var main_image = document.getElementsByClassName('Main_Img')[0];
//         main_image.setAttribute("src","./img/products/f"+i+".jpg");
//     })
// }