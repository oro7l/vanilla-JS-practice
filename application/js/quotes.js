const quotes = [
    {
        quote : "1",
        author : "Disney",
    },
    {
        quote : "2",
        author : "A",
    },
    {
        quote : "3",
        author : "B",
    },
    {
        quote : "4",
        author : "D",
    },
    {
        quote : "5",
        author : "E",
    },

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;