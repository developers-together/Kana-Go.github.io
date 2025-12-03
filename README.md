<div align="center">

# 🇯🇵 Kana Go

**Master Japanese Hiragana, Katakana, and Romaji with a simple, interactive flashcard app.**

![Last Commit](https://img.shields.io/github/last-commit/developers-together/Kana-Go.github.io?style=flat-square&color=5c6bc0)
<img src="https://img.shields.io/badge/Status-Active-4caf50?style=flat-square" />
![Stars](https://img.shields.io/github/stars/developers-together/Kana-Go.github.io?style=social)


<h3>
  <a href="https://developers-together.github.io/Kana-Go.github.io/">🚀 Try the Live Demo</a>
  <span> | </span>
  <a href="https://youtu.be/x3q9771LkKM?si=utNBwbvaOiRXGR00">🎥 Watch Video Demo</a>
</h3>

</div>

---

## 📖 About

**Kana Go** is a minimalist web application designed to help users practice Japanese characters. Whether you are just starting with Hiragana or testing your memory on Katakana, Kana Go provides a distraction-free environment to test your recognition skills.

## 🖼️ Preview

<p align="center">
  <img width="80%" src="https://github.com/user-attachments/assets/3b93be6b-0aba-4369-be06-88292f64c57a" alt="Kana Go Preview">
</p>

## ✨ Features

* **Three Writing Systems:** Easily toggle between **Hiragana**, **Katakana**, and **Romaji** modes using the control buttons.
* **Interactive Flashcards:** * **Click once** to reveal the answer.
    * **Click again** to generate a new random character.
* **Smart Randomization:** Draws characters from a comprehensive library of standard Japanese Kana (including Dakuten).
* **Responsive Design:** A clean, aesthetic UI that works beautifully on desktop and mobile.
* **Dark-Themed UI:** Easy on the eyes for late-night study sessions.

## 🛠️ Tech Stack

* **HTML5:** Semantic structure.
* **CSS3:** Flexbox layouts, CSS variables for theming, and smooth transitions.
* **JavaScript (ES6+):** modular logic handling state and DOM manipulation.
* **Font Awesome / Google Fonts:** *Comfortaa* & *Comic Neue* for a friendly aesthetic.

## 🚀 Getting Started

To run this project locally, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/developers-together/Kana-Go.github.io.git](https://github.com/developers-together/Kana-Go.github.io.git)
    ```

2.  **Navigate to the project folder:**
    ```bash
    cd Kana-Go.github.io
    ```

3.  **Open the app:**
    Simply open the `index.html` file in your preferred web browser. No server or installation is required!

## 📂 File Structure

```text
Kana-Go.github.io/
├── index.html       # Main application structure
├── style.css        # Styling, animations, and responsive layout
├── script.js        # Core logic for interaction and state management
├── jpChars.js       # Data module containing Kana arrays
├── github.png       # Icons used in the header
└── README.md        # Project documentation
```

## 🧠 How It Works

* The app loads a module jpChars.js which contains a 2D array of characters.

* State Management: The app tracks the current mode (Hiragana/Katakana) via class toggles.

* Interaction: An event listener on the main card area checks if the answer is currently shown. If hidden, it reveals the answer. If shown, it hides the answer and picks a new index from the array.

## ☕ Support
If you find this project helpful and want to support the developers, you can buy us a coffee! <a href="https://www.buymeacoffee.com/adhamhaithameid" target="_blank"> <img src="https://github.com/user-attachments/assets/3b06dca7-9cbe-4e5d-bdc0-4c5b65f24226" alt="Buy Me A Coffee" style="height: 30px !important;width: 108px !important;" > </a>


## 👥 Credits
* This project is developed and maintained by: [Adham Haitham](https://github.com/adhamhaithameid) & [Abdallah El-Rouby](https://github.com/Rouby-py)
* Design Resources: Fonts provided by Google Fonts.

<div align="center">
<small>Made with ❤️ for Japanese Learners</small>
</div>
