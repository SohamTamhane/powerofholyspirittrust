let menu_btn = document.getElementById('menu-btn');
let resp_div = document.getElementById('resp-div');
let close_btn = document.getElementById('close-btn');

menu_btn.addEventListener('click', ()=>{
    resp_div.style.display = "flex";
})

close_btn.addEventListener("click", ()=>{
    resp_div.style.display = "none";
})