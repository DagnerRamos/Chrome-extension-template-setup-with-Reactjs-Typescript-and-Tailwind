chrome.contextMenus.create({
    id: "openFormOption",
    title: "Example Form",
    contexts: ["page"],
})
chrome.contextMenus.onClicked.addListener((info, tab)=>{
    if (info.menuItemId === "openFormOption"){
        console.log("Opening Form")
        const newTabUrl = chrome.runtime.getURL('form_example.html');
        chrome.tabs.create({ 
            url: newTabUrl,
            openerTabId: tab.id,
        });
    }
});