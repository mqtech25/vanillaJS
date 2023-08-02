let input1 =document.getElementById('input1')
let input2 =document.getElementById('input2')
let sumEL =document.getElementById('sumEl')
let sumHeading =document.querySelector('.sumHeading');
let result=0

input1.addEventListener('keypress',function(e){
    if(e.keyCode >= 48 && e.keyCode <= 57){
        this.style.setProperty('border-color', '#212529', 'important');
        return true

    }else{
        alert("Please enter a valid number")
        e.preventDefault();
        this.style.setProperty('border-color', 'red', 'important');
    }
})
input2.addEventListener('keypress',function(e){
    if(e.keyCode >= 48 && e.keyCode <= 57){
        this.style.setProperty('border-color', '#212529', 'important');
        return true
    }else{
        alert("Please enter a valid number")
        e.preventDefault();
        this.style.setProperty('border-color', 'red', 'important');
    }
})


let addAction = ()=>{
    result=parseInt(input1.value)+ parseInt(input2.value)
    sumEL.textContent= result;
    sumHeading.style.display="block"
    if(input1.value==""){
        input1.style.setProperty('border-color', 'red', 'important');

    }else if(input2.value==""){
        input2.style.setProperty('border-color', 'red', 'important');

    } else{
        input1.style.setProperty('border-color', '#212529', 'important');
        input2.style.setProperty('border-color', '#212529', 'important');
    }

}

let subAction = ()=>{
    result = parseInt(input1.value) - parseInt(input2.value);
    sumEL.textContent = result
    sumHeading.style.display="block"
    input1.style.setProperty('border-color', '#212529', 'important');
    input2.style.setProperty('border-color', '#212529', 'important');
    if(input1.value==""){
        input1.style.setProperty('border-color', 'red', 'important');

    }else if(input2.value==""){
        input2.style.setProperty('border-color', 'red', 'important');

    } else{
        input1.style.setProperty('border-color', '#212529', 'important');
        input2.style.setProperty('border-color', '#212529', 'important');
    }
}
let divAction = ()=>{
    result = parseFloat(input1.value) / parseFloat(input2.value);
    sumEL.textContent = result
    sumHeading.style.display="block"
    input1.style.setProperty('border-color', '#212529', 'important');
    input2.style.setProperty('border-color', '#212529', 'important');
    if(input1.value==""){
        input1.style.setProperty('border-color', 'red', 'important');

    }else if(input2.value==""){
        input2.style.setProperty('border-color', 'red', 'important');

    } else{
        input1.style.setProperty('border-color', '#212529', 'important');
        input2.style.setProperty('border-color', '#212529', 'important');
    }
}
let multAction = ()=>{
    result = parseInt(input1.value) * parseInt(input2.value);
    sumEL.textContent = result
    sumHeading.style.display="block"
    input1.style.setProperty('border-color', '#212529', 'important');
    input2.style.setProperty('border-color', '#212529', 'important');

    if(input1.value==""){
        input1.style.setProperty('border-color', 'red', 'important');

    }else if(input2.value==""){
        input2.style.setProperty('border-color', 'red', 'important');

    } else{
        input1.style.setProperty('border-color', '#212529', 'important');
        input2.style.setProperty('border-color', '#212529', 'important');
    }
}