const options = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
      'X-RapidAPI-Key': 'c6a141eb82msh91076cc2f8ad375p1b2981jsn0a076c3994fe'
   }
};

fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat`, options)
   .then(response => response.json())
   .then(response => console.log(response))
   .catch(err => console.error(err));