# IOT Ready Assignment Solution

This is my solution of the IOT Ready Assignment as part of the Internship application process.

## Table of Contents

- [The Assignment](#the-assignment)
- [The Solution](#the-solution)
  - [Built with](#built-with)
  - [Process](#process)
  - [URL](#url)

## The Assignment

Create a simple React app where:
- The user can upload an audio file (e.g. mp3)
- Store the audio file in the browser's IndexedDB (e.g. using DexieJS)
- When page is reloaded, load the audio file from IndexedDB and render using built-in HTML audio player so user can play the file.

## The Solution

### Built With

- ReactJS
- CSS
- Dexie JS for React
- IndexedDB

### Process

- First, I started researching about DexieJS and IndexedDB as they were relatively new technologies for me.
- Then, I had to figure the most optimal way of uploading and then fetching audio through IndexedDB. The answer was to convert the audio file to a Base64 encoded string.
- Developed a simple HTML skeleton and ensured proper working of the DexieJS and the audio file.
- Styled the HTML page using Mobile First workflow for writing the CSS.
- Hosted the web page on Github pages.

### URL

- Live Site URL: [GitHub Pages](https://anurag-saraswat-01.github.io/IOT-Ready-Assignment/)