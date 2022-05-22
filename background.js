chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({hide: true}, function() {
      console.log("Hide image is on");
    });
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'https://ourgoalplan.co.in'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

