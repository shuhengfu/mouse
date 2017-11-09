/* jshint esversion : 6 */


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
