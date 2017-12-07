//making request function
//先写了里面的 然后把他们一起打包成了一个functionlol

function httpReq(url,callback){
  var req = new XMLHttpRequest();
  //bulit in object/class (constructor)
  //open the actual request, method
  req.open("GET", url, true);
  //getting, ^variable we are going to define, true/false
  req.addEventListener('load',function(){
    //console.log(req.responseText); 换成以下的callback
    callback(req.responseText);
  });
  //the thing to listen to(the event), and the function
  req.send(null);
  //asynncrenessly response
}

//下面这个是stakflow搜出来的一个别人写好的function  jsonp
function jsonp(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };
 
    var script = document.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}
