// ==UserScript==
// @name         Wider Claude.ai Chat
// @namespace    https://www.greasespot.net/
// @version      1.0
// @description  Increases the maximum width of the central window on claude.ai
// @author       Pierpaolo Spadafora
// @match        https://claude.ai/*
// @grant        none
// @homepage     https://github.com/PierpaoloSpadafora/wider-claude-ai-chat
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    function updateClasses() {
        const elements = document.querySelectorAll('div.max-w-3xl');
        elements.forEach((element) => {
            element.classList.remove('max-w-3xl');
            element.classList.add('max-w-5xl');
        });
    }
    window.addEventListener('load', updateClasses);
    const observer = new MutationObserver(updateClasses);
    observer.observe(document.body, { childList: true, subtree: true });
})();
