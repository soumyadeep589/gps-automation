

var autoBuy = document.getElementById('autoBuy');

//on init update the UI checkbox based on storage
// chrome.storage.sync.get('hide', function(data) {
//   changeBlur.checked=data.hide;
// });

autoBuy.onclick = function(element) {
  let value = true

  //update the extension storage value
//   chrome.storage.sync.set({'hide': value}, function() {
//     console.log('The value is'+ value);
//   });

  //Pass init or remove message to content script 
  if(value){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {command: "init", hide: value}, function(response) {
                    console.log(response.result);
                });
    });
    console.log("button clicked")
  }else{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {command: "remove", hide: value}, function(response) {
                    console.log(response.result);
      });
    });
  }

};

