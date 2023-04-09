const endDate = "10 April 2023 10:00 PM"

document.getElementById("end-date").innerText = endDate
const inputs = document.querySelectorAll("input")

const clock = () => {
    const end = new Date(endDate)
    const now = new Date()

    // diff is coming in milli seconds converting it into seconds
    const diff = (end-now)/1000;

    // convert into days
    inputs[0].value = Math.floor(diff/24/3600)
    inputs[1].value = Math.floor(diff/3600)%24
    inputs[2].value = Math.floor(diff/60)%60
    inputs[3].value = Math.floor(diff)%60
}

clock();

setInterval(() => {
    clock();  
}, 1000);

/*
    * 1 day = 24 hours
    * 1 hour = 60 minutes
    * 60 min = 3600 seconds

*/