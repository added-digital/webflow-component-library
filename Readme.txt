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
    
3. Insert this in a texteditor and define it as a "const wfO" + someVersion + "={object}" (e.g. const wfO1={object-code}) and then add this file to the        github repository. The host link will look lke this: 
   <script src="https://cdn.jsdelivr.net/gh/added-digital/webflow-component-library/component.js"></script> 
   and its important to look at how many components already are on that page(wfO1, etc...) when you chose the wfO name in the next step.

4. Now you can add a copy button and add an id that is incremented for each component on the page.(Written as 01, 02, ...) Every button should also get the    class: "object-clone-btn".

5. Finaly you add this code: 

    <script src="https://cdn.jsdelivr.net/gh/added-digital/webflow-component-library/Nav2.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/added-digital/webflow-component-library/NavTest.js"></script>

    <script>
    const wfObject = {
        "01" : wfO1,	
        "02" : wfO2
        //...
    }
    document.querySelectorAll('.object-clone-btn').forEach(item => {
        item.addEventListener('click', event => {
          event.preventDefault();
          document.addEventListener('copy', event => {
              let data = JSON.stringify(wfObject[item.id]);
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
    </script>

    in the "before </body>" code tag in the webflow page. 
    
    --> For each script with a component, add a key:value pair to the wfObject and a button with corresponding id to the page.(+display of component           without connection)

6. Notice that the "wfO1, wfO2"-namegiving is very important for multiple components on a single page. 
   
   
Extra:   
   If uppdates are made to a component, go to a link that looks like this: 
   
   https://purge.jsdelivr.net/gh/added-digital/webflow-component-library/component.js
   
   to clear the cache. 
   
 

