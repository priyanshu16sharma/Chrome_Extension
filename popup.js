document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("getTitleButton").addEventListener("click", function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var title = tabs[0].title;
            document.getElementById("titleDisplay").innerHTML = `<div class="current-tab">Current Tab Title: ${title}<div/>`;
        });
    });
});
