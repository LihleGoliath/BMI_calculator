
function results(){
    let meter = document.querySelector('#height').value
    let kilograms = document.querySelector('#weight').value
    let sum =  kilograms / (meter**2)

document.querySelector('#answer').innerHTML = sum.toFixed(2);

if (sum < 18.5 ) {
document.querySelector('#weight_identity').innerHTML="UnderWeight";
}else if (sum >= 18.5 && sum <=24.9 ){
    document.querySelector('#weight_identity').innerHTML="Normal";
 }else if (sum >= 25 && sum <=29.9 ){
        document.querySelector('#weight_identity').innerHTML="OverWeight";
}else if (sum >= 30 && sum <= 34.9 ) {
    document.querySelector('#weight_identity').innerHTML="Obese";
 }else if   (sum >= 35) {
    document.querySelector('#weight_identity').innerHTML="Extremely Obese";
    }else{
        document.querySelector('#weight_identity').innerHTML="NOT IN RECORDS";    
    }


}