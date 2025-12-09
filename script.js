import {kanaList} from './jpChars.js';

let hiraganaButton = document.getElementById("hiragana");
let katakanaButton = document.getElementById("katakana");
let romajiButton = document.getElementById("romaji");
const blockquote = document.getElementById('letter');
const answer = document.getElementById('answer');
let main = document.getElementById('main');
const instructionText = document.querySelector('.main p');

let ind = Math.floor(Math.random() * kanaList.length);

document.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem('kanaMode');
    
    instructionText.textContent = "Click to reveal";

    if (savedMode === 'katakana') {
        katakanaButton.click();
    } else if (savedMode === 'romaji') {
        romajiButton.click();
    } else {
        hiraganaButton.click();
    }
});

hiraganaButton.addEventListener("click", () => {
    if(!hiraganaButton.classList.contains('clicked')){
        localStorage.setItem('kanaMode', 'hiragana');
        answer.textContent = kanaList[ind][2];
        answer.classList.remove('shown');
        hiraganaButton.classList.toggle('clicked');
        blockquote.textContent = kanaList[ind][0];
        instructionText.textContent = "Click to reveal";
    }
    katakanaButton.classList.remove('clicked');
    romajiButton.classList.remove('clicked');
})

katakanaButton.addEventListener("click", () => {
    if(!katakanaButton.classList.contains('clicked')){
        localStorage.setItem('kanaMode', 'katakana');
        answer.textContent = kanaList[ind][2];
        answer.classList.remove('shown');
        katakanaButton.classList.toggle('clicked');
        blockquote.textContent = kanaList[ind][1];
        instructionText.textContent = "Click to reveal";
    }
    hiraganaButton.classList.remove('clicked');
    romajiButton.classList.remove('clicked');
})

romajiButton.addEventListener("click", () => {
    if(!romajiButton.classList.contains('clicked')){
        localStorage.setItem('kanaMode', 'romaji');
        answer.textContent = kanaList[ind][0] + " " + kanaList[ind][1];
        answer.classList.remove('shown');
        romajiButton.classList.toggle('clicked');
        blockquote.textContent = kanaList[ind][2];
        instructionText.textContent = "Click to reveal";
    }
    hiraganaButton.classList.remove('clicked');
    katakanaButton.classList.remove('clicked');
})

main.addEventListener("click", () => {
    if(!answer.classList.contains('shown')){
        answer.classList.add('shown');
        instructionText.textContent = "Click for next";
    }
    else{
        blockquote.classList.add('fade-out');
        answer.classList.add('fade-out');
        instructionText.classList.add('fade-out');

        setTimeout(() => {
            ind = Math.floor(Math.random() * kanaList.length);
            
            answer.style.transition = 'none'; 
            answer.classList.remove('shown');
            
            instructionText.textContent = "Click to reveal";

            if(hiraganaButton.classList.contains('clicked')){   
                blockquote.textContent = kanaList[ind][0];
                answer.textContent = kanaList[ind][2];
            }
            else if(katakanaButton.classList.contains('clicked')){   
                blockquote.textContent = kanaList[ind][1];
                answer.textContent = kanaList[ind][2];
            }
            else{
                blockquote.textContent = kanaList[ind][2];
                answer.textContent = kanaList[ind][0] + " " + kanaList[ind][1];
            }

            void answer.offsetWidth; 

            answer.style.transition = '';

            blockquote.classList.remove('fade-out');
            answer.classList.remove('fade-out');
            instructionText.classList.remove('fade-out');
        }, 100);
    }
})

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault(); 
        main.click();
    }
    if (e.key.toLowerCase() === 'h') {
        hiraganaButton.click();
    }
    if (e.key.toLowerCase() === 'k') {
        katakanaButton.click();
    }
    if (e.key.toLowerCase() === 'r') {
        romajiButton.click();
    }
});