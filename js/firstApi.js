
function firstApi (genreNumber = 7) {
    let animeRecommendationObjectList = [];
    
    genreNumber = genreNumber.toString();

    $.get(`https://api.jikan.moe/v3/genre/anime/${genreNumber}/1`)
    .done(data => {
        
        let dataArray = data['anime'];
        // console.log(dataArray);
        for (dataArrayIndex = 0; dataArrayIndex < 3; dataArrayIndex ++){
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
            console.log(animeSearches);
            animeSearches = JSON.parse(animeSearches);
            
            // if local storage does not hold the quote
            if (!animeSearches[animeRecommendationTitle]) {
                $.get(`https://animechan.vercel.app/api/quotes/anime?title=${animeRecommendationTitle.toLowerCase()}`)
                .done(response => {
                    console.log("searching api");
                    animeSearches[animeRecommendationTitle] = response[0]['quote'];
                    localStorage['animeSearches'] = JSON.stringify(animeSearches);
                    animeRecommendationQuote = animeSearches[animeRecommendationTitle];
                    
                    let animeRecommendationObject = {title: animeRecommendationTitle, image: animeRecommendationImageURL, synopsis: animeRecommendationSynopsis, quote: animeRecommendationQuote};
                    animeRecommendationObjectList.push(animeRecommendationObject);
                    
                })
            }// if local storage does hold the quote
            else{
                console.log("using local storage");
                animeRecommendationQuote = animeSearches[animeRecommendationTitle];
                let animeRecommendationObject = {title: animeRecommendationTitle, image: animeRecommendationImageURL, synopsis: animeRecommendationSynopsis, quote: animeRecommendationQuote}
                animeRecommendationObjectList.push(animeRecommendationObject)
            }
            
            }
    })
    
    return animeRecommendationObjectList

    }
