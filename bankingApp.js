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
const next = document.querySelector('.next');

new_user.addEventListener('click', e => {
  userOne.disabled = false;
  amountBox.disabled = true;
  userTwo.disabled = true;
  if (userOne.value === ''){
    lineOne.innerHTML = 'Input Name in User 1 box';
    lineTwo.innerHTML = 'Initial Amount is 0.00';
    lineThree.innerHTML = 'Then click New User button';
  } else {
  nameInput = userOne.value;
  amountInput = 0.00;
  newInput = new accountHolder(nameInput,amountInput);
    console.log(newInput);
    accountsList.push(newInput);
    console.log(accountsList);
  }
  userOne.value = '';
}) 

existing_user.addEventListener('click', e =>{
  userOne.disabled = false;
  amountBox.disabled = true;
  userTwo.disabled = true;
  if (userOne.value === ''){
  lineOne.innerHTML = 'Input Name in User 1 box';
  lineTwo.innerHTML = '';
  lineThree.innerHTML = 'Then click Existing User button';
  for (var i = 0; i < accountsList.length; i++){
    if (userOne.value == accountsList[i].name) {
      lineOne.innerHTML = 'Account user' + ' ' + accountsList[i].name;
      lineTwo.innerHTML = 'Has a balance of' + ' ' + accountsList[i].amount;
      lineThree.innerHTML = 'Can I help you with something else?';
      } 
    }
  } else  {
      lineOne.innerHTML = 'Sorry, that name does not have an account.'
      lineTwo.innerHTML = 'Input again a new Name in Input box 1'
      lineThree.innerHTML = 'Then click Existing User';
  }
  userOne.value = '';
})

all_users.addEventListener('click', e => {
  userOne.disabled = true;
  amountBox.disabled = true;
  userTwo.disabled = true;
  for (var i = 0; i < accountsList.length; i++) {
    lineOne.innerHTML = 'Account user:' + ' ' + accountsList[i].name;
    lineTwo.innerHTML = 'Acount balance:' + ' ' + accountsList[i].amount;
    lineThree.innerHTML = 'Click All Users for next User';
  }
}) //only displays the last item in the array

deposit.addEventListener('click', e =>{
  lineOne.innerHTML = 'Input Name in User 1 box';
  lineTwo.innerHTML = 'Input Deposit Amount in Amount box';
  lineThree.innerHTML = 'Then click Deposit button';
  userOne.disabled = false;
  amountBox.disabled = false;
  userTwo.disabled = true;
  for (var i = 0; i < accountsList.length; i++){
    if (userOne.value == accountsList[i].name) {
      let newBalance = parseFloat(accountsList[i].amount) + parseFloat(amountBox.value);
      accountsList[i].amount = newBalance;
      console.log(accountsList[i])
      lineOne.innerHTML = 'Account user' + ' ' + accountsList[i].name;
      lineTwo.innerHTML = 'Has a new Balance of' + ' ' + newBalance;
      lineThree.innerHTML = 'Can I help you with something else?';
    }
    else {   
      lineOne.innerHTML = 'That account does not exist';
      lineTwo.innerHTML = 'Input a new name in User 1 Box';
      lineThree.innerHTML = 'Input deposit amount in amount box. Click Deposit';
    }  
  }
  userOne.value = '';
  amountBox.value = '';
})


withdraw.addEventListener('click', e =>{
  lineOne.innerHTML = 'Input Name in User 1 box'; // does not initilize and display these
  lineTwo.innerHTML = 'Input Withdrawal amount in Amount box';
  lineThree.innerHTML = 'Then click Withdraw button';
  userOne.disabled = false;
  amountBox.disabled = false;
  userTwo.disabled = true;
  for (var i = 0; i < accountsList.length; i++){
    if (userOne.value == accountsList[i].name) {
      let newBalance = parseFloat(accountsList[i].amount) - parseFloat(amountBox.value);
      accountsList[i].amount = newBalance
      console.log(accountsList[i])
      lineOne.innerHTML = 'Account user' + ' ' + accountsList[i].name;
      lineTwo.innerHTML = 'Has a new Balance of' + ' ' + newBalance;
      lineThree.innerHTML = 'Can I help you with something else?';
    }
  }
  userOne.value = '';
  amountBox.value = '';
})

transfer.addEventListener('click', e =>{
  lineOne.innerHTML = 'Input Transferer Name in User 1 box';
  lineTwo.innerHTML = 'Input Transfer amount in Amount box';
  lineThree.innerHTML = 'Input Transferee Name in User 2 box. Transfer.';
  userOne.disabled = false;
  amountBox.disabled = false;
  userTwo.disabled = false;
  for (var i = 0; i < accountsList.length; i++){
    if (userOne.value === accountsList[i].name) {
      let newBalanceOne = parseFloat(accountsList[i].amount) - parseFloat(amountBox.value);
      accountsList[i].amount = newBalanceOne
      console.log(accountsList[i])
      lineOne.innerHTML = 'New balance of' + ' ' + accountsList[i].name + ' ' + 'is' + ' ' + newBalanceOne;
    }
  for (var j = 0; j < accountsList.length; j++) {
    if (userTwo.value === accountsList[j].name) {
      let newBalanceTwo = parseFloat(accountsList[j].amount) + parseFloat(amountBox.value);
      accountsList[j].amount = newBalanceTwo;
      console.log(accountsList[j])
      lineTwo.innerHTML = 'after transferring' + ' ' + amountBox.value + ' ' + 'to' + ' ' + accountsList[j].name;
      lineThree.innerHTML = 'New balance of' + ' ' + accountsList[j].name + ' ' + 'is' + ' ' + newBalanceTwo;
    }
  }
  }
  userOne.value = '';
  amountBox.value = '';
  userTwo.value = '';
})

balance.addEventListener('click', e =>{
  lineOne.innerHTML = 'Input Name in User 1 box';
  lineTwo.innerHTML = '';
  lineThree.innerHTML = 'Then click Balance button';
  amountBox.disabled = true;
  userTwo.disabled = true;
  for (var i = 0; i < accountsList.length; i++){
    if (userOne.value === accountsList[i].name) {
      lineOne.innerHTML = 'Account user' + ' ' + accountsList[i].name;
      lineTwo.innerHTML = 'Has a new Balance of' + ' ' + accountsList[i].amount;
      lineThree.innerHTML = 'Can I help you with something else?';
    }
  }
  userOne.value = '';
})

submit.addEventListener('click', e => {  
  lineOne.innerHTML = 'Open a new account with initial deposit';
  lineTwo.innerHTML = 'Input name in User 1 Box and amount in Amount Box';
  lineThree.innerHTML = 'Then clck Express Open Account';
  userOne.disabled = false;
  amountBox.disabled = false;
  userTwo.disabled = true;  
  nameInput = userOne.value;
    amountInput = amountBox.value;
    newInput = new accountHolder(nameInput,amountInput);
    console.log(newInput);
    accountsList.push(newInput);
    console.log(accountsList);
  userOne.value = '';
  amountBox.value = '';
})

// next.addEventListener('click', e =>{
//   userOne.classList.remove();
//   amountBox.classList.remove();
//   userTwo.classList.remove();
// })
