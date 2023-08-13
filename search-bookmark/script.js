const saveBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el')
const inputList = document.getElementById('inputList')

let inputArry= [];
saveBtn.addEventListener('click',function(){
    
    let newItem = inputEl.value;
    
    if(newItem){
        inputArry.push(newItem)
        inputEl.value =""
        rendorLead()
    }
})

function rendorLead() {
    let listItem=""
    for (let i = 0; i < inputArry.length; i++) {
        listItem= `<li> <a href="${inputArry[i]}" target="_blank"> ${inputArry[i]} </a> </li>`;
    }
    inputList.innerHTML += listItem
}