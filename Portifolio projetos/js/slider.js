var sliderContainer = document.querySelector('.fl-slider-container ');
var sliderList = document.querySelector('.fl-slider-list ');
var slider = document.querySelectorAll('.fl-slider');
const sliderTotalItems = slider.length;
var sliderTotal = null;
var  nextItem = document.querySelector('.fl-item-next');
var prevItem = document.querySelector('.fl-item-prev');
var sliderPos = 0;
var currentSlide = document.querySelector(".fl-current-slide");
var totalSlide = document.querySelector(".fl-total-slide");
var currentCounter = 1;
var navItems = document.querySelectorAll('.fl-item-navigador a');
var navCounter = document.querySelector(".fl-item-counter span")


/*==============GET WIDTH============*/
var containerWidth = sliderContainer.parentElement.offsetWidth;
sliderContainer.style.width = containerWidth+'px';



for(var p = 0;p < slider.length; p++){
  slider[p].style.width = containerWidth+'px';

  var sliderWidthTotal = slider[p].offsetWidth;

  sliderTotal  += sliderWidthTotal;
 

}

sliderList.style.width =  sliderTotal+ 'px' ;

var nexSliderAnim = function(){
  var lastItem = sliderTotal - containerWidth;

  if((-1 * (sliderPos)=== lastItem)){
    return;
  }
  
  sliderPos -=  containerWidth;
 
  
    anime({
      targets: sliderList,
      translateX: sliderPos,
      easing:'cubicBezier(0,1.01,.32,1)'
    });
    
}

/*================= ADD WIDHT==========+++++*/
var prevSlideAnim = function (){
  if(sliderPos === 0){
    return;
  }
  
  sliderPos +=  containerWidth;
 
  
    anime({
      targets: sliderList,
      translateX: sliderPos,
      easing:'cubicBezier(0,1.01,.32,1)'
    });
    
}

var counterFormatter = function (n){
  if(n < 10){
       return '0'+ n;
  }else{
    n;
  }

  /*==========COUNTER ADD=====================-------*/
}
var counterAdd = function(){
  if((currentCounter >= 0) && (currentCounter < sliderTotalItems)){
       currentCounter++;
       currentSlide.innerHTML = counterFormatter(currentCounter);
       navCounter.innerHTML = counterFormatter(currentCounter);
  }
 
  console.log(currentCounter)
}

/*=============REMOVE==========================================*/
var counterRemove = function () {
  if((currentCounter > 1) && (currentCounter <= sliderTotalItems)){
    currentCounter--;
    totalSlide.innerHTML = counterFormatter(currentCounter)
    navCounter.innerHTML = counterFormatter(currentCounter);
   }
}

/*================SET ACTIVE NAV=========*/
var setActiveNav = function(){
for(var nv = 0; nv < navItems.length; nv++){
    let myNavNumber = parseInt(navItems[nv].getAttribute('data-nav'));

    if(myNavNumber === currentCounter){
       navItems[nv].classList.add('fl-item-active');
       anime({
        targets: ".fl-item-active",
        width: 90
      });
    }
  }
}

/*================SET ACTIVE SLIDER=========*/
var setActiveSlide = function () {
  for (var sld = 0; sld < slider.length; sld++) {
      let mySlideNum = parseInt(slider[sld].getAttribute('data-slider'));

      if (mySlideNum === currentCounter) {
          slider[sld].classList.add('fl-slide-active');
          slider[sld].querySelector('.fl-portifolio-item-box').classList.add('fl-scale-right');
          slider[sld].querySelector('.fl-portifolio-item-thumb img').classList.add('fl-scale-up');
          slider[sld].querySelector('.fl-portifolio-item-info').classList.add('fl-fade-from-left');
      }
  }
}

var chamgeActive = function(){
    for(var rm = 0; rm < navItems.length; rm++){
      navItems[rm].classList.remove('fl-item-active');
      anime({
        targets: navItems[rm],
        width: 20
      });
      
    }

    for(var rms = 0; rms < slider.length; rms++){
      slider[rms].classList.remove('fl-slide-active');  
      slider[rms].querySelector('.fl-portifolio-item-box').classList.remove('fl-scale-right');
      slider[rms].querySelector('.fl-portifolio-item-thumb img').classList.remove('fl-scale-up');
      slider[rms].querySelector('.fl-portifolio-item-info').classList.remove('fl-fade-from-left');
    }

    setActiveNav();
    setActiveSlide();
}

/*=========== ACTION ===========*/

totalSlide.innerHTML = counterFormatter(sliderTotalItems);
anime({
  targets: ".fl-item-active",
  width: 90
});

nextItem.addEventListener('click', function (){
  nexSliderAnim();
  counterAdd();
 chamgeActive();
  
}) ;

prevItem.addEventListener('click', function (){
 prevSlideAnim();
 counterRemove()
 chamgeActive();

});
