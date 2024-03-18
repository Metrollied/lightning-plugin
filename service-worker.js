chrome.commands.onCommand.addListener(async (command) => {
    switch (command) {
        case 'radical':
            const tab = await getActiveTab();
            await chrome.tabs.sendMessage(tab.id, {
            tabTitle: tab.title
    });

    await PageService.savePage(tab.title, tab.url);
            break;
        default:
            console.log(`Command ${command} not found`);
    }
});

getActiveTab = async () => {
    const query = { active: true, currentWindow: true };
    const tabs = await chrome.tabs.query(query);
    
    return tabs[0];
}