const randomQuoteArray = ["There is no such thing as truth in this world. That is our reality. Anyone can become a God or a Devil. All it takes is for someone to claim that to be the truth.", "It is pointless to question who someone really is. All you can do is believe and accept. Because the way you perceive someone is their true identity.", "I told you before, Komamura. The only paths that I see with these eyes are the ones not dyed with blood. Those paths are the paths to justice. So whichever path I choose...Is justice.", "Plainly speaking war is nothing other than \"wanting to impose your beliefs on your opponent.\" It only happens for that reason. You don't have any exception to that rule.", "The fake is of far greater value. In its deliberate attempt to be real, it's more real than the real thing.", "A faint clap of thunder, clouded skies; perhaps rain comes. If so, will you stay here", "Fake people have an image to maintain. Real people just don't care.", "There are only two times when a man can cry in public: when he loses his wallet and when his mother dies. And even if you cry in private, there's a severe restriction. Shed tears for others. The only thing you should be shedding for yourself is sweat. Remember that.", "It's a mistake to choose your path based upon the sins that you carry. We don't choose our path based on the sins that we carry, but we must bear our sins on the path we choose.", "The fake is of far greater value. In its deliberate attempt to be real, it's more real than the real thing.", "Greed may not be good, but it’s not so bad either. You humans think greed is just for money or power, but everyone wants something they can’t have.", "It's a mistake to choose your path based upon the sins that you carry. We don't choose our path based on the sins that we carry, but we must bear our sins on the path we choose.", "Oppression. Rule by fear. Dictatorships. It's a strange thing. Throughout history, for some reason, the lives of such rulers have always ended in the same way: Assassination by someone who isn't even part of a combat unit.", "Those aren’t tears of sadness. They’re tears of happiness, right? Let us make haste, lest the wind ceases.", "Because my time is limited, I don't have any time to waste hesitating. That is why I can walk straight ahead. That is why I never stop.", "We finally became friends. I've said everything I wanted to say. Now we know everything about each other. Though, from the moment we become friends, we'll never speak to each other again.", "Life eventually ends. But that doesn't mean that the fact that we met, or the time we spent together will disappear.", "The moment you say a word of parting, you've already parted. So long as you and I are both somewhere in this world, we haven’t parted. So long as you don’t say it, you haven’t parted.", "In our society, letting others find out that you're a nice person is a very risky move. It's extremely likely that someone would take advantage of that."]

async function firstApi(genreNumber, numberOfCardsToDisplay) {
    // fetching the first api, parsing the response, and then selecting the array inside of the object
    const rawResponse = await fetch(`https://api.jikan.moe/v3/genre/anime/${genreNumber}/1`);
    const parsedResponse = await rawResponse.json();
    const animeListResponse = parsedResponse.anime;
    const animeList = [];
    let index = 0;
    // looping through each object in the response from the first api
    for(const item of animeListResponse) {
        index++;
        if(index > numberOfCardsToDisplay) {
            break;
        }
        // checking local storage and setting animeSearches to either the stored JSON string (local storage is always stored in JSON format so animeSearches is a string if it exists) or {} in order to initialize the animeSearches object
        let animeSearches = localStorage['animeSearches'] || "{}";
        console.log('typeof animeSearches', typeof animeSearches);
        // parsing animeSearches converts the JSON string into an object
        animeSearches = JSON.parse(animeSearches);
        // console.log('1st animeSearches', animeSearches);
        // setting storedQuote to the quote in animeSearches if the quote exists or null if not
        const storedQuote = animeSearches[item.title] || null;
        // declaring quoteResponse and setting it to undefined in order to scope it to be used in either event of a stored quote or not being present
        let quoteResponse;
        // console.log('quoteResponse', quoteResponse);
        // if there is no stored value then the 2nd api will be called
        if (!storedQuote) {
            // using try/catch because of the errors returned from the 2nd api
            try {
                console.log(item.title);
                const _quoteResponse = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${item.title.toLowerCase()}`);
                quoteResponse = await _quoteResponse.json();
                // console.log(quoteResponse);
                // storing 2nd api quote to stored
                console.log('using 2nd api to set quote');
                animeSearches[`${item.title}`] = quoteResponse;
                console.log('assigning quote to animeSearches', animeSearches);
                localStorage.setItem('animeSearches', JSON.stringify(animeSearches));
            } 
            // this is set to handle the error in case the api call doesnt return anything usefull (can be 404 if the title is not in there database or 429 if theres been too many requests)
            catch(errorMessage) {
                console.log('error', errorMessage);
            }
        // if there is a stored quote then the quote response is the stored quote
        } else {
            // console.log("stored quote type", typeof storedQuote);
            if (typeof storedQuote != "object"){
                quoteResponse = JSON.parse(storedQuote);
            }
            else {
                quoteResponse = storedQuote
            }
            console.log('quoteResponse if stored quote', quoteResponse);
        }
        // setting quote to the quote response and progressively looking deeper into the quote response, because the quoteResponse is not always the same data type b/c it could be just a string or an object or null
        let quote = quoteResponse && quoteResponse[0] && quoteResponse[0]['quote'];
        // if the quote is null choosing a random quote from a default list at the top of the page
        if(!quote) {
            const randomQuoteIndex = Math.floor(Math.random()*(randomQuoteArray.length));
            quote = randomQuoteArray[randomQuoteIndex];
            localStorage.setItem(item.title, JSON.stringify(quote));
        }
        // creating object and filling with data required for cards
        let animeRecommendation = {
            title: item.title, 
            image: item.image_url, 
            synopsis: item.synopsis, 
            quote: quote
        };
        // pushing animeRecommendation object to the array which will be used to call the createCards function once it is complete
        animeList.push(animeRecommendation);
    }
    // shuffling the cards array so the result differ each time you click the button
    for (x = 0; x < animeList.length; x++){
        randomCardNum = Math.floor(Math.random() * animeList.length)
        let givenX = animeList[x];
        animeList[x] = animeList[randomCardNum];
        animeList[randomCardNum] = givenX;
    }
    // sending results to print the cards
    createCards(animeList);
}
