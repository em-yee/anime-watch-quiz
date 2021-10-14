let christineButton = document.querySelector('#christine')
let samButton = document.querySelector('#sam')
let emilyButton = document.querySelector('#emily')
let mercerButton = document.querySelector('#mercer')


christineButton.addEventListener('click', () => {
    let christineFavoriteAnimeObjectList = [];

    let christineAnimeRecommendationObject1 = {
        title: "One Piece", 
        image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14", 
        synopsis: "Gol D. Roger was known as the \"Pirate King,\" the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.\r\n\r\nEnter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy's reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes", 
        quote: "This thing called Justice… changes its shape depending on where you stand."};

    let christineAnimeRecommendationObject2 = {
        title: "Bleach", 
        image: "https://cdn.myanimelist.net/images/anime/3/40451.jpg?s=3aa217eced217b3b4223af21c30fe2ed", 
        synopsis: "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant. To save his family, Ichigo accepts Rukia's offer of taking her powers and becomes a Soul Reaper as a result.\r\n\r\nHowever, as Rukia is unable to regain her powers, Ichigo is given the daunting task of hunting down the Hollows that plague their town. However, he is not alone in his fight, as he is later joined by his friends—classmates Orihime Inoue, Yasutora Sado, and Uryuu Ishida—who each have their own unique abilities. As Ichigo and his comrades get used to their new duties and support each other on and off the battlefield, the young Soul Reaper soon learns that the Hollows are not the only real threat to the human world.", 
        quote: "Revenge is just the path you took to escape your suffering."};

    let christineAnimeRecommendationObject3 = {
        title: "Naruto", 
        image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6", 
        synopsis: "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.\r\n\r\nNow, Naruto is a hyperactive and knuckle-headed ninja still living in Konohagakure. Shunned because of the Kyuubi inside him, Naruto struggles to find his place in the village, while his burning desire to become the Hokage of Konohagakure leads him not only to some great new friends, but also some deadly foes.", 
        quote: "When a man learns to love, he must bear the risk of hatred."};

    christineFavoriteAnimeObjectList.push(christineAnimeRecommendationObject1);
    christineFavoriteAnimeObjectList.push(christineAnimeRecommendationObject2);
    christineFavoriteAnimeObjectList.push(christineAnimeRecommendationObject3);
    createCards(christineFavoriteAnimeObjectList);
})

samButton.addEventListener('click', () => {
    let samFavoriteAnimeObjectList = [];

    let samAnimeRecommendationObject1 = 
        {title: "Dragon Ball", 
        image: "https://cdn.myanimelist.net/images/anime/1887/92364.jpg?s=9710b6fb426a62c9ca2deb991f7abfb0", 
        synopsis: "Five years after winning the World Martial Arts tournament, Gokuu is now living a peaceful life with his wife and son. This changes, however, with the arrival of a mysterious enemy named Raditz who presents himself as Gokuu's long-lost brother. He reveals that Gokuu is a warrior from the once powerful but now virtually extinct Saiyan race, whose homeworld was completely annihilated. When he was sent to Earth as a baby, Gokuu's sole purpose was to conquer and destroy the planet; but after suffering amnesia from a head injury, his violent and savage nature changed, and instead was raised as a kind and well-mannered boy, now fighting to protect others.\r\n\r\nWith his failed attempt at forcibly recruiting Gokuu as an ally, Raditz warns Gokuu's friends of a new threat that's rapidly approaching Earth—one that could plunge Earth into an intergalactic conflict and cause the heavens themselves to shake. A war will be fought over the seven mystical dragon balls, and only the strongest will survive in Dragon Ball Z.", 
        quote: "I would rather be a brainless monkey than a heartless monster."};

        let samAnimeRecommendationObject2 = 
        {title: "Claymore", 
        image: "https://cdn.myanimelist.net/images/anime/3/21834.jpg?s=8e6b13bd5e49f2cd4d2f9b7ee1ce2f8c", 
        synopsis: "When a shapeshifting demon with a thirst for human flesh, known as \"youma,\" arrives in Raki's village, a lone woman with silver eyes walks into town with only a sword upon her back. She is a \"Claymore,\" a being manufactured as half-human and half-youma, for the express purpose of exterminating these monsters. After Raki's family is killed, the Claymore saves his life, but he is subsequently banished from his home. With nowhere else to go, Raki finds the Claymore, known as Clare, and decides to follow her on her journeys. As the pair travel from town to town, defeating youma along the way, more about Clare's organization and her fellow warriors comes to light. With every town cleansed and every demon destroyed, they come closer to the youma on which Clare has sought vengeance ever since she chose to become a Claymore.", 
        quote: "Don’t be so quick to throw away your life. No matter how disgraceful or embarrassing it may be, you need to keep struggling to find your way out until the very end."};

        let samAnimeRecommendationObject3 = 
        {title: "Full Metal Alchemist: Brotherhood", 
        image: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f", 
        synopsis: "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.\r\n\r\nThe brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing \"automail,\" a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.\r\n\r\nAs Edward becomes an infamous alchemist and gains the nickname \"Fullmetal,\" the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.", 
        quote: "War does not determine who is right - only who is left."};

        samFavoriteAnimeObjectList.push(samAnimeRecommendationObject1);
        samFavoriteAnimeObjectList.push(samAnimeRecommendationObject2);
        samFavoriteAnimeObjectList.push(samAnimeRecommendationObject3);
    createCards(samFavoriteAnimeObjectList);
})

