import {kanaList} from './jpChars.js';

let hiraganaButton = document.getElementById("hiragana");
let katakanaButton = document.getElementById("katakana");
let romajiButton = document.getElementById("romaji");
const blockquote = document.getElementById('letter');
const answer = document.getElementById('answer');
let main = document.getElementById('main');

let ind = Math.floor(Math.random() * kanaList.length);

document.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem('kanaMode');
    
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
    }
    hiraganaButton.classList.remove('clicked');
    katakanaButton.classList.remove('clicked');
})

main.addEventListener("click", () => {
    if(!answer.classList.contains('shown')){
        answer.classList.add('shown');
    }
    else{
        answer.classList.remove('shown');
        ind = Math.floor(Math.random() * kanaList.length);
        
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