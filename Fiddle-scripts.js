//copy on click script
document.querySelectorAll('.object-clone-btn').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    console.log("Button clicked");
    document.addEventListener('copy', event => {
    	let data = JSON.stringify(wfO);
      console.log("Object copied");
      if (event.clipboardData) {
        event.clipboardData.setData('application/json', data);
      } else if (window.clipboardData) {
        window.clipboardData.setData('application/json', data);
      }
      event.preventDefault();
    }, true);
    document.execCommand('copy');
  })
})

//set this const to the webflow object you downloaded and add it to github
const wfO={};

//run this in console, then paste webflowblocks to get the download
document.addEventListener('paste', function(e){
    let data = e.clipboardData.getData('application/json');
    let blob = new Blob([data], { type: 'application/json' })
    let a = document.createElement('a');
    var eDownload = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: false
    });
    a.download = 'webflow-object.json';
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
    a.dispatchEvent(eDownload);
    e.preventDefault();
});