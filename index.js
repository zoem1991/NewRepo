const quotes = ["Love is a blessing!", "Live, laugh. Love", "Life is short, so live it to the fullest!", "Do what you love, and love what you do!"];

function generate_quote (arr) {
    let randomNum = Math.floor(Math.random() * arr.length)
    return arr[randomNum]
}; 

const quoteLink = document.getElementById("button"); 
const quoteDisplay = document.getElementById("quote");

quoteLink.addEventListener("click", function(){
    const randomQuote = generate_quote(quotes); 
    quoteDisplay.textContent = randomQuote; 
}); 
