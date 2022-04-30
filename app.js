const input = document.getElementById('input')
const button = document.getElementById('button')

const options = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
      'X-RapidAPI-Key': 'c6a141eb82msh91076cc2f8ad375p1b2981jsn0a076c3994fe'
   }
}

async function findDefinition() {
   const apiInput = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${input.value}`
   let response = await fetch(apiInput, options)

   try {
      const resultObject = await response.json()
      // console.log(resultObject)
      // console.log(resultObject.list[0].definition)

      for (let i = 0; i < resultObject.list.length; i++) {
         console.log(resultObject.list[i].definition.replace(/\[+|\]+/g, ''))
      }
   } catch (e) {
      console.log('Error:', e)
   }
}

button.addEventListener('click', findDefinition)
