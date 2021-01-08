const txtInput = document.querySelector("#txtInput");
// console.log(txtInput)
const btn = document.querySelector(".translateBtn")
// console.log(btn)
const outputDiv = document.querySelector(".outputDiv")
// console.log(outputDiv)

btn.addEventListener('click',()=>{
    let inputText = txtInput.value;
    console.log(inputText)
    translatedURL (inputText)
    
})

const serverURl = "https://api.funtranslations.com/translate/minion.json"

function translatedURL (Text){
    finalURL = serverURl + "?text=" + Text;
    // return finalURL
    
    fetch(finalURL)
    .then(response=>response.json())
    .then(json=>{
        console.log(json)
        console.log(json.contents.translated)
        let translatedTxt = json.contents.translated
        
        outputDiv.innerHTML = translatedTxt
    })
   
}

