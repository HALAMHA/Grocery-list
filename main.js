document.querySelector('#addBtn').addEventListener('click', addToList);
let shoppingList = [];

function addToList () {
  const itemElem = document.querySelector('#item');
  shoppingList.push(itemElem.value);
  itemElem.value = '';
  showList();
}


function showList () {
  const ulElem = document.querySelector('#itemsList');
  ulElem.innerHTML = '';

  for (let i = 0; i < shoppingList.length; i++) {
    const liElem = document.createElement('li');
    liElem.textContent = shoppingList[i];
    ulElem.appendChild(liElem);
  }
}


