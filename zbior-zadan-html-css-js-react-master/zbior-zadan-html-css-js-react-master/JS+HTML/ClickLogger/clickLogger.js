// stwórz funkcję clickLogger, która zamontowaniu

// będzie logować do konsoli id oraz klasę elementu html,
// który został klikniety

// funkcja clickLogger ma nasłuchiwać na wszystkie klikalne elementy, t
// w obrębie całej strony

function clickLogger() {
  const idElement = event.target.id;
  const classElement = event.target.className;
  console.log(
    `Po kliknięciu id elementu: ${idElement} oraz klasa elementu: ${classElement}`
  );
  event.preventDefault();
}
document.body.addEventListener("click", clickLogger);
