function checkForValidUrl(tabId, changeInfo, tab) {
  if (BgConfig.match(tab.url)) {
    chrome.pageAction.show(tabId);
  }
}

function prepareCopyContent(tab, callback){
  chrome.tabs.sendMessage(tab.id, {text: 'get_parent_jira_issue'},
    function(parentIssue) {
      var data = BgConfig.apply(parentIssue, tab.url, tab.title);
      callback(data.join('<br>'));
    }
  );
}

function init(){
 BgConfig.init();
}

init();
chrome.tabs.onUpdated.addListener(checkForValidUrl);
