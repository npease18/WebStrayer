function changePDF(chapter) {
  var container = document.getElementById("pdfcontainer")
  container.innerHTML = "<embed src='https://npease18.github.io/StrayerChapters/"+chapter+".pdf#toolbar=1&navpanes=0' type='application/pdf' style='height:calc(100vh - 70px)' width='100%'></embed>"
  document.getElementById("chapter_name").innerHTML = chapter
}
function onLoad() {
  if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
  navigator.serviceWorker.register('service-worker.js').then(function(registration) {
  // Registration was successful
  console.log('Registered!');
  }, function(err) {
  // registration failed :(
  console.log('ServiceWorker registration failed: ', err);
  }).catch(function(err) {
  console.log(err);
  });
  });
  } else {
  console.log('service worker is not supported');
  }
self.addEventListener('install', function() {
  console.log('Install!');
});
self.addEventListener("activate", event => {
  console.log('Activate!');
});
self.addEventListener('fetch', function(event) {
  console.log('Fetch!', event.request);
});
}
