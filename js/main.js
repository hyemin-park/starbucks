const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  //
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색'); //html 속성 지정
});

searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder',''); //html 속성 지정
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
//_.throttle(함수, 시간)
window.addEventListener('scroll',_.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //배지숨기기
    // gsap.to(요소,지속시간,옵션);
    gsap.to(badgeEl, .6,{
      opacity:0,
      display:'none'
    });
    //버튼보이기
    gsap.to(toTopEl, .2,{
      x: 0 //y축으로 얼마만큼 이동할 것인가
    });
  }else{
    //배지 보이기
    gsap.to(badgeEl, .6,{
      opacity:1,
      display:'block'
    });
    //버튼숨기기
    gsap.to(toTopEl, .2,{
      x: 100 //y축으로 얼마만큼 이동할 것인가
    });
  }
}, 300));//0.3초 실행되는 함수의 개수를 일정시간에 한번씩만사용하도록 제한을 주는 throttle 것이다.


toTopEl.addEventListener('click',function(){
  gsap.to(window, .7, {
    scrollTo:0 //화면의 위치를 0px 지점으로 옮겨주겠다
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  // gsap.to(요소,지속시간,옵션);
  gsap.to(fadeEl, 1,{
    delay: (index+1) * .7, //0.7초 뒤 애니메이션시작 0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});


//new 생성자 클래스
//new Swiper(선택자 , 옵션)
new Swiper('.notice-line .swiper-container',{
  direction:'vertical' ,
  autoplay: true , //자동재생
  loop : true
});//인수 
new Swiper('.promotion .swiper-container',{
  slidesPerView:3, //한번에 보여줄 슬라이드개수
  spaceBetween:10, //슬라이드 사이 여백
  centeredSlides: true,//1번 슬라이드가 가운데 보이기
  loop:true,
  autoplay:{
    delay: 5000 //5초에 한번씩 이미지가 슬라이드가 자동으로 됨
  },
  pagination:{
    el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자가 페이지 번호 요소 제어 가능 여부
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container',{
  autoplay:true,
  loop: true,
  spaceBetween:30,
  slidesPerView:5,
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion; //!뒤에 있는 값이 반대가 되게해라
  if(isHidePromotion){
    //숨김
    promotionEl.classList.add('hide');    
  }else{
    //보임
    promotionEl.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector,delay,size){ //
  // gsap.to(요소,시간,옵션);
  gsap.to(
    selector, //선택자
    random(1.5 , 2.5), //애니메이션 동작시간 
    { //옵션
        y:size, //y축으로 얼마만큼 움직이면서 애니메이션 
        repeat:-1, //무한반복
        yoyo:true, //위로 재생
        ease: Power1.easeInOut,
        delay:random(0,delay)
    });
}
floatingObject('.floating1',1, 15);
floatingObject('.floating2',.5, 15);
floatingObject('.floating3',1.5, 20);



const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 //
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());//클래스 제어
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  //값을 지정 2021

















