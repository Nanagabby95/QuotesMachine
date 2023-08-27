const quotes=[
    {
        quote: "The Ressimist Sees Difficulty in Every Opportunity. The Optimmist Sees Opportunity in Every Difficulty",
        author: "~Winstin Churchill",
    },
    {
        quote: "If You Are Working on Something That You Really Care About, You Don't Have To Be Pushed. The Vision Pulls You",
        author: "~Steve Jobs"       
    },
    {
        quote:"God save me from my friends. I can protect myself from my enemies.",
        author: "~Claude Lious Hector de Villars"
    },
    {
        quote: "People who are crazy enough to think they can change the world, are the ones who do",
        author:"~Rob Siltanen"
    },
    {
        quote:"Failure will never overtake me if my determination to succed is strong enough",
        author:"~Og Mandino"
    },
    {
        quote:"Don't let yesterday take up too much of today",
        author:"~Will Rogers"
    }
]

const btn=document.getElementById("generatequote");
const quote=document.getElementById("quote");
const author=document.getElementById("author");

btn.addEventListener("click",()=>{
    let random=Math.floor(Math.random()*quotes.length);
    // console.log(quotes.length);
    console.log(random);
    let generate=quotes[random];
    quote.innerHTML=generate.quote;
    author.innerHTML=generate.author;
});