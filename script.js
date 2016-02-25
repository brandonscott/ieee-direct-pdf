var pdf = $("frame:eq(1)").attr('src');

chrome.runtime.sendMessage({url: pdf}, function(response) {

});