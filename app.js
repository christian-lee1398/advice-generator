// axios.get("https://api.adviceslip.com/advice")
//     .then(res => {
//         console.log("Response:", res.data.slip);
//     })
//     .catch(err => {
//         console.log("Error", err);
//     })

const adviceID = document.querySelector("advice-id")
const advice = document.querySelector("advice")
const adviceDice = document.querySelector("advice-dice")

// adviceDice.addEventListener('click', newAdvice)

const newAdvice = () => {
    const adviceText = getAdvice();
    console.log(adviceText)
    // adviceID.innerHTML += `${res.data.slip}`
}

const getAdvice = async () => {
    const res = await axios.get("https://api.adviceslip.com/advice")
        .then(res => {
            console.log(res.data.slip)
        })
        .catch(err => {
            console.log("Error", err);
        })
}

// function log(msg) {
//     const logElem = document.querySelector(".log");

//     const time = new Date();
//     const timeStr = time.toLocaleTimeString();
//     logElem.innerHTML += `${timeStr}: ${msg}<br/>`;
//   }

//   log("Logging mouse events inside this container…");