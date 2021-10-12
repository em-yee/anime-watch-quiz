let expression = "hello"

    $(() => {

function firstApi (genNum = 7) {
    
    genNum = genNum.toString();
    $.get(`https://api.jikan.moe/v3/genre/anime/${genNum}/1`).promise()
    .done(data => {
        console.log(data);
        // let dataArray = data['mal_url']['name'];
        // console.log(dataArray);
        // return dataArray;
    })
    
    }
    
    firstApi()
    })

