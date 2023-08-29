let tulisanutama = document.getElementById("tulisanutama")
let kotakutama = document.getElementById("kotakutama")
let kotakpilihana = document.getElementById("kotakpilihan-a")
let kotakpilihanb = document.getElementById("kotakpilihan-b")
let kotakpilihanc = document.getElementById("kotakpilihan-c")
let kotakpilihand = document.getElementById("kotakpilihan-d")
let kotakpilihane = document.getElementById("kotakpilihan-e")

kotakpilihana.onclick = function()
 {
    kotakutama.style.backgroundColor = "lightcoral";
    tulisanutama.innerHTML = "ini warna lightcoral";
 }
 kotakpilihanb.onclick = function ()
  {
   kotakutama.style.background = "lightblue";
   tulisanutama.innerHTML = "ini warna lightblue";
  }
  kotakpilihanc.onclick = function () 
  {
    kotakutama.style.background =   "lightyellow";
    tulisanutama.innerHTML = "ini warna lightyellow";
  }
  
 kotakpilihand.onclick = function ()
 {
  kotakutama.style.background = "lightgreen";
  tulisanutama.innerHTML =  "ini warna lightgreen";
 }
 kotakpilihane.onclick = function () 
 {
   kotakutama.style.background =   "lightslategray";
   tulisanutama.innerHTML = "ini warna lightgray";
 }