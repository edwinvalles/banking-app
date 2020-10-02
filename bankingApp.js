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

// new_user.addEventListener('click', e => {
//   lineOne.innerHTML = 'Input Name in User 1 Box';
//   lineTwo.innerHTML = 'Initial Amount is 0.00';
//   lineThree.innerHTML = 'Then Click Submit Button';
//   submit.addEventListener('click', e => {  
//     nameInput = userOne.value;
//     newInput = new accountHolder(nameInput,amountInput);
//     console.log(newInput);
//     accountsList.push(newInput);
//     console.log(accountsList);
//   })
// })

existing_user.addEventListener('click', e =>{
  lineOne.innerHTML = 'Input Name in User 1 Box';
  lineTwo.innerHTML = '';
  lineThree.innerHTML = 'Then Click Submit Button';
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
  // userOne.add('');
  // amountBox.add('');
  for (var i = 0; i < accountsList.length; i++){
    if (userOne.value === accountsList[i].name) {
      let newBalance = parseFloat(accountsList[i].amount) + parseFloat(amountBox.value);
      accountsList[i].amount = newBalance
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
})


withdraw.addEventListener('click', e =>{
  lineOne.innerHTML = 'Input Name in User 1 Box';
  lineTwo.innerHTML = 'Input Withdrawal Amount in Amount Box';
  lineThree.innerHTML = 'Then Click Submit Button';
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
})

next.addEventListener('click', e =>{
userOne.classList.remove();
amountBox.classList.remove();
userTwo.classList.remove();
})
