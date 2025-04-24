"use strict";

//global variables for random quote generator
let quoteNum = 0;

const quotes = ["Marriage is an adventure, and true love is rare, and it's the only thing that gives life real meaning.", 
"A successful marriage requires falling in love many times, always with the same person.",
"When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.",
"A great marriage is not when the ‘perfect couple’ comes together. It is when an imperfect couple learns to enjoy their differences.",
"A good marriage is one which allows for change and growth in the individuals and in the way they express their love.",
"The greatest marriages are built on teamwork. A mutual respect, a healthy dose of admiration, and a never-ending portion of love and grace.",
"There is no more lovely, friendly, and charming relationship, communion, or company than a good marriage."
];


$(document).ready(() => {

        //function to display new quote
        const displayQuote = () => {

            if(quoteNum >= (quotes.length-1))
            {
                quoteNum = 0;
            }
            else
            {
                quoteNum++;
            }
        
            $("#quote").text("\""+quotes[quoteNum]+"\"");

        };
        
        //set interval timer to display new quote every 3rd second. 
        setInterval(displayQuote,2000);

        //Call to the jQuery plugin bxSlider function
        $("#slider").bxSlider({
            auto: true,
            autoControls: true,
            captions: true,
            minSlides: 2,
            maxSlides: 2,
            slideWidth: 600,
            slideMargin: 10
        });
     

        //attach event handler for subscribe btn click
        $("#btn_subs").click( evt => {

                $("#btn_subs").toggleClass("hide",true);
                $("#btn_unsub").toggleClass("hide",false);
                $("#p_thnks").toggleClass("hide",false);
                       
        });

        //attach event handler for unsubscribe btn click
        $("#btn_unsub").click( evt => {

                $("#btn_subs").toggleClass("hide",false);
                $("#btn_unsub").toggleClass("hide",true);
                $("#p_thnks").toggleClass("hide",true);
                       
        });
});