console.log("Content Active")
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('Got it :', request);
    
    if (request.greeting === "Hi from the form test") {
      // Realizar alguna acción en respuesta al mensaje recibido
      sendResponse({ 
        confirmation: "Recived your greetings!",
        title: (window as any).document.title 
    });
    }
  });