// Notification body.
const notification = document.createElement("div");
notification.className = 'jimmy-div';

// Notification icon.
const icon = document.createElement('img');
icon.src = chrome.runtime.getURL("images/mad_skills.png");
notification.appendChild(icon);

// Add to current page.
document.body.appendChild(notification);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let riff = new Audio (chrome.runtime.getURL("riff.mp3"));
    riff.play();

    const notification = document.getElementsByClassName('jimmy-div')[0];

    notification.style.display = 'flex';

    setTimeout(function () {
        notification.style.display = 'none';
    }, 3000);
    
    return true;
});