// axios.get("https://api.adviceslip.com/advice")
//     .then(res => {
//         console.log("Response:", res.data.slip);
//     })
//     .catch(err => {
//         console.log("Error", err);
//     })

const adviceID = document.querySelector(".advice-id")
const advice = document.querySelector(".advice")
const adviceDice = document.querySelector(".dice-button")

const newAdvice = async () => {
    const adviceText = await getAdvice();
    console.log(adviceText)
    // adviceID.innerHTML += `${res.data.slip}`

}

const getAdvice = async () => {
    const res = await axios.get("https://api.adviceslip.com/advice")
    // .then(res => {
    //     console.log(res.data.slip)
    // })
    // .catch(err => {
    //     console.log("Error", err);
    // })
    adviceID.innerHTML = `ADVICE #${res.data.slip.id}`;
    advice.innerHTML = `"${res.data.slip.advice}"`;
    return res.data.slip;

}
adviceDice.addEventListener('click', newAdvice)

// function log(msg) {
//     const logElem = document.querySelector(".log");

//     const time = new Date();
//     const timeStr = time.toLocaleTimeString();
//     logElem.innerHTML += `${timeStr}: ${msg}<br/>`;
//   }

//   log("Logging mouse events inside this container…");