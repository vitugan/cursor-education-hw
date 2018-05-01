var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var a = document.getElementById('preventDefault');

var onClick = function (e) {
	var $el = e.target;  
  //e.stopPropagation();	
  $el.style.backgroundColor = 'yellow';	
  //$el.style.backgroundColor = '';
}
var onClick1 = function (e){
  console.log('click on box1');  
}

var preventLinkEvents = function (e) {
	e.preventDefault();
}

box1.onclick = onClick;
box2.onclick = onClick;
box3.onclick = onClick;
a.onclick = preventLinkEvents;