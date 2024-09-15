import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

let inputEl = document.getElementById('addToCartInput')
let addInputBtn = document.getElementById('addToCartBtn');
let listEl = document.querySelector('.items-list');
const appSettings = {
    databaseURL:"https://shoopingcart-app-default-rtdb.asia-southeast1.firebasedatabase.app"
}


const app = initializeApp(appSettings); //firebase app init
const database = getDatabase(app); //access database from firebase app
const shopingListInDB = ref(database,"shopingList") // database ref key



addInputBtn.addEventListener("click", function(){
    const inputValue = inputEl.value
    let inputArr=[]
    


    push(shopingListInDB,inputValue) // push data at database ref 
 
    inputArr.push(inputValue)
    inputArr.forEach(element => {
        listEl.innerHTML +=`<li class="item"><h4><span class="badge text-bg-light">${element}</span></h4></li>`
    });

    inputEl.value = ""
});

// // console.log(add(2,3));


