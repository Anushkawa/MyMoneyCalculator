// START CALCULATE FUNCTION 
function inputAmmount(){
    // ALL VARIABLE
    const totalInput = document.getElementById('total-balance').value;
    const foodInput = document.getElementById('food-balance').value;
    const rentInput = document.getElementById('rent-balance').value;
    const clothInput = document.getElementById('cloth-balance').value;
    const totalExpen =  document.getElementById('total-expen');
    const balance = document.getElementById('balance');

    // POPUP WARNING
    const alert = document.getElementById('warning');
    const balanceWarning = document.getElementById('warning3');

    // TOATAL EXPENSES AMMOUNT CALCULATE
    const totalItem = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput);

    // TOTAL BALANCE CALCULATE
    const totalBalance = parseFloat(totalInput) - totalItem;

    // CALCULATE CONDITON ADD
    if(isNaN(totalInput) || isNaN(foodInput) || isNaN(rentInput) || isNaN(clothInput) || totalInput < 0 || foodInput < 0 || rentInput < 0 || clothInput < 0 || totalInput == "" || foodInput == "" || rentInput == "" || clothInput == ""){
        alert.style.display = 'block';
        balanceWarning.style.display = 'none';
        return alert;
    }
    else if(totalInput < totalItem){
      
      balanceWarning.style.display = 'block';
      alert.style.display = 'none';
    }
    else{
        
        totalExpen.innerText = totalItem;
        balance.innerText = totalBalance;
        alert.style.display = 'none';
        balanceWarning.style.display = 'none';
    }
}
// END CALCULATE FUNCTION
// START SAVING FUNCTION
function saveAmmount(){
    // ALL VARIABLE
    const totalInput = document.getElementById('total-balance').value;
    const saveInput = document.getElementById('save-input').value;
    const saveAmmount = (parseFloat(totalInput) * parseFloat(saveInput)) / 100;  
    const saveAmmountText = document.getElementById('save-ammount');
    const warning1 = document.getElementById('warning2');
    const remaingAmmount =document.getElementById('remaining-ammount');
    const balanceInput = document.getElementById('balance').innerText;
    const savingArelt = document.getElementById('warning4');
    const irrorAmmount = document.getElementById('warning5');
    const remaingTotal = parseFloat(balanceInput) - parseFloat(saveAmmount);
    // SAVING CONDITION ADD
    if(isNaN(saveInput) || saveInput < 0 && balanceInput < remaingAmmount){
        warning1.style.display = 'block';
        savingArelt.style.display = 'none';
        irrorAmmount.style.display = 'none';
        return warning1;
    }
    else if(saveInput == ""){
        savingArelt.style.display = 'block';
        warning1.style.display = 'none';
        irrorAmmount.style.display = 'none';
    }
    else if(totalInput == 0){
        irrorAmmount.style.display = 'block';
        savingArelt.style.display = 'none';
        warning1.style.display = 'none';
    }
    else{
        if( remaingTotal < 0){
           return alert('Saving balance should be less stable than income balance');
        }
        else{

            savingArelt.style.display = 'none';
            irrorAmmount.style.display = 'none';
            remaingAmmount.innerText = remaingTotal;
            saveAmmountText.innerText = saveAmmount; 
            warning1.style.display = 'none';
        }
    }
}
// END SAVING FUNCTION
// START CALCULATE CLICK ITEM
document.getElementById('calculate-btn').addEventListener('click', function(){
    inputAmmount();
});
// END CALCULATE CLICK ITEM 
// START SAVING CLICK ITEM 
document.getElementById('btn-save').addEventListener('click', function(){
    saveAmmount();
});
// END SAVING CLICK ITEM