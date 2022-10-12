// document.querySelector('#calculate').addEventListener('click',run)
document.querySelector('#calcMawp').addEventListener('click',run)
document.querySelector('#calculate').addEventListener('click',pun)
document.querySelector('#clearInput').addEventListener('click',stun)
document.querySelector('#clear').addEventListener('click', clearDoc)
document.querySelector('#clearMawp').addEventListener('click', clearMawp)
document.querySelector('#clearMawpInput').addEventListener('click', clearInputMawp)

// document.querySelector('.expandOne').addEventListener('click', expandInputs)

// function run(){
//     console.log(document.querySelector('#pressure').value * document.querySelector('#outsideDiameter').value);
   
// }
// function fun(){
//     document.querySelector('#test').innerText = (document.querySelector('#pressure').value * document.querySelector('#outsideDiameter').value);
// }

function pun(){
    document.querySelector('#pressureDesign').value = ' '
    document.querySelector('#requiredThickness').value = ' '
    document.querySelector('#comply').value = ' ';

   document.querySelector('#pressureDesign').value = 
   Math.round(((document.querySelector('#pressure').value * document.querySelector('#outsideDiameter').value) 
   / (2 * document.querySelector('#qualityFactor').value * document.querySelector('#stressValue').value)) * 100000) / 100000;
    
    document.querySelector('#requiredThickness').value = 
    Math.round((Number(document.querySelector('#pressureDesign').value)
    + Number(document.querySelector('#corrosionErrosion').value)) * 10000) / 10000;

    document.querySelector('#comply').value = 
    Math.round((Number(document.querySelector('#proposedThickness').value) 
    - Number(document.querySelector('#requiredThickness').value)) * 10000) / 10000;

    if(document.querySelector('#comply').value > 0){
        document.querySelector('#comply').style.color = 
        'green';
    }
    else if(document.querySelector('#comply').value < 0){
        document.querySelector('#comply').style.cssText = 
        'color: red';
    }
    else{(isNaN(document.querySelector('#comply')))
        alert('Enter Values to calculate');
        document.querySelector('#pressureDesign').value = 'Input numbers';
        document.querySelector('#requiredThickness').value = 'Input numbers';
        document.querySelector('#comply').value = 'Input numbers';  
    }
}



function clearDoc(){
    document.querySelector('#pressureDesign').value = ' '
    document.querySelector('#requiredThickness').value = ' '
    document.querySelector('#comply').value = ' ';
}
function stun(){
    document.querySelector('#pressure').value = ' '
    document.querySelector('#outsideDiameter').value = ' '
    document.querySelector('#qualityFactor').value = ' '
    document.querySelector('#stressValue').value = ' '
    document.querySelector('#corrosionErrosion').value = ' '
}

function run(){
    document.querySelector('#maxAllowResult').value = ' '
    document.querySelector('#maxResultMinus').value = ' ';

    document.querySelector('#maxAllowResult').value = 
    Math.round(2 * (document.querySelector('#mawpWeld').value 
    * document.querySelector('#mawpStress').value 
    * document.querySelector('#mawpThick').value) 
    / (document.querySelector('#mawpOD').value - (2 * document.querySelector('#mawpThick').value
    *  document.querySelector('#mawpTempCo').value))*10000) / 10000;

    document.querySelector('#maxResultMinus').value =
    
    Math.round((document.querySelector('#maxAllowResult').value * 0.85) * 10000) / 10000

    if((isNaN(document.querySelector('#maxAllowResult')))){
    alert('Enter Values to calculate');
    document.querySelector('#maxAllowResult').value = 'Input numbers' 
    document.querySelector('#maxResultMinus').value = 'Input numbers' 
    }
}

function clearMawp(){
    document.querySelector('#maxAllowResult').value = ' '
    document.querySelector('#maxResultMinus').value = ' ';
}
function clearInputMawp(){
    document.querySelector('#minAllow').value = ' '
    document.querySelector('#mawpOD').value = ' '
    document.querySelector('#mawpWeld').value = ' '
    document.querySelector('#mawpStress').value = ' '
    document.querySelector('#mawpThick').value = ' '
    document.querySelector('#mawpTempCo').value = ' '
}




// THIS IS TO MAKE THE CALCULATION APPEAR AND DISSAPEAR
var collapse = document.getElementsByClassName('expandOne');
var i;

for (i = 0; i < collapse.length; i++){
    collapse[i].addEventListener('click', function(){
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if(content.style.display === 'flex'){
            content.style.display = 'none';
        }
        else{
            content.style.display = 'flex';
        }
    });
}

// const first = document.querySelector('.firstCalcContainer')
// document.querySelector('.expandOne').addEventListener('click', trans)
// function trans(){
    
//     first.classList.toggle('firstCalcContainer');

// }   
// }

// document.querySelector('.expandOne').addEventListener('click', expandInputs)
// function expandInputs(){
//     document.querySelector('.firstCalcContainer').style.display = 'flex'
//     // document.querySelector('.firstCalcContainer').style.transition = "all 2s"
// }



