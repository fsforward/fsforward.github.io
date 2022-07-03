const incrementBtn = document.getElementById("incrementBtn");
let count = 0;

function incrementCounter()
{
    count++;
    document.getElementById("counter").innerHTML = count;
}

incrementBtn.addEventListener("click", incrementCounter);