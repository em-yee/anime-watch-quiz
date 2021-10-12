let expression = "hello"

function firstApi (genNum = 7) {
    

    

    
    genNum = genNum.toString();
    $.get(`https://api.jikan.moe/v3/genre/anime/${genNum}/1`).promise()
    .done(data => {
        
        let dataArray = data['anime'];
        // console.log(dataArray);
        for (animeRecommendation of dataArray){
            // console.log(animeRecommendation);
            animeRecommendationTitle = animeRecommendation['title'];
            // console.log(animeRecommendationTitle);
            animeRecommendationImageURL = animeRecommendation['image_url'];
            // console.log(animeRecommendationImageURL);
            animeRecommendationSynopsis = animeRecommendation['synopsis'];
            // console.log(animeRecommendationSynopsis);
            
            $.get(`https://animechan.vercel.app/api/quotes/anime?title=${animeRecommendationTitle.toLowerCase()}`)
            .done(response => {
                console.log(response);
            })
            
            
            }
    })
    
    

    }
    


