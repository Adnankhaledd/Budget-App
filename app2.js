
// global variables 
var incInput = [], expInput = [],id = 0,expId = 0;

// add income to ui and array
function addIncome(){
        
        var name = document.querySelector('.add-name');
        var value = document.querySelector('.add-value');
        // check validity
        if(name.checkValidity() && value.checkValidity()){
          // update ui
            var name = document.querySelector('.add-name').value;
            var value = document.querySelector('.add-value').value;
            id += 1;
            var addElement = document.createElement('p');
            addElement.setAttribute('id','income-'+id);
            addElement.innerHTML = name+ ' ' + value+'$' + '<svg class="bi bi-trash" width="0.75em" height="0.75em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"></svg>'
            document.querySelector('#income-list').appendChild(addElement);
            // add to array
            let newItem = {
                name:name,
                value:value,
                id:'income-'+id
            }
            incInput.push(newItem); 
            incBudget();
            fullBudget()   
            }

        else{
            alert('please enter valid form')
        }
    }
    
 // add to income budget
     
 function incBudget(value){
    var incSum = 0;
    for(i=0;i<incInput.length;i++){
        incSum += parseInt(incInput[i].value) 
    }
    document.querySelector('#income-budget').innerHTML = 'Income Budget:<br>'+ incSum + ' $';
    return incSum;

}


// delete list
function deleteRecipe(){
    // ask the user which list to delete
    let input = prompt('please enter "inc" to delete income list or "exp" to delete expense list ')
    if(input == 'inc'){
        document.querySelector('#income-list').innerHTML = '';
        incInput = []
    }
    else if(input == 'exp'){
        document.querySelector('#expense-list').innerHTML = '';
        expInput = [];
    }

    else{
        alert('please enter inc or exp only')
    }
}
    

// update full budget budget
function fullBudget(){
    sum = incBudget() - expBudget();
    document.querySelector('.budget').innerHTML = 'full Budget:<br>'+ sum + ' $';
    // change color according to value
    sum > 0 ? document.querySelector('.budget').style.color = '#21c01f' : document.querySelector('.budget').style.color = '#ff0000' 
}

// add expense
function addExpense(){

    var name = document.querySelector('.add-name')
    var value = document.querySelector('.add-value')
    // check validity
    if(name.checkValidity() && value.checkValidity()){
        // increase id by 1
        expId+=1
        // add element to ui
        var name = document.querySelector('.add-name').value;
        var value = document.querySelector('.add-value').value;
        var addElement = document.createElement('p');
        addElement.setAttribute('id','expense-'+expId)
        addElement.innerHTML = name+ ' ' + value+'$'+'<svg class="bi bi-trash" width="0.75em" height="0.75em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"></svg>';
        document.querySelector('#expense-list').appendChild(addElement);
        // add element to array
        let newItem = {
            name:name,
            value:value,
            id:'expense-'+expId
        }
        expInput.push(newItem);
        // update budgets
        expBudget();
        fullBudget();
        }
    else {
        alert('please enter valid name and value')
    }
}
   
// add to expense budget
function expBudget(){
        var expSum = 0;
        for (i=0;i<expInput.length;i++){
        expSum += parseInt(expInput[i].value);
        }
        document.querySelector('#expense-budget').innerHTML = 'Expense Budget:<br>'+ expSum + ' $';
        return expSum
    }
    // delete item using the icon
    document.querySelector('.container').addEventListener('click',function(event){
        event.target;
        // get the id
        var itemId = event.target.parentNode.id;
        // compare the id
        for(var i=0;i<incInput.length;i++){
            if(incInput[i].id == itemId){
                incInput.splice(i,1);
                event.target.parentNode.classList.add('crossed')
            }
        }
        for(var i=0;i<expInput.length;i++){
            if(expInput[i].id == itemId){
                expInput.splice(i,1);
                event.target.parentNode.classList.add('crossed')
            }
        }
        // update budgets
        incBudget();
        expBudget();
        fullBudget();

        });


 

