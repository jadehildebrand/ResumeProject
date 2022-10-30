console.log(`Hey guys! Its js!!`);

let RandomQuote = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",

  "The way to get started is to quit talking and begin doing.",

  "Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma, which is living with the results of other peoples thinking.",

  "If life were predictable it would cease to be life, and be without flavor.",

  "If you look at what you have in life, you'll always have more. If you look at what you dont have in life, you'll never have enough. ",

  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",

  "Life is what happens when you're busy making other plans.",

  "Spread love everywhere you go. Let no one ever come to you without leaving happier.",

  "When you reach the end of your rope, tie a knot in it and hang on.",

  "Always remember that you are absolutely unique. Just like everyone else.",
];

//event listener
btn.addEventListener("click", getQuote);


function getQuote() {
  var RandoNumber = Math.floor(Math.random() * RandomQuote.length);
  document.getElementById("quoteDisplay").innerHTML = RandomQuote[RandoNumber];
}


/*let RandomGardenPic= [
'garden1'

]
function getPic(){
  randomindex = Math.floor(Math.random()*RandomGardenPic.length);
  selectedimg = RandomGardenPic[randomindex];
  document.getElementById('garden').src = `./media/${selectedimg}`;
}*/