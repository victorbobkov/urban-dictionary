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
   const apiInput = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${ input.value }`
   let response = await fetch(apiInput, options)

   try {
      const resultObject = await response.json()
      console.log(resultObject)
      generateData(resultObject)
   } catch (e) {
      console.log('Error:', e)
   }
}

function generateData(resultObject) {
   let defWord = document.getElementById('def')
   if (defWord.childNodes.length === 0) {
      for (let i = 0; i < resultObject.list.length; i++) {
         let definitionCard = document.createElement('div')
         definitionCard.className = 'definition-word'
         defWord.appendChild(definitionCard)

         let defWordStatement = document.createElement('p')
         defWordStatement.className = 'definition-statement'
         defWordStatement.textContent = resultObject.list[i].definition.replace(/\[+|\]+/g, '')

         let defWordExample = document.createElement('p')
         defWordExample.textContent = resultObject.list[i].example.replace(/\[+|\]+/g, '')

         let defWordLink = document.createElement('a')
         defWordLink.textContent = resultObject.list[i].permalink
         defWordLink.href = `${resultObject.list[i].permalink}`
         defWordLink.target = "_blank"

         definitionCard.appendChild(defWordStatement)
         definitionCard.appendChild(defWordExample)
         definitionCard.appendChild(defWordLink)
         console.log('defwordstatement', defWordStatement)
      }
   } else {
      let definitionCheck = document.getElementsByClassName('definition-statement')
      for (let i = 0; i < resultObject.list.length; i++) {
         definitionCheck[i].textContent = resultObject.list[i].definition
         console.log('definitionCheck', definitionCheck)
      }
   }
}

button.addEventListener('click', findDefinition)
