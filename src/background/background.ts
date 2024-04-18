chrome.contextMenus.create({
    id: "openFormOption",
    title: "Test Form",
    contexts: ["page"],
})
chrome.contextMenus.onClicked.addListener((info, tab)=>{
    if (info.menuItemId === "openFormOption"){
        console.log("Opening Form")
        const newTabUrl = chrome.runtime.getURL('form_test.html');
        chrome.tabs.create({ 
            url: newTabUrl,
            openerTabId: tab.id,
        });
    }
});