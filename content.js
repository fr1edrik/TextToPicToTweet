chrome.tabs.onUpdated.addListener(function(tabid, changeInfo, tab) {
  log({ changeInfo, tab });

  implementButton();

  sendAction();
});

function log(string) {
  console.log(`\x1b[44m${string}\x1b[0m"`);
}

function implementButton() {}

function sendAction() {}
