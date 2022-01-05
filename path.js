//document.getElementById("count-el").innerText = 5
let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


function hello() {
    count = count + 1
    countEl.textContent = count
    }
    document.getElementById("increment-btn").addEventListener("click", hello);

    
function save(){
    let countStr = count + " - "
    saveEL.textContent += countStr
    countEl.textContent = 0
    count = 0
    
    console.log(count)
}    



document.getElementById("save-btn").addEventListener("click", save)