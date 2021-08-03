$(function(){

  // Select_lang
  const $language = $('header > .utill > .utill-r > .Select_lang> button');
  $language.on('click',function(){

    $('header > .utill > .utill-r > .Select_lang > .box_select').toggleClass('on');
  });




  // 시간 표시
  let str = ' '
  const today = new Date();

  //년도
  const year = today.getFullYear();
  str += year + '. ';

  //월
  const month = today.getMonth() + 1;
  str +=  month + '.';

  //일
  const date = today.getDate();
  str +=  date + '   ';

  //시
  const hours = today.getHours();
  str += hours + ":";

  //분
  const minutes = today.getMinutes();
  str += minutes ;

         

  document.querySelector('.time').textContent = str;
  // document.querySelector('h2').textContent = today.toLocaleString();


  // 독도 info slide 
  const $DokdoInfopagination = $('section > .left_inr > div > .pagination > li > a');
  const $container = $('section > .left_inr > div > nav > .slides-container');

  let nowidx = 0;

  $DokdoInfopagination.on('mouseenter',function(){
    
    nowidx = $DokdoInfopagination.index(this);

    $container.animate({
      left:-750 * nowidx
    },10);


  });

  

});