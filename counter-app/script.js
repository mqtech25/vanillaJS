let count=0;
let counterEL= document.getElementById('counter')
let prevTextEL = document.getElementById('prevEntry')
let totalEntry= document.getElementById('totalEntry')
let counterTotalArr=[]
let sum=0;
function counterFun(){
    count+=1;
   counterEL.textContent = count ;
}
function saveFun() {
    counterTotalArr.push(count)
    let currentCount= count+" + "
    prevTextEL.textContent += currentCount
    count=0;
    counterEL.textContent=count;
}
function resetFun() {
    count=0
    counterEL.textContent = count
}
function totalFun() {
    counterTotalArr.forEach(element => {
       sum += element
    });
    totalEntry.textContent = sum;
    sum = 0
}
