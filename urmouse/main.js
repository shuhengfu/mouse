/* jshint esversion : 6 */
//mouse move
var m = document.createElement('div');
document.body.appendChild(m);
m.style.position = "fixed";

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
//以下修改点击鼠标以后出现的信息内容 ``符号是可以让内容竖排下来
var codeString = `let mousePos = document.createElement('div');
mousePos.textContent = e.x + " " + e.y;

let appV = document.createElement('div');
appV.textContent = navigator.appVersion;

let appCodeName = document.createElement('div');
appCodeName.textContent = navigator.appCodeName;
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

 let mousePos = document.createElement('div');
 mousePos.textContent = `Hello there, we've noticed that: your mouse is moving at `+ e.x + "(x)" + " " + e.y + "(y)" + " in this window";

 let appV = document.createElement('div');
 appV.textContent = "your browser version is " + navigator.appVersion;

 // let appName = document.createElement('div');
 // appName.textContent = "your browser is " + navigator.appName;
// Netscape??
let cookieEnabled = document.createElement('div');
cookieEnabled.textContent = "and your cookie is " + navigator.cookieEnabled +"ly enabled";

 let hostName = document.createElement('div');
 hostName.textContent = "your are browsing " +location.hostname;

 let lastPage = document.createElement('div');
 lastPage.textContent = "your just browsed " + document.referrer;
 //need an if condition if it's the very first page the person open??

 let osCPU = document.createElement('div');
 osCPU.textContent = "and you have " + navigator.hardwareConcurrency + " CPU running in your computer";

 let cpuInfo = document.createElement('div');
 cpuInfo.textContent = "Information about the OS and CPU: " + navigator.oscpu;

 let appCodeName = document.createElement('div');
 appCodeName.textContent = "and you are using the " + platform.name + " browser!!";

 // let cpuClass = document.createElement('div');
 // cpuClass.textContent = "The class of CPU: " + navigator.cpuClass;

 let osPlatform = document.createElement('div');
 osPlatform.textContent = "your system platform is " + navigator.platform;

 let language = document.createElement('div');
 language.textContent = "system language " + navigator.systemLanguage;

let timeZone = document.createElement('div');
timeZone.textContent = "btw, you are in this time zone " + Intl.DateTimeFormat()
.resolvedOptions()
.timeZone + " ,aren't you?";

let cookie = document.createElement('div');
cookie.textContent = document.cookie;

// let cookie = document.createElement('div');
// cookie.textContent = "cookie " + getCookie();
//
// function getCookie(name){
//     /* 获取浏览器所有cookie将其拆分成数组 */
//     var arr=document.cookie.split('; ');
//
//     for(var i=0;i<arr.length;i++)    {
//         /* 将cookie名称和值拆分进行判断 */
//         var arr2=arr[i].split('=');
//         if(arr2[0]==name){
//             return arr2[1];
//         }
//     }
//     return '';
// }

//the language you are using is .. navigator.language

// let pathName = document.createElement('div');
// pathName.textContent = "and you are searching " + location.pathname;


//navigator.plugins

 // let appPlugins = document.createElement('div');
 // appPlugins.textContent = navigator.plugins;
// ~~~~~~~~~~~~~~~~~~~
// let plugins = [
// 	{name:'first'},
//   {name:'second'},
//   {name:'third'},
//   {name:'fourth'},
//   {name:'fifth'}
// ];
//
// let pluginsArray = document.createElement('div');
//
// for(var i=0;i<plugins.length;i++){
// 	pluginsArray.textContent += plugins[i].name+', ';
// }
// pluginsArray.textContent = navigator.plugins;

//m.appendChild(pluginsArray);
// ~~~~~~~~~~~~~~~~~~~~~
//userAgent language Screenresolution
//Timezone Fonts HTTP ACCEPT Supercookies HTML5 Canvas...

//let scrollElm = document.scrollingElement;
//scrollElm.scrollTop = 0;
//document.cookie;
/*~~~~*/
//每加一项data 都需要在这里叫一下 关联
  m.appendChild(mousePos);
  m.appendChild(appV);
	// m.appendChild(appName);
	m.appendChild(cookieEnabled);
	m.appendChild(hostName);
	m.appendChild(lastPage);
	m.appendChild(language);
  // m.appendChild(appPlugins);
  m.appendChild(osCPU);
  m.appendChild(cpuInfo);
  //m.appendChild(cpuClass);
  m.appendChild(osPlatform);
	m.appendChild(appCodeName);
	// m.appendChild(pathName);
  m.appendChild(timeZone);
  m.appendChild(cookie);
//i got the cookie info but donno what it really stands for with
//bunch of letters and numbers...and how to convert it into human language
/*~~~~*/
  //style of the mousemove
	m.style.left = e.x+20+"px";
  m.style.top = e.y+20+"px";
  m.style.color = "white";
  m.style.backgroundColor = "black";
	m.style.lineHeight = 25+"px";
	m.style.padding = 15+"px";
	// m.style.marginBottom = "50px";
	// m.style.borderBottom = "50px";
	// m.style.marginLeft = "10px";
	m.style.fontSize = 12+"px";

}

//console.log(platform);
window.addEventListener('mousemove', updateMouseXY);
