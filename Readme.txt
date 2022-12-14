How to use the copy method:

Steps

1. Go to any live website and add this code: 

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



2. Copy your webflow component that you want to make copyable and paste it anywere on the page where you wrote previous step.
    -> This should start a download of an object of the copied webflowObject.
  
  
  
3. Insert the content of the downloaded webflowObject in a texteditor and define it as follows:

    "const wfO" + someVersion + "={object}" (e.g. const wfO1={object-code}) 
   
   and then add this file to the github repository. The host link will look lke this:

    <script src="https://cdn.jsdelivr.net/gh/added-digital/webflow-component-library/components/component.js"></script>
   
   and its important to look at how many components already are on that page(wfO1, etc...) 
   when you chose the wfO name(and the id 01, 02, ... in step 4).
   
   For example, navbars.js will inlcude many nav components who are defined with diffrent names and then also an object which 
   includes 01, 02 keys with the wfO1 connected to them.


4. Now you can add a copy button and add an id that is incremented categoryname for each component on the page.(Written as navbars-1, navbars-2, ...) 
   Every button should also get the    class: "object-clone-btn".



5. Finaly you add this code: 

    <script src="https://cdn.jsdelivr.net/gh/added-digital/webflow-component-library/components/navbars.js"></script>
   

    <script>
   
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
    
    --> For each component in the script, you will have to have one cms item with a corresponding id to the copy button of the item.
        (+display of component without connection)



6. Notice that the "wfO1, wfO2"-namegiving is very important for multiple components on a single page. 
   
 
 
Extra:   
   If uppdates are made to a component, go to a link that looks like this: 
   
   https://purge.jsdelivr.net/gh/added-digital/webflow-component-library/components/component.js
   
   to clear the cache. 
   
 

