const addMoneyButton = document.getElementById('cashOut');
addMoneyButton.addEventListener('click' , function(){
    
    const showCashOut = document.getElementById('cashOutForm');
    showCashOut.classList.remove('hidden')
    const hideAddMoney = document.getElementById('addMoneyForm');
    hideAddMoney.classList.add('hidden')


    
})

const addMoneyButton2 = document.getElementById('addMoney');
addMoneyButton2.addEventListener('click' , function(){

    const showAddMoney = document.getElementById('addMoneyForm');
    showAddMoney.classList.remove('hidden')

    const hideCashOut = document.getElementById('cashOutForm');
    hideCashOut.classList.add('hidden')

})
