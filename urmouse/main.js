/* jshint esversion : 6 */
//mouse move
var m = document.createElement('div');
document.body.appendChild(m);
m.style.position = "fixed";

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
//以下修改点击鼠标以后出现的信息内容 ``符号是可以让内容竖排下来
var codeString = `
var m = document.createElement('div');
document.body.appendChild(m);
m.style.position = "fixed";

var pre;
function MouseDown(e){
	pre = document.createElement('pre');
  pre.textContent = codeString;
	pre.style.position = "fixed";
	pre.style.left = e.x+20+"px";
	pre.style.top = e.y+20+"px";
	pre.style.fontSize = 12+"px";
	pre.style.lineHeight = 25+"px";
	pre.style.color = "white";
	pre.style.backgroundColor = "red";
	document.body.appendChild(pre);
}
window.addEventListener('mousedown',MouseDown);

function updateMouseXY(e){
	m.innerHTML = "";

 let mousePos = document.createElement('div');
 mousePos.textContent = e.x + "(x)" + " " + e.y + "(y)";
 let screenRes = document.createElement('div');
 screenRes.textContent = screen.width + "(px) x "+ screen.height + "(px)";
 let appCodeName = document.createElement('div');
 appCodeName.textContent = platform.name;
 let hostName = document.createElement('div');
 hostName.textContent = location.hostname;
 let lastPage = document.createElement('div');
 lastPage.textContent = document.referrer;"
 let appV = document.createElement('div');
 appV.textContent = navigator.appVersion;
 let cpuInfo = document.createElement('div');
 cpuInfo.textContent = navigator.oscpu;
 let osPlatform = document.createElement('div');
 osPlatform.textContent = navigator.platform;
 let osCPU = document.createElement('div');
 osCPU.textContent = navigator.hardwareConcurrency;
 let timeZone = document.createElement('div');
 timeZone.textContent =Intl.DateTimeFormat()
 .resolvedOptions().timeZone + " ,aren't you?";
 let cookie = document.createElement('div');
 cookie.textContent =document.cookie;

 m.appendChild(mousePos);
 m.appendChild(screenRes);
 m.appendChild(appCodeName);
 m.appendChild(hostName);
 m.appendChild(lastPage);
 m.appendChild(appV);
 m.appendChild(cpuInfo);
 m.appendChild(osPlatform);
 m.appendChild(osCPU);
 m.appendChild(timeZone);
 m.appendChild(cookie);

 m.style.left = e.x+20+"px";
 m.style.top = e.y+20+"px";
 m.style.color = "white";
 m.style.backgroundColor = "black";
 m.style.lineHeight = 25+"px";
 m.style.padding = 15+"px";
 m.style.fontSize = 12+"px";

}

window.addEventListener('mousemove', updateMouseXY);
`;
//
var pre;
function MouseDown(e){
	pre = document.createElement('pre');
  pre.textContent = codeString;
  // use the e.x && e.y to dynamically place the pre tag
  // wherever the mouse happens to be when it's clicked
  //style of the mouseclick
  pre.style.position = "fixed";
  pre.style.left = e.x+20+"px";
  pre.style.top = e.y+20+"px";
	pre.style.fontSize = 12+"px";
	pre.style.lineHeight = 25+"px";
	pre.style.color = "white";
  pre.style.backgroundColor = "red";
  document.body.appendChild(pre);
}

window.addEventListener('mousedown',MouseDown);
//release the mouse and the info disappear
function MouseUp(e){
  document.body.removeChild(pre);
}

window.addEventListener('mouseup',MouseUp);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

function updateMouseXY(e){
	m.innerHTML = "";


//以下是可以添加的信息内容
let greet = document.createElement('div');
greet.textContent = "* Hello there! It's good to know that the website you are visiting knows lots of your info, such as... *";

 let mousePos = document.createElement('div');
 mousePos.textContent = "your mouse is located at "+ e.x + "(x)" + " " + e.y + "(y)" + " in this window";

 let screenRes = document.createElement('div');
 screenRes.textContent = "your screen resolution is " + screen.width + "(px) x "+ screen.height + "(px)";


 let appCodeName = document.createElement('div');
 appCodeName.textContent = "you are using the " + platform.name + " browser!";

 let hostName = document.createElement('div');
 hostName.textContent = "and your are browsing " +location.hostname;

 let lastPage = document.createElement('div');
 lastPage.textContent = "while your just browsed " + document.referrer;
 //need an if condition if they browsed nothing before "nothing"

 let appV = document.createElement('div');
 appV.textContent = "and your browser version is " + navigator.appVersion;

 let cpuInfo = document.createElement('div');
 cpuInfo.textContent = "well, hardware wise, you're running on"+ navigator.oscpu;

 let osPlatform = document.createElement('div');
 osPlatform.textContent = "your system platform is " + navigator.platform;

 let osCPU = document.createElement('div');
 osCPU.textContent = "you have " + navigator.hardwareConcurrency + " CPUs running in your computer. Isn't that exciting?!";

 let timeZone = document.createElement('div');
 timeZone.textContent = "and you are in the time zone of " + Intl.DateTimeFormat()
 .resolvedOptions()
 .timeZone + " ,aren't you?";
//hope you enjoy the daylight/nighttime?
//if condition with realtime of certain timezone...nm

 let cookie = document.createElement('div');
 cookie.textContent = "btw, here is the cookie on this page, in case you have any interest "+document.cookie;

let bye = document.createElement('div');
bye.textContent = "* and thank you for sharing without knowing (: *";

//i got the cookie info but donno what it really stands for with
//bunch of letters and numbers...and how to convert it into human language

/*~~~~*/
//每加一项data 都需要在这里叫一下 关联
  m.appendChild(greet);
  m.appendChild(mousePos);
	m.appendChild(screenRes);
	m.appendChild(appCodeName);
	m.appendChild(hostName);
	m.appendChild(lastPage);
 	m.appendChild(appV);
	m.appendChild(cpuInfo);
	m.appendChild(osPlatform);
  m.appendChild(osCPU);
  m.appendChild(timeZone);
  m.appendChild(cookie);
	m.appendChild(bye);
	// m.appendChild(language);
/*~~~~*/

  //style of the mousemove
	m.style.left = e.x+20+"px";
  m.style.top = e.y+20+"px";
  m.style.color = "white";
  m.style.backgroundColor = "black";
	m.style.lineHeight = 25+"px";
	m.style.padding = 15+"px";
	m.style.fontSize = 12+"px";

}

window.addEventListener('mousemove', updateMouseXY);
