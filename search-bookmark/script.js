const saveBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el')
const inputList = document.getElementById('inputList')
const deleteBtn = document.getElementById('input-DelBtn')
const inputSaveBtn= document.getElementById('input-SaveBtn')

let inputArry= [];

 

// Json.parse to convert an JSON string to Array or object 
const storageInput = JSON.parse(localStorage.getItem('inputList'));

    if(storageInput){
        deleteBtn.style.display="inline-block"
        inputSaveBtn.style.display="inline-block"
        // inputArry=storageInput
        rendorLead(storageInput)
    }


    saveBtn.addEventListener('click',function(){

        if(inputEl.value!=""){
            deleteBtn.style.display="inline-block"
            inputSaveBtn.style.display="inline-block"
        
            let newItem = inputEl.value;
        
            if(newItem){
                inputArry.push(newItem)
                // Json.stringify to convert an Array or object to JSON string
            localStorage.setItem('inputList',JSON.stringify(inputArry))
                inputEl.value =""
                rendorLead(inputArry)
            }
        }else{
            alert("please enter a input");
        }
    })

    deleteBtn.addEventListener('dblclick',function(){
        // localStorage.clear()
        localStorage.removeItem('inputList')
        inputArry=[]
        // location.reload();
        rendorLead(inputArry);
        deleteBtn.style.display="none"
        inputSaveBtn.style.display="none"

    });

    inputSaveBtn.addEventListener('click',function(){
        
        chrome.tabs.query({active:true,currentWindow:true},function(tabs){
            let tabList =tabs[0].url;
            inputArry.push(tabList)
            localStorage.setItem('inputList',JSON.stringify(inputArry))
            rendorLead(inputArry)

        })
    })

    function rendorLead(leads) {
        let listItem=""
    
        for (let i = 0; i < leads.length; i++) {
            listItem += `<li class="nav-item my-1"> <a href="${leads[i]}" class="text-success fw-500 " target="_blank"> 
            ${leads[i]} </a> </li>`;
        }
            inputList.innerHTML = listItem
    }