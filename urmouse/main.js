/* jshint esversion : 6 */
//mouse move
var m = document.createElement('div');
document.body.appendChild(m);

//nick:
// "give the element-object a CSS position style of "absolute"
// this will then allow us to set it's left/top coordinates later on"
m.style.position = "fixed";


var codeString = `  var div = document.createElement('div');
div.textContent = codeString;
div.style.position = "absolute";
document.body.appendChild( div );
`;

//try to make the codeString only appear when i click and will disappear
// var div = document.createElement('div');
// div.textContent = codeString;
// div.style.position = "fixed";
// document.body.appendChild( div );
//
var pre;
function MouseDown(e){
	pre = document.createElement('pre');
  pre.textContent = codeString;
  // use the e.x && e.y to dynamically place the pre tag
  // wherever the mouse happens to be when it's clicked
  pre.style.position = "fixed";
  pre.style.left = e.x+10+"px";
  pre.style.top = e.y+10+"px";
  pre.style.backgroundColor = "red";
  document.body.appendChild(pre);
}

window.addEventListener('mousedown',MouseDown);

function MouseUp(e){
  document.body.removeChild(pre);
}

window.addEventListener('mouseup',MouseUp);
// setTimeout (function(){
//   onMouseClick(e);
// },1000);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

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

 let appPlugins = document.createElement('div');
 appPlugins.textContent = navigator.plugins;

let timeZone = document.createElement('div');
timeZone.textContent = Intl.DateTimeFormat()
.resolvedOptions()
.timeZone;
//oscpu userAgent language Screen resolution
//Timezone Fonts HTTP ACCEPT Supercookies HTML5 Canvas...

//let scrollElm = document.scrollingElement;
//scrollElm.scrollTop = 0;
//document.cookie;

  m.appendChild(mousePos);
  m.appendChild(appV);
  m.appendChild(appCodeName);
  m.appendChild(appPlugins);
  m.appendChild(timeZone);
	m.style.left = e.x+20+"px";
  m.style.top = e.y+50+"px";
}







window.addEventListener('mousemove', updateMouseXY);
