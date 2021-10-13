
function firstApi (genreNumber, cardNumber = 6) {
    const animeRecommendationObjectList = [];
    
    genreNumber = genreNumber.toString();

    $.get(`https://api.jikan.moe/v3/genre/anime/${genreNumber}/1`)
    .done(data => {
        
        let dataArray = data['anime'];
        // console.log(dataArray);
        for (dataArrayIndex = 0; dataArrayIndex <= cardNumber; dataArrayIndex ++){
            let animeRecommendationTitle = dataArray[dataArrayIndex]['title'];
            // console.log(animeRecommendationTitle);
            // console.log(typeof animeRecommendationTitle);
            let animeRecommendationImageURL = dataArray[dataArrayIndex]['image_url'];
            // console.log(animeRecommendationImageURL);
            let animeRecommendationSynopsis = dataArray[dataArrayIndex]['synopsis'];
            // console.log(animeRecommendationSynopsis);
            

            let animeRecommendationQuote = "";
            
            // setting animeSearches object to the local storage if it exists
            let animeSearches = localStorage['animeSearches'] || "{}";
            // console.log(`line 26: ${animeSearches}`);
            // console.log(`line 27: ${animeRecommendationTitle}`);
            animeSearches = JSON.parse(animeSearches);
            // console.log(animeSearches);
            
            // if local storage does not hold the quote
            if (!animeSearches[animeRecommendationTitle]) {
                $.get(`https://animechan.vercel.app/api/quotes/anime?title=${animeRecommendationTitle.toLowerCase()}`)
                .done(response => {
                    console.log("searching api");
                    // console.log(`line 35: ${animeRecommendationTitle}`);
                    animeSearches[animeRecommendationTitle] = response[0]['quote'];
                    // console.log(object);
                    localStorage['animeSearches'] = JSON.stringify(animeSearches);
                    animeRecommendationQuote = animeSearches[animeRecommendationTitle];
                    
                    let animeRecommendationObject = {title: animeRecommendationTitle, image: animeRecommendationImageURL, synopsis: animeRecommendationSynopsis, quote: animeRecommendationQuote};
                    animeRecommendationObjectList.push(animeRecommendationObject);
                    if (dataArrayIndex === cardNumber){
                        console.log('Result in firstApi.js');
                        console.log(animeRecommendationObjectList);
                        createCards(animeRecommendationObjectList);
                    }
                    
                })
            }// if local storage does hold the quote
            else{
                console.log("using local storage");
                // console.log(`line 48: ${animeRecommendationTitle}`);
                // console.log(`line 50: ${animeSearches[animeRecommendationTitle]}`);
                animeRecommendationQuote = animeSearches[animeRecommendationTitle];
                let animeRecommendationObject = {title: animeRecommendationTitle, image: animeRecommendationImageURL, synopsis: animeRecommendationSynopsis, quote: animeRecommendationQuote}
                // console.log(animeRecommendationObject);
                animeRecommendationObjectList.push(animeRecommendationObject)
                if (dataArrayIndex === cardNumber){
                    console.log('Result in firstApi.js');
                    console.log(animeRecommendationObjectList);
                    createCards(animeRecommendationObjectList);
                }
            }
            
            }
    })
    
    

    }

