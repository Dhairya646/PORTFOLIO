// Dark Mode Toggle
const btn = document.getElementById("themeBtn");
let isDark=false;

btn.addEventListener("click", () => {
    if(!isDark){
        document.body.classList.toggle("dark");
        alert("Theme Changed!");
        document.getElementById("themeBtn").style.backgroundColor="#f8f7ff";
        document.getElementById("themeBtn").style.Color="#1e1b4b";
        document.getElementById("themeBtn").innerHTML="Light Mode"
    }
    else if(isDark){
        document.body.classList.toggle("dark");
        alert("Theme Changed!");
        document.getElementById("themeBtn").style.backgroundColor="#1a103d";
        document.getElementById("themeBtn").style.Color="#a78bfa";
        document.getElementById("themeBtn").innerHTML="Dark Mode"
    }
    isDark=!isDark;
});