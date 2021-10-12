let expression = "hello"

function firstApi (genNum = 7) {
    

    

    
    genNum = genNum.toString();
    $.get(`https://api.jikan.moe/v3/genre/anime/${genNum}/1`).promise()
    .done(data => {
        
        let dataArray = data['anime'];
        // console.log(dataArray);
        for (dataArrayIndex = 0; dataArrayIndex < 10; dataArrayIndex ++){
            animeRecommendationTitle = dataArray[dataArrayIndex]['title'];
            // console.log(animeRecommendationTitle);
            // console.log(typeof animeRecommendationTitle);
            animeRecommendationImageURL = dataArray[dataArrayIndex]['image_url'];
            // console.log(animeRecommendationImageURL);
            animeRecommendationSynopsis = dataArray[dataArrayIndex]['synopsis'];
            // console.log(animeRecommendationSynopsis);
            
            $.get(`https://animechan.vercel.app/api/quotes/anime?title=${animeRecommendationTitle.toLowerCase()}`)
            .done(response => {
                // console.log(response);
                console.log(animeRecommendationTitle);
            })
            
            
            }
    })
    
    

    }
    


