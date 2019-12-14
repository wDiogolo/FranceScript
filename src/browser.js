const core = require('./core');

document.querySelectorAll('[language="FranceScript"]').forEach(yoptaToJs);
document.querySelectorAll('[type="text/x-francescript"]').forEach(frToJs);

window.france = core;

function frToJs(scriptNode) {
  var text = scriptNode.textContent || getTxtFromSrc(scriptNode);
  scriptNode.parentNode.removeChild(scriptNode);
  addScriptNode(core.compile(text, "fr"));
}

function getTxtFromSrc(node) {
  var src = node.getAttribute('src');
  if (src !== null && src.length) {
    var xml = new XMLHttpRequest();
    xml.open('GET', src, false);
    xml.send(null);
    if (xml.status == 200 || xml.status == 0)
      return xml.responseText;
  }
}

function addScriptNode(content) {
  var js_script = document.createElement("script");
  js_script.innerHTML = content;
  document.body.appendChild(js_script);
}