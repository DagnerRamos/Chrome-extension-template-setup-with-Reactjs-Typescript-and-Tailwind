import React, {useEffect} from 'react';
const ContentApp = () => {
 useEffect(()=>{
  console.log("Content Active")
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('Got it :', request);
    
    if (request.greeting === "Hi from the form example") {
      sendResponse({ 
        confirmation: "Recived your greetings!",
        title: (window as any).document.title 
    });
    }
  });
 }, [])
  
  return (<div>Content App</div>)
}
export default ContentApp;