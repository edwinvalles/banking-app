const display = document.querySelector('.display');
var lineOne = document.getElementById('line-one');
var lineTwo = document.getElementById('line-two');
var lineThree = document.getElementById('line-three');

var accountHolder = function(name,amount){
  this.name = name;
  this.amount = amount;
}

var userOne = document.querySelector('#input-one');
var amountBox = document.querySelector('#input-two');
var userTwo = document.querySelector('#input-three');

let nameInput = '';
let amountInput = '';
let newInput = '';
let accountsList = [];
const submit = document.querySelector('.submit');

new_user.addEventListener('click', e => {
  lineOne.innerHTML = 'Input Name in User 1 Box';
  lineTwo.innerHTML = 'Initial Amount is 0.00';
  lineThree.innerHTML = 'Then Click Submit Button';
})

existing_user.addEventListener('click', e =>{
  lineOne.innerHTML = 'Input Name in User 1 Box';
  lineTwo.innerHTML = '';
  lineThree.innerHTML = 'Then Click Submit Button';
})

deposit.addEventListener('click', e =>{
  lineOne.innerHTML = 'Input Name in User 1 Box';
  lineTwo.innerHTML = 'Input Deposit Amount in Amount Box';
  lineThree.innerHTML = 'Then Click Submit Button';
})

withdraw.addEventListener('click', e =>{
  lineOne.innerHTML = 'Input Name in User 1 Box';
  lineTwo.innerHTML = 'Input Withdrawal Amount in Amount Box';
  lineThree.innerHTML = 'Then Click Submit Button';
})

transfer.addEventListener('click', e =>{
  lineOne.innerHTML = 'Input Transferer Name in User 1 Box';
  lineTwo.innerHTML = 'Input Withdrawal Amount in Amount Box';
  lineThree.innerHTML = 'Input Transferee Name in User 2 Box. Submit.';
})

balance.addEventListener('click', e =>{
  lineOne.innerHTML = 'Input Name in User 1 Box';
  lineTwo.innerHTML = '';
  lineThree.innerHTML = 'Then Click Submit Button';
})



submit.addEventListener('click', e => {  
    nameInput = userOne.value;
    amountInput = amountBox.value;
    newInput = new accountHolder(nameInput,amountInput);
    console.log(newInput);
    accountsList.push(newInput);
    console.log(accountsList);

// var userType = document.getElementsByClassName('user-details');
//   var serviceType = document.getElementsByClassName('services');
  
  // if (button === 'new-user') 
  // display.innerHTML.firstChild = "Create a New User";
})



