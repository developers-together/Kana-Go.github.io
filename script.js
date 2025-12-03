import {kanaList} from './jpChars.js';
let hiraganaButton = document.getElementById("hiragana");
let katakanaButton = document.getElementById("katakana");
let romajiButton = document.getElementById("romaji");

const blockquote = document.getElementById('letter');

const answer = document.getElementById('answer');

let ind = Math.floor(Math.random() * kanaList.length);
document.addEventListener("DOMContentLoaded", () => {
    blockquote.textContent = kanaList[ind][0];
    answer.textContent=kanaList[ind][2];
    hiraganaButton.classList.toggle('clicked');
});

hiraganaButton.addEventListener("click", () => {
    if(!hiraganaButton.classList.contains('clicked')){
        answer.textContent=kanaList[ind][2];
        answer.classList.remove('shown');
        hiraganaButton.classList.toggle('clicked');
        blockquote.textContent = kanaList[ind][0];
    }
    katakanaButton.classList.remove('clicked');
    romajiButton.classList.remove('clicked');
})
katakanaButton.addEventListener("click", () => {
    if(!katakanaButton.classList.contains('clicked')){
        answer.textContent=kanaList[ind][2];
        answer.classList.remove('shown');
        katakanaButton.classList.toggle('clicked');
        blockquote.textContent = kanaList[ind][1];
    }
    hiraganaButton.classList.remove('clicked');
    romajiButton.classList.remove('clicked');
})

romajiButton.addEventListener("click", () => {
    if(!romajiButton.classList.contains('clicked')){
        answer.textContent=kanaList[ind][0]+" "+kanaList[ind][1];
        answer.classList.remove('shown');
        romajiButton.classList.toggle('clicked');
        blockquote.textContent = kanaList[ind][2];
    }
    hiraganaButton.classList.remove('clicked');
    katakanaButton.classList.remove('clicked');
})

let main = document.getElementById('main');
main.addEventListener("click", () => {
    if(!answer.classList.contains('shown')){
        answer.classList.add('shown');
    }
    else{
        answer.classList.remove('shown');
        ind = Math.floor(Math.random() * kanaList.length);
        if(hiraganaButton.classList.contains('clicked')){  
            blockquote.textContent = kanaList[ind][0];
            answer.textContent=kanaList[ind][2];
        }
        else if(katakanaButton.classList.contains('clicked')){  
            blockquote.textContent = kanaList[ind][1];
            answer.textContent=kanaList[ind][2];
        }
        else{
            blockquote.textContent = kanaList[ind][2];
            answer.textContent=kanaList[ind][0]+" "+kanaList[ind][1];
        }
    }
})