emilyButton.addEventListener('click', () => {
    let emilyFavoriteAnimeObjectList = [];
    let emilyAnimeRecommendationObject1 = 
        {title: "Demon Slayer", 
        image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg", 
        synopsis: "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night.\r\n\r\nWhen he finally arrives back home the next day, he is met with a horrifying sight—his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling. Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sister's humanity.", 
        quote: "No matter how many people you may lose, you have no choice but to go on living -- no matter how devastating the blows might be."};

        let emilyAnimeRecommendationObject2 = 
        {title: "Ouran High School Host Club", 
        image: "https://cdn.myanimelist.net/images/anime/2/71992.jpg", 
        synopsis: "Haruhi Fujioka is a bright scholarship candidate with no rank or title to speak of—a rare species at Ouran Academy, an elite school for students of high pedigree. When she opens the door to Music Room #3 hoping to find a quiet place to study, Haruhi unexpectedly stumbles upon the Host Club. Led by the princely Tamaki Suou, the club—whose other members include the \"Shadow King\" Kyouya Ootori; the mischievous Hitachiin twins, Kaoru and Hikaru; the childlike Mitsukuni Haninozuka, also known as \"Honey\"; and his strong protector Takashi \"Mori\" Morinozuka—is where handsome boys with too much time on their hands entertain the girls in the academy. In a frantic attempt to remove herself from the hosts, Haruhi ends up breaking a vase worth eight million yen and is forced into becoming the eccentric group's general errand boy to repay her enormous debt. However, thanks to her convincingly masculine appearance, her naturally genial disposition toward girls, and fascinating commoner status, she is soon promoted to full-time male host. And before long, Haruhi is plunged into a glitzy whirlwind of elaborate cosplays, rich food, and exciting shenanigans that only the immensely wealthy Host Club can pull off.", 
        quote: "A person who can't care about himself can't protect anyone, I think"};

        let emilyAnimeRecommendationObject3 = 
        {title: "School Babysitters", 
        image: "https://cdn.myanimelist.net/images/anime/8/89978.jpg", 
        synopsis: "After losing both parents in a fatal plane crash, teenager Ryuuichi Kashima must adjust to his new life as the guardian of his younger brother Kotarou. Although Ryuuichi is able to maintain a friendly and kindhearted demeanor, Kotarou is a reserved toddler still too young to understand the reality of the situation. At their parents' funeral, they are approached by Youko Morinomiya, the stern chairman of an elite academy, who decides to take them under her care. However, there is one condition Ryuuichi must fulfill in exchange for a roof over their heads and enrolment in the school—he must become the school's babysitter. In an effort to support the female teachers at the academy, a babysitter's club was established to look after their infant children; unfortunately, the club is severely short-staffed, so now not only is Ryuuichi responsible for his little brother, but also a handful of toddlers who possess dynamic personalities.", 
        quote: "Little brothers go beyond love or hate."};

        emilyFavoriteAnimeObjectList.push(emilyAnimeRecommendationObject1);
        emilyFavoriteAnimeObjectList.push(emilyAnimeRecommendationObject2);
        emilyFavoriteAnimeObjectList.push(emilyAnimeRecommendationObject3);
    createCards(emilyFavoriteAnimeObjectList);
})

mercerButton.addEventListener('click', () => {
    let mercerFavoriteAnimeObjectList = [];
    let mercerAnimeRecommendationObject1 = 
        {title: "Drive", 
        image: "https://resizing.flixster.com/xQQsLC7IJypTxyRXeOvnPwdEWwE=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzE0ZWFjM2Y1LTYzNTYtNGIwNS1iNGU2LTk0NTA2MGQ3NjY3NC53ZWJw", 
        synopsis: "Driver is a skilled Hollywood stuntman who moonlights as a getaway driver for criminals. Though he projects an icy exterior, lately he's been warming up to a pretty neighbor named Irene and her young son, Benicio. \n\nWhen Irene's husband gets out of jail, he enlists Driver's help in a million-dollar heist. The job goes horribly wrong, and Driver must risk his life to protect Irene and Benicio from the vengeful masterminds behind the robbery.", 
        quote: "There's a hundred-thousand streets in this city. You don't need to know the route. You give me a time and a place, I give you a five minute window."};

        let mercerAnimeRecommendationObject2 = 
        {title: "Inception", 
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg", 
        synopsis: "Dom Cobb is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. \n\nCobb gets a chance at redemption when he is offered a seemingly impossible task: \nPlant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move.", 
        quote: "Once an idea has taken hold of the brain it's almost impossible to eradicate."};

        let mercerAnimeRecommendationObject3 = 
        {title: "Tombstone", 
        image: "https://m.media-amazon.com/images/M/MV5BODRkYzA4MGItODE2MC00ZjkwLWI2NDEtYzU1NzFiZGU1YzA0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg", 
        synopsis: "Wyatt Earp and his brothers, Morgan (Bill Paxton) and Virgil, have left their gunslinger ways behind them to settle down and start a business in the town of Tombstone, Ariz. \n\nWhile they aren't looking to find trouble, trouble soon finds them when they become targets of the ruthless Cowboy gang. \n\nNow, together with Wyatt's best friend, Doc Holliday, the brothers pick up their guns once more to restore order to a lawless land.", 
        quote: "You gonna do somethin' or just stand there and bleed?"};

        mercerFavoriteAnimeObjectList.push(mercerAnimeRecommendationObject1);
        mercerFavoriteAnimeObjectList.push(mercerAnimeRecommendationObject2);
        mercerFavoriteAnimeObjectList.push(mercerAnimeRecommendationObject3);
        createCards(mercerFavoriteAnimeObjectList);
})
