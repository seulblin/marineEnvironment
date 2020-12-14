//검색버튼
var btt = document.querySelector('.btn_srh'),
    search = document.getElementById('btn_open'),
    close = document.querySelector('.close_btn');

btt.addEventListener('click',function(){
  for(var i = 0; i != btt; i++){
    if(i == 0){
      search.style.display = 'block';
return;
}
   }
});

close.addEventListener('click',function(){
  search.style.display = 'none';
});

//스크롤


//이미지 올리기
let targetMenu = document.querySelectorAll('.mid_hoverWrap');
//let upMenu = document.querySelectorAll('hoverImg');

for(let i = 0; i < targetMenu.length; i++){
  targetMenu[i].addEventListener('mouseover',function(e){
    
  });
}
