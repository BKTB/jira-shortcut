function doCopy(data) {
  var obj =  document.getElementById('copy-clip-div');

  obj.style.display = '';

  obj.contentEditable = true;
  obj.innerHTML = data;
  obj.unselectable = false;
  obj.focus();
  document.execCommand('SelectAll');
  document.execCommand('Copy', false, null);

  obj.style.display = 'none'
}

var bg = chrome.extension.getBackgroundPage();

function run() {

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    bg.prepareCopyContent(tabs[0], function(data) {
      doCopy(data);
    });
  })
}

run()
