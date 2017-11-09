/* jshint esversion : 6 */

//is is better to be an object?? to modulate it??
var codeString = `  var x =100;
  var y = 100;

  function test(){
  	console.log('hi);
  }
`;

//try to make the codeString only appear when i click and will disappear
var div = document.createElement('div');
div.textContent = codeString;
div.style.position = "absolute";
document.body.appendChild( div );
//

function onMouseClick(e){
	var pre = document.createElement('pre');
  pre.textContent = codeString;
  // use the e.x && e.y to dynamically place the pre tag
  // wherever the mouse happens to be when it's clicked
  pre.style.position = "absolute";
  pre.style.left = e.x+"px";
  pre.style.top = e.y+"px";
  document.body.appendChild(pre);
}


window.addEventListener('click',onMouseClick);
