const logOut = document.getElementById('logOut').addEventListener(
    'click',
    function(e){
        window.location.href = '../index.html'
    }
)

const addMoney = document.getElementById('addMoneyButton')
addMoney.addEventListener('click' , function(e){
    e.preventDefault();
    const ammount = document.getElementById('amountNumber').value;
    const amountNUmber = parseFloat(ammount);
    const pin = document.getElementById('pinNumber').value;
    const balance = document.getElementById('balance').innerText;
    const balanceNUmber = parseFloat(balance);
    if(ammount < 20){
        alert('Minimum Amount 20')
    }
       
    else if (pin === '0000') {
        const modifyBalance  = amountNUmber + balanceNUmber;
        // const modifyBalance  = balanceNUmber + amountNUmber;
        document.getElementById('balance').innerText = modifyBalance;
    } 
    else {
        alert('Enter Currect Information')
    }
})


const cashOut = document.getElementById('cashOutButton')
cashOut.addEventListener('click' , function(e){
    e.preventDefault();
    const ammount = document.getElementById('cashOutAmount').value;
    const amountNUmber = parseFloat(ammount);
    const pin = document.getElementById('cashOutPin').value;
    const balance = document.getElementById('balance').innerText;
    const balanceNUmber = parseFloat(balance);
    if(ammount < 100){
        alert('Minimum Amount 100')
    }
       
    else if (pin === '0000') {
        const modifyBalance  = balanceNUmber - amountNUmber;
        // const modifyBalance  = balanceNUmber + amountNUmber;
        document.getElementById('balance').innerText = modifyBalance;
    } 
    else {
        alert('Enter Currect Information')
    }
})
