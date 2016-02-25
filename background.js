var curTabID = 0;
var curWinID = 0;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	chrome.tabs.create({ url: request.url });
    chrome.tabs.remove(curTabID);
 });

chrome.tabs.onSelectionChanged.addListener(function(tabId, selectInfo) {
   curTabID = tabId;
   curWinID = selectInfo.windowId;
});