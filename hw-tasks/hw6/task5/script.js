var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var a = document.getElementById('preventDefault');

var onClick = function (e) {
	var $el = e.target;
  
  //e.stopPropagation();
	
  $el.style.backgroundColor = 'yellow';
	console.log($el);
  //$el.style.backgroundColor = '';
}
var preventLinkEvents = function (e) {
	e.preventDefault();
}

//document.body.onclick = onClick;
box1.onclick = onClick;
box2.onclick = onClick;
box3.onclick = onClick;
a.onclick = preventLinkEvents;