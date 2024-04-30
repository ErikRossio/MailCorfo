const lista = [];

function agregar() {
  const nombre = document.getElementById('name-input').value.trim();
  const email = document.getElementById('email-input').value.trim();

  if (nombre !== '' && email !== '') {
    lista.push({ nombre, email });
    mostrarLista();
    limpiarInputs();
  } else {
    alert('Por favor, ingrese un nombre y un correo.');
  }
}

function mostrarLista() {
  const listaUl = document.getElementById('lista');
  listaUl.innerHTML = '';
  lista.forEach((item, index) => {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => eliminar(index));
    li.textContent = `${item.nombre}: ${item.email}`;
    li.appendChild(deleteBtn);
    listaUl.appendChild(li);
  });
}

function limpiarInputs() {
  document.getElementById('name-input').value = '';
  document.getElementById('email-input').value = '';
}

function buscar() {
  const term = document.getElementById('search-input').value.trim().toLowerCase();
  const filteredList = lista.filter(item => item.nombre.toLowerCase().includes(term));
  const listaUl = document.getElementById('lista');
  listaUl.innerHTML = '';
  filteredList.forEach((item, index) => {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => eliminar(index));
    li.textContent = `${item.nombre}: ${item.email}`;
    li.appendChild(deleteBtn);
    listaUl.appendChild(li);
  });
}

function eliminar(index) {
  lista.splice(index, 1);
  mostrarLista();
}
