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
// const checkName = function () {  
//   for (var i = 0; i <= accountsList.length; i++)
// }

new_user.addEventListener('click', e => {
  lineOne.innerHTML = 'Input name in User 1 Box';
  lineTwo.innerHTML = 'Initial amount is 0.00';
  lineThree.innerHTML = 'Then click New User button';
  amountBox.disabled = true;
  userTwo.disabled = true;
  nameInput = userOne.value;
  amountInput = 0.00;
  newInput = new accountHolder(nameInput,amountInput);
    console.log(newInput);
    accountsList.push(newInput);
    console.log(accountsList);
  userOne.value = '';
})

existing_user.addEventListener('click', e =>{
  lineOne.innerHTML = 'Input name in User 1 Box';
  lineTwo.innerHTML = '';
  lineThree.innerHTML = 'Then click Submit Button';
  amountBox.disabled = true;
  userTwo.disabled = true;
  for (var i = 0; i < accountsList.length; i++){
    if (userOne.value === accountsList[i].name) {
      lineOne.innerHTML = 'Account user' + ' ' + accountsList[i].name;
      lineTwo.innerHTML = 'Has a balance of' + ' ' + accountsList[i].amount;
      lineThree.innerHTML = 'Can I help you with something else?';
    }
  }
})

// const checkName = function (userOne) {  
//   for (var i = 0; i < accountsList.length; i++){
//     if (userOne.value == accountsList[i].name) {
//         return true;
//         // newBalance = parseFloat(accountHolder.amount[i]) + parseFloat(amountInput);
//         // updateAccount = this.amount.newBalance;
//         // console.log(newBalance)
//     }
//     else { 
//         return false;
//       //   nameInput = userOne.value;
//       //   amountInput = amountBox.value;
//       //   newInput = new accountHolder(nameInput,amountInput);
//       //   console.log(newInput);
//       //   accountsList.push(newInput);
//       //   console.log(accountsList);
//     }  
//   }
// }

deposit.addEventListener('click', e =>{
  lineOne.innerHTML = 'Input Name in User 1 Box';
  lineTwo.innerHTML = 'Input Deposit Amount in Amount Box';
  lineThree.innerHTML = 'Then Click Deposit Button';
  amountBox.disabled = false;
  userTwo.disabled = true;
  for (var i = 0; i < accountsList.length; i++){
    if (userOne.value === accountsList[i].name) {
      let newBalance = parseFloat(accountsList[i].amount) + parseFloat(amountBox.value);
      accountsList[i].amount = newBalance;
      console.log(accountsList[i])
      lineOne.innerHTML = 'Account user' + ' ' + accountsList[i].name;
      lineTwo.innerHTML = 'Has a new Balance of' + ' ' + newBalance;
      lineThree.innerHTML = 'Can I help you with something else?';
    }
    else {  
      // lineOne.innerHTML = 'That account does not exist';
      // lineTwo.innerHTML = 'Input a new name in User 1 Box';
      // lineThree.innerHTML = 'Input deposit amount in amount box. Click Deposit';
    }  
  }
  userOne.value = '';
  amountBox.value = '';
})


withdraw.addEventListener('click', e =>{
  lineOne.innerHTML = 'Input Name in User 1 Box';
  lineTwo.innerHTML = 'Input Withdrawal Amount in Amount Box';
  lineThree.innerHTML = 'Then Click Submit Button';
  amountBox.disabled = false;
  userTwo.disabled = true;
  for (var i = 0; i < accountsList.length; i++){
    if (userOne.value === accountsList[i].name) {
      let newBalance = parseFloat(accountsList[i].amount) - parseFloat(amountBox.value);
      accountsList[i].amount = newBalance
      console.log(accountsList[i])
      lineOne.innerHTML = 'Account user' + ' ' + accountsList[i].name;
      lineTwo.innerHTML = 'Has a new Balance of' + ' ' + newBalance;
      lineThree.innerHTML = 'Can I help you with something else?';
    }
  }
})

transfer.addEventListener('click', e =>{
  lineOne.innerHTML = 'Input Transferer Name in User 1 Box';
  lineTwo.innerHTML = 'Input Withdrawal Amount in Amount Box';
  lineThree.innerHTML = 'Input Transferee Name in User 2 Box. Submit.';
  amountBox.disabled = false;
  userTwo.disabled = false;
})

balance.addEventListener('click', e =>{
  lineOne.innerHTML = 'Input Name in User 1 Box';
  lineTwo.innerHTML = '';
  lineThree.innerHTML = 'Then click Submit Button';
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
    nameInput = userOne.value;
    amountInput = amountBox.value;
    newInput = new accountHolder(nameInput,amountInput);
    console.log(newInput);
    accountsList.push(newInput);
    console.log(accountsList);
})

next.addEventListener('click', e =>{
userOne.classList.remove();
amountBox.classList.remove();
userTwo.classList.remove();
})
