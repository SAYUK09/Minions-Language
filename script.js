const txtInput = document.querySelector("#txtInput");
const btn = document.querySelector(".translateBtn")
const outputDiv = document.querySelector(".outputDiv")

const serverURl = "https://api.funtranslations.com/translate/minion.json"

async function translatedURL(text) {
    const finalURL = `${serverURl}?text=${text}`;
    try {
        const response = await fetch(finalURL)
        const data = await response.json()

        console.log(data)
        console.log(data.contents.translated)

        let translatedTxt = data.contents.translated
        outputDiv.innerText = translatedTxt

    } catch (error) {
        console.log("BAD BAD", error);
        alert("something wrong with server!try again after some time")
    }
}


btn.addEventListener('click', () => {
    let inputText = txtInput.value;
    if (inputText)                  // if the inputText is not Empty then, make a request
        translatedURL(inputText)
})

// fetch(finalURL)
// .then(response=>response.json())
//     .then(json=>{
//         console.log(json)
//         console.log(json.contents.translated)
//         let translatedTxt = json.contents.translated
//         outputDiv.innerHTML = translatedTxt
//     })

// function errorHandler(error){
//     console.log("error occured",error);
//     alert("something wrong with server!try again after some time")
// }

// .catch((error)=>{
//     console.log(error,"yeahhh")
// });
