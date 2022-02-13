function getPin(){
    const Pin = Math.round(Math.random()*10000);
    const pinString = Pin + '';
    if(pinString.length==4){
        return Pin;
    }
    else{
        return getPin(); 
    }
}
function generatePin(){
    
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

}
document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calc = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calc.value = '';
        }
    }
    else{
        
        let prev = calc.value;
        const newCalc = prev + number;
        calc.value = newCalc;
    }
    


});

function pinVerify(){

   
    const typedNumber = document.getElementById('typed-numbers').value;
    const generatedPin = document.getElementById('display-pin').value;
    if(generatedPin == typedNumber ){
       const success =  document.getElementById('matched');
       success.style.display ='block';
    }else{
        const fail = document.getElementById('notmatched');
        fail.style.display = 'block';
    }

}