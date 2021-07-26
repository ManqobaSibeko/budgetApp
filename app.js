document.addEventListener("DOMContentLoaded", function(){

    // Budget form 
    const budgetForm = document.querySelector("#budgetForm")
    const budgetTxt = document.querySelector("#budgetTxt")
    const submitBTn =  document.querySelector("#submitBtn")
    const budgetAmount = document.querySelector(".budgetAmount")
    

    // Expense form
    const expenseForm = document.querySelector("#expenseForm")
    const expenseTitle = document.querySelector("#expenseTitle")
    const  expenseAmount = document.querySelector(".expenseAmount")
    const expenseTxt = document.querySelector("#expenseTxt")
    const expense = document.querySelector(".expense")
    const expensePrice = document.querySelector(".expensePrice")
    
    
    const balanceAmount = document.querySelector(".balanceAmount")
   


    let budgetValue = 0
    budgetAmount.innerText = ` $ ${budgetValue}`


    let expenseValue = 0
    expenseAmount.innerHTML = ` $ ${expenseValue}`

    
    let balanceValue = 0
    balanceAmount.innerText = ` $ ${balanceValue}`



    if(budgetTxt.value.length = 0){
        submitBtn.disable
    }



    
    budgetForm.addEventListener("submit",function(e){


        e.preventDefault()
        budgetValue = budgetTxt.value
        budgetAmount.innerText = ` $ ${budgetValue}`
        balanceAmount.innerText = ` $ ${budgetValue}`


    })

    let expense1 =""
    expenseForm.addEventListener("submit", function(e){
        e.preventDefault()

        expense1 = expenseTitle.value 
        expenseValue = expenseTxt.value 

        const listItems = document.createElement("li")

        listItems.innerHTML = expense1

        expense.append(listItems)

        const expensePriceList = document.createElement("li")

        expensePriceList.innerHTML = expenseValue
        expenseAmount.innerHTML = ` $ ${expenseValue}`

        expensePrice.append(expensePriceList)


        let deductedValue = budgetValue - expenseValue

        balanceAmount.innerText = ` $ ${ deductedValue}`

    })






})

