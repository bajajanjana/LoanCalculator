//calculating result on submission of data
document.getElementById('loan-form').addEventListener('submit',function(e){

    //loader
    document.getElementById('loading').style.display='block';
    //results
    document.getElementById('results').style.display='none';

    setTimeout(calculateResults,2000);
    e.preventDefault();
});

//function: result
function calculateResults()
{
    // UI vars
    //console.log("calculating....");
    const amount=document.getElementById('Amount');
    const interest=document.getElementById('Interest');
    const years=document.getElementById('years');
    const monthlyPayment=document.getElementById('Monthly-Payment');
    const totalPayment=document.getElementById('Total-Payment');
    const totalInterest=document.getElementById('Total-Interest');

    const principal=parseFloat(amount.value);
    const calculatedInterest=parseFloat(interest.value)/100/12;
    const calculatedPayment=parseFloat(years.value)*12;

    const x=Math.pow(1+calculatedInterest,calculatedPayment);
    const monthly=(principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly))
    {
        monthlyPayment.value=monthly.toFixed(2);
        totalPayment.value=(monthly*calculatedPayment).toFixed(2);
        totalInterest.value=((monthly*calculatedPayment)-principal).toFixed(2);
        //loader
         document.getElementById('loading').style.display='none';
        //results
         document.getElementById('results').style.display='block';  
    }
    else{
        callError('Please check the numbers!');
    }

    
}

//callError function
function callError(error)
{

    //loader
    document.getElementById('loading').style.display='none';
    //results
     document.getElementById('results').style.display='none';

    // creating error div
    const errorDiv=document.createElement('div');
    //giving the bootstrap class name
    errorDiv.className='alert alert-danger';

    // get element
    const card=document.querySelector('.card');
    const heading=document.querySelector('.heading');

    //appending textnode in errordiv
    errorDiv.appendChild(document.createTextNode(error));

    // inserting error message
    card.insertBefore(errorDiv,heading);

    //removing error message
    setTimeout(clearerror,2000);
     
}
// clearerror
function clearerror()
{
    document.querySelector('.alert').remove();
}