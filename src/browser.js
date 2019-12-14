const core = require('./core');

document.querySelectorAll('[type="text/x-francescript"]').forEach(frToJs);

window.france = core;

function frToJs(scriptNode) {
  var text = scriptNode.textContent || getText(scriptNode); scriptNode.parentNode.removeChild(scriptNode);
  addScript(core.compile(text, "fr"));
}

function getText(node) {
  var text = node.getAttribute('src');
  
  if (text !== null && text.length) {
    var xml = new XMLHttpRequest();
    
    xml.open('GET', text, false);
    xml.send(null);
    
    if (xml.status == 200 || xml.status == 0) {
    		return xml.responseText;
    	}
   }
}

function addScript(content) {
  var js = document.createElement("script");
  js.innerHTML = content;
  document.body.appendChild(js);
}