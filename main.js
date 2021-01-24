document.querySelector('#addBtn').addEventListener('click', addToList);

function addToList () {
  const itemElem = document.querySelector('#item');
  if (itemElem.value.trim() !== '') {
    addItem(itemElem.value);
    itemElem.value = '';
    document.querySelector('#warning').classList.add('hide-warning');
  } else {
    document.querySelector('#warning').classList.remove('hide-warning');
  }
}


function addItem (itemValue) {
  const ulElem = document.querySelector('#itemsList');
  const liElem = document.createElement('li');
  liElem.textContent = itemValue;
  liElem.addEventListener('click', strikeItem);

  const crossBtn = document.createElement('button');
  crossBtn.textContent = 'X';
  liElem.appendChild(crossBtn);
  ulElem.appendChild(liElem);

  crossBtn.addEventListener('click', () => {
    ulElem.removeChild(liElem);
  });
}


function strikeItem () {
  this.classList.toggle('striked');
}


