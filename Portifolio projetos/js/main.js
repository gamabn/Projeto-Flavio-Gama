
var minutes = 0;
var display = document.querySelector('.fl-country');
var number = document.getElementById('fl-number');
var contact = document.querySelector('.fl-btn-contact');
var sliderContainer = document.querySelector('.fl-slider-container ');


contact.addEventListener('click' ,function(){
	var boxContact = document.querySelector('.fl-contact-info');
	boxContact.classList.toggle('fl-is-open');
	this.classList.toggle('fl-btn-contact-icon');
   });

//====================CODIGO DO MATRIX===========================================
const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = '#0F0';
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};

setInterval(draw, 30);

window.onresize = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}
 setTimeout(function(){
	display.classList.add('fl-matrix');
 // display.style.display = "none";
 },4000)



//============================Matrix===========================================

 

  



//contact.addEventListener('click' ,function(){
// var boxContact = document.querySelector('.fl-contact-info');
// boxContact.classList.toggle('fl-is-open');
 //this.classList.toggle('fl-btn-contact-icon');
//});





//=========== nao mexer ============
//window.addEventListener('load', function () {
  //var pagePreloder = document.querySelector('.fl-country');

  //setInterval(()=>{

    //minutes + 1;
    //minutes++;
   // number.innerHTML = minutes
   
   //;
  //},1000)

  //setTimeout(function () {
     // pagePreloder.style.display = 'none';
 // }, 4000);
//});
 
//============ nao mexer =================



   

  
    
   

  
   

   


  
  
    


