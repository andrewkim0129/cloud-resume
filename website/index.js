// Lambda Viewer Count 
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://mwrkqogklocnkxfeq7frpukyou0ydhqq.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Visitor Count: ${data}`;
}

updateCounter();