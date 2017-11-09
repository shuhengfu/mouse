/* jshint esversion : 6 */
//mouse move
var m = document.createElement('div');
document.body.appendChild(m);
m.style.position = "absolute";

//how to make the mouse move with the screen scroll down
//how to refer them(all the separated files)in json file?
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



function updateMouseXY(e){
	m.innerHTML = "";


//以下是可以添加的信息内容
//let vs var

 let mousePos = document.createElement('div');
 mousePos.textContent = e.x + " " + e.y;

 let appV = document.createElement('div');
 appV.textContent = navigator.appVersion;

 let appCodeName = document.createElement('div');
 appCodeName.textContent = navigator.appCodeName;

//oscpu userAgent language ...

  m.appendChild(mousePos);
  m.appendChild(appV);
  m.appendChild(appCodeName);

	m.style.left = e.x+"px";
  m.style.top = e.y+"px";
}

window.addEventListener('mousemove', updateMouseXY);
