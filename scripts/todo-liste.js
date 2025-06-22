const todoListe = [
  {
    name: 'Abendessen machen',
    faelligAm: '2022-12-22'
  },
  {
    name: 'Geschirr spülen',
    faelligAm: '2022-12-22'
  }
];

zeigeTodoListe();

function zeigeTodoListe() {
  let todoListeHTML = '';

  todoListe.forEach((todoObjekt, index) => {
    const { name, faelligAm } = todoObjekt;
    const html = `
      <div>${name}</div>
      <div>${faelligAm}</div>
      <button class="loeschen-todo-knopf js-loeschen-todo-knopf">Löschen</button>
    `;
    todoListeHTML += html;
  });

  document.querySelector('.js-todo-liste')
    .innerHTML = todoListeHTML;

  document.querySelectorAll('.js-loeschen-todo-knopf')
    .forEach((loeschKnopf, index) => {
      loeschKnopf.addEventListener('click', () => {
        todoListe.splice(index, 1);
        zeigeTodoListe();
      });
    });
}

document.querySelector('.js-hinzufuegen-todo-knopf')
  .addEventListener('click', () => {
    todoHinzufuegen();
  });

function todoHinzufuegen() {
  const eingabeElement = document.querySelector('.js-name-eingabe');
  const name = eingabeElement.value;

  const datumEingabeElement = document.querySelector('.js-faelligam-eingabe');
  const faelligAm = datumEingabeElement.value;

  todoListe.push({
    name,
    faelligAm
  });

  eingabeElement.value = '';

  zeigeTodoListe();
}