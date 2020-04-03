const annoyer = {
    phrases: ["YOLO", "You get me?", "Innit?", "Literally", "Cray cray", "Totes"],

pickPhrase() {
 const {
     phrases
    } = this;

 const idx = Math.floor(Math.random() * phrases.length);
 return phrases[idx];
},
start(){
setInterval(()=>{
var annoy='';
  annoy= this.pickPhrase();
 document.getElementById("annoy").innerText = annoy;
  }, 3000)
} 


}

