function firstApi (genreNumber, cardNumber) {
    const animeRecommendationObjectList = [];
    
    genreNumberString = genreNumber.toString();
    
    // first api fetch
    fetch(`https://api.jikan.moe/v3/genre/anime/${genreNumberString}/1`)
    .then((response) => {
        // waiting for response before returning json data
        if (response.status >= 200 && response.status <= 299) {
        return response.json();
        } 
        else {
        throw Error(response.statusText);
        }
    })
    // choosing list out of json response
    .then((jsonResponse) => {
        let dataArray = jsonResponse['anime']
        return dataArray
        
    })
    .then((dataArray) =>{
        // for loop running through data for each card and calling createCard function at end
        for (let dataArrayIndex = 0; dataArrayIndex <= cardNumber; dataArrayIndex ++){
        console.log(`running card number ${dataArrayIndex}`);
        
            
        let animeRecommendationTitle = dataArray[dataArrayIndex].title;
        
        let animeRecommendationImageURL = dataArray[dataArrayIndex]['image_url'];
        
        let animeRecommendationSynopsis = dataArray[dataArrayIndex]['synopsis'];
        
        

        let animeRecommendationQuote = "";
        
        // setting animeSearches object to the local storage if it exists
        let animeSearches = localStorage['animeSearches'] || "{}";
        
        animeSearches = JSON.parse(animeSearches);
        
        
        
        // if local storage does not hold the quote
        if (!animeSearches[animeRecommendationTitle]) {
            fetch(`https://animechan.vercel.app/api/quotes/anime?title=${animeRecommendationTitle.toLowerCase()}`)
            .then(response => {
                if(response.status >= 200 && response.status <= 299){
                    console.log("searching 2nd api");
                    return response.json()
                }
                else{
                    console.log('error caught while searching 2nd api');
                    throw Error(response.statusText)
                }
                
            })
            .then((jsonResponse) => {
                
                
                animeSearches[animeRecommendationTitle] = jsonResponse[0]['quote'];
                
                localStorage['animeSearches'] = JSON.stringify(animeSearches);
                animeRecommendationQuote = animeSearches[animeRecommendationTitle];
                let animeRecommendationObject = {title: animeRecommendationTitle, image: animeRecommendationImageURL, synopsis: animeRecommendationSynopsis, quote: animeRecommendationQuote};
                
                animeRecommendationObjectList.push(animeRecommendationObject);
                if (dataArrayIndex === cardNumber){
                    console.log('Result in firstApi.js after api return');
                    console.log(animeRecommendationObjectList);
                    createCards(animeRecommendationObjectList);
                }
            })
            // no quote for title in 2nd api so this chooses a random quote out of an array instead
            .catch((error) => {
                
                console.log(`could not find title in database: ${error}`);
                
                let randomQuoteArray = ["There is no such thing as truth in this world. That is our reality. Anyone can become a God or a Devil. All it takes is for someone to claim that to be the truth.", "It is pointless to question who someone really is. All you can do is believe and accept. Because the way you perceive someone is their true identity.", "I told you before, Komamura. The only paths that I see with these eyes are the ones not dyed with blood. Those paths are the paths to justice. So whichever path I choose...Is justice.", "Plainly speaking war is nothing other than \"wanting to impose your beliefs on your opponent.\" It only happens for that reason. You don't have any exception to that rule.", "The fake is of far greater value. In its deliberate attempt to be real, it's more real than the real thing.", "A faint clap of thunder, clouded skies; perhaps rain comes. If so, will you stay here", "Fake people have an image to maintain. Real people just don't care.", "There are only two times when a man can cry in public: when he loses his wallet and when his mother dies. And even if you cry in private, there's a severe restriction. Shed tears for others. The only thing you should be shedding for yourself is sweat. Remember that.", "It's a mistake to choose your path based upon the sins that you carry. We don't choose our path based on the sins that we carry, but we must bear our sins on the path we choose.", "The fake is of far greater value. In its deliberate attempt to be real, it's more real than the real thing.", "Greed may not be good, but it's not so bad either. You humans think greed is just for money or power, but everyone wants something they can't have.", "It's a mistake to choose your path based upon the sins that you carry. We don't choose our path based on the sins that we carry, but we must bear our sins on the path we choose.", "Oppression. Rule by fear. Dictatorships. It's a strange thing. Throughout history, for some reason, the lives of such rulers have always ended in the same way: Assassination by someone who isn't even part of a combat unit.", "Those aren't tears of sadness. They're tears of happiness, right? Let us make haste, lest the wind ceases.", "Because my time is limited, I don't have any time to waste hesitating. That is why I can walk straight ahead. That is why I never stop."]
                let randomQuoteIndex = Math.floor(Math.random()*(randomQuoteArray.length));
                animeSearches[animeRecommendationTitle] = randomQuoteArray[randomQuoteIndex];
                
                localStorage['animeSearches'] = JSON.stringify(animeSearches);
                animeRecommendationQuote = animeSearches[animeRecommendationTitle];
                
                let animeRecommendationObject = {title: animeRecommendationTitle, image: animeRecommendationImageURL, synopsis: animeRecommendationSynopsis, quote: animeRecommendationQuote};
                console.log(animeRecommendationObject);
                animeRecommendationObjectList.push(animeRecommendationObject);
                if (dataArrayIndex === cardNumber){
                    console.log('Result in firstApi.js after catch error');
                    createCards(animeRecommendationObjectList);
                }
                // })
            })
        }
        // if local storage does hold the quote this searches local storage
        else{
            console.log("using local storage");
            
            animeRecommendationQuote = animeSearches[animeRecommendationTitle];
            let animeRecommendationObject = {title: animeRecommendationTitle, image: animeRecommendationImageURL, synopsis: animeRecommendationSynopsis, quote: animeRecommendationQuote}
            
            animeRecommendationObjectList.push(animeRecommendationObject)
            if (dataArrayIndex === cardNumber){
                console.log('Result in firstApi.js after local storage');
                
                createCards(animeRecommendationObjectList);
            }
        }
        
        }
        
    }
    
    )
}
