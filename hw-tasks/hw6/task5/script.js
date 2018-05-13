var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box11 = document.getElementById('box11');
var box22 = document.getElementById('box22');
var box33 = document.getElementById('box33');

var link = document.getElementById('prevent');

link.addEventListener('click', function(e){
  e.preventDefault();
})

var onClickPrevent = function (e) {    
  var $el = e.target;
  e.preventDefault();  
  if(this != $el) {
    changeColor(this);
  }
}

var onClickStop = function (e) {    
  e.stopPropagation();
  changeColor(this);
}

var changeColor = function(el){
  el.style.backgroundColor = 'yellow';	  
}

box1.onclick = onClickPrevent;
box2.onclick = onClickPrevent;
box3.onclick = onClickPrevent;

box11.onclick = onClickStop;
box22.onclick = onClickStop;
box33.onclick = onClickStop;