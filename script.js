//dark mode
dark_mode = document.getElementById('dark_mode');
light_mode = document.getElementById('light_mode');
dark_mode.addEventListener('click',()=>{

console.log("Dark Mode");

dark_mode.style.display = "none";
light_mode.style.display = "flex";
light_mode.style.backgroundColor="white";
light_mode.style.color ="black";


document.body.style.backgroundColor ='rgb(68, 68, 68)';
document.getElementById('navbar').style.backgroundColor ='gray';

document.getElementById('ExpenseTracker').style.backgroundColor ='black';
document.getElementById('ExpenseTracker').style.color ='white';


document.getElementById('ExpenseTrackerDetail').style.backgroundColor ='black';
document.getElementById('ExpenseTrackerDetail').style.color ='white';
// document.getElementById('detail').style.color = 'black';

document.getElementById('DataVisualization').style.backgroundColor ='black';
document.getElementById('DataVisualization').style.color ='white';


document.getElementById('AIFinancialAdvisor').style.backgroundColor ='black';
document.getElementById('AIFinancialAdvisor').style.color ='white';


document.getElementById('TaxesCalculator').style.backgroundColor ='black';
document.getElementById('TaxesCalculator').style.color ='white';
 

});

//light Mode
light_mode.addEventListener('click',()=>{

    dark_mode.style.display = "flex";
    light_mode.style.display = "none";
    document.body.style.backgroundColor ='rgb(244, 235, 235)';
    document.getElementById('navbar').style.backgroundColor ='greenyellow';
    
    document.getElementById('ExpenseTracker').style.backgroundColor ='white';
    document.getElementById('ExpenseTracker').style.color ='black';
    
    document.getElementById('ExpenseTrackerDetail').style.backgroundColor ='white';
    document.getElementById('ExpenseTrackerDetail').style.color ='black';
    document.getElementById('contain').style.color = 'white'

    
    document.getElementById('DataVisualization').style.backgroundColor ='white';
    document.getElementById('DataVisualization').style.color ='black';
    
    
    document.getElementById('AIFinancialAdvisor').style.backgroundColor ='white';
    document.getElementById('AIFinancialAdvisor').style.color ='black';
    
    
    document.getElementById('TaxesCalculator').style.backgroundColor ='white';
    document.getElementById('TaxesCalculator').style.color ='black';

});








//Expense Tracker

let desc =  document.getElementById('desc');
let Amount = document.getElementById('amount');
let Groceries = document.getElementById('Groceries');
let addBtn = document.getElementById('addBtn');




let arr  =[];
addBtn.addEventListener('click',() =>{

    document.getElementById('ExpenseTrackerDetail').style.display ='flex';
    document.getElementById('details').style.display = 'flex';

    
      let expense = {
        description: desc.value,
        amount: parseFloat(Amount.value),
        category: Groceries.value,
    }

    arr.push(expense);
    renderList(arr);
    //chart js
    // data =[];
    // data.push(expense.description);
    const data = arr.map(item => item.description);
    const amount = arr.map(item => item.amount);

    console.log(data);
    console.log(amount)
    
    showChart(data,amount)


});

function showChart(data,amount){
    // const datats = arr.map(item => item.description);
    // const amount = arr.map(item => item.amount);
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [data],
        datasets: [{
        label: '# of Votes',
        data: [amount],
        borderWidth: 1,
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4

        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
    });
}


const  renderList  =(data) =>  {
    const container = data.map((item , index) => {
        return  `<div class="detail" id="contain">
                   <h2 id="name">${item.description}</h2>
                 <span id ="rs">${item.amount} </span>
                 <span id="type">${item.category}</span>
                </div>
             <div class="btns">
                <button class="remove" id="edite" onclick="editFunction(this)" data-index=${index}>Edit</button>
                <button class="remove" id="delete" onclick="deleteFunction(this)" data-index=${index}>Delete</button>
               </div>
            </div>`
    }).join("");

       document.querySelector('.content-container').innerHTML = container;
}

function editFunction(){

   let contain = document.getElementById('contain');
   contain.style.display ="none";

}
function deleteFunction(ele){
    console.log(ele)
    let detail = document.getElementById('details');
    detail.style.display ="none";
 
}



//chatGpt and Gemini
//  const chatgpt = document.getElementById('chatgpt');
 const gemini = document.getElementById('gemini')
gemini.addEventListener('click', () => {
  
    // window.location.href = `https://chatgpt.com/?oai-dm=1`;
    window.location.href = "./gemini.html"
});

// gemini.addEventListener('click', () => {
  
//     window.location.href = `https://gemini.google.com/app`
// });



    







// tax calculator

// let amout =parseInt(document.getElementById('amount').value);
// console.log(amout);

function calculateTax(){
    let income = parseFloat(document.getElementById('amounts').value);
    let tax = 0;
    let taxRate = 0;
    let aferTax =income - tax;
    if(income > 1000000.00)
    {
        tax = income * 0.20;
        taxRate = 20;
    }
    else if(income > 700000.00)
    {
        tax = income * 0.15;
        taxRate = 15;
    }
    else if(income > 500000.00)
    {
        tax = income * 0.10;
        taxRate = 10;
    }
    else if(income > 300000.00)
    {
        tax = income * 0.05;
        taxRate = 5;
    }
    else{
        tax = 0;
        taxRate = 0;
    }

    document.getElementById('totalIncome').textContent = `Total Income:  ${income}`;
    document.getElementById('TaxRate').textContent = `Tax Rate:  ${taxRate}%`
    document.getElementById('taxToPay').textContent =`Tax to Pay:  ₹${tax}`;
    document.getElementById('AfterTax').textContent = `Amount left after tax: ${aferTax}`;
}



