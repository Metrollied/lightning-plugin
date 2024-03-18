chrome.commands.onCommand.addListener(async (command) => {
    const tab = await getActiveTab();
        await chrome.tabs.sendMessage(tab.id, {
        tabTitle: tab.title
    })
});

getActiveTab = async () => {
    const query = { active: true, currentWindow: true };
    const tabs = await chrome.tabs.query(query);
    
    return tabs[0];
}