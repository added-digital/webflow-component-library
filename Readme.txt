How to use the copy method:

Steps

1. Go to Fiddle-scripts and paste 

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

in the console. 

2. Copy your webflow component that you want to make copyable and pasted it anywere on the page with this console.
    -> This should start a download of an object of the copied webflowObject.
    
3. Insert this in a texteditor and define it as a "const wfO" + someVersion + "={object}" (e.g. const wfO1={object-code})

4. Now you can add
