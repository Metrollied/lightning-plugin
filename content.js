let phrases = [
    "MAD SKILLS!",
    "FREAK OUT!",
    "&nbsp;&nbsp;TOASTY!",
    "&nbsp;&nbsp;&nbsp;WHOA...",
    "EXCELLENT!",
    "&nbsp;TUBULAR!",
    "&nbsp;&nbsp;RADICAL!",
    "&nbsp;&nbsp;WICKED!",
    "&nbsp;PARTY ON!",
    "&nbsp;&nbsp;DUDICAL",
    "&nbsp;ROCK ON!",
    "&nbsp;&nbsp;INSANE!"
]

// Notification body.
const notification = document.createElement("div");
notification.className = 'jimmy-div';

// Notification icon.
const icon = document.createElement('img');
icon.src = chrome.runtime.getURL("images/jimmys/super_mad_skills.png");
icon.className = "jimmy-img";
notification.appendChild(icon);

//Speech
const speech = document.createElement("p");
speech.className = ("jimmy-text");
notification.appendChild(speech);

// Add to current page.
document.body.appendChild(notification);

//Get font
const fontLink = document.createElement("link");
fontLink.href="https://fonts.googleapis.com/css2?family=Knewave&display=swap";
fontLink.rel="stylesheet";
document.body.appendChild(fontLink);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.command === "radical") {

        speech.innerHTML = phrases[Math.floor(Math.random() * phrases.length)]

        let riff = new Audio (chrome.runtime.getURL("riff.mp3"));
        riff.play();

        const notification = document.getElementsByClassName('jimmy-div')[0];

        notification.style.translate = '0 6px';

        setTimeout(function () {
            notification.removeAttribute("style");
        }, 3000);
        
        return true;
    }
    
});