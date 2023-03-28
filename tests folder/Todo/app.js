let input = prompt(
  "Options:\n1. list -> display all Todos\n2. new -> add a new todo\n3. delete- remove a to do\n4. clear - Clear entire list\n5. quit - Exit the app\n----------------------------\nwhat whould you like to do?","Enter command number or command name").toLocaleLowerCase().trim();
const todos = ["Collect eggs", "fined a treasure"];
while (input !== "quit" && input !== "q" && input != 5) {
  switch (input) {

    case "list":
    case "l":
    case "1":
      if (todos.length === 0) {
        alert("List is empty!");
        break;
      }
      for (let i = 0; i < todos.length; i++) {
        console.log(`${i + 1}: ${todos[i]}`);
      }
      break;

      case "new":
      case "n":
      case "2":
      const newTodo = prompt("Ok, what is the new to todo?");
      todos.push(newTodo);
      console.log(`[${newTodo}] added to the list!`);
      break;

    case "delete":
    case "d":
    case "3":
      if (todos.length === 0) {
        alert("List is empty!");
        break;
      }
      let deleteIndex = prompt("Ok, what is the line number you want to delete?\nEnter 'cancel' to go back.").trim().toLocaleLowerCase();
      if( deleteIndex==='cancel' || deleteIndex==='c') break;
      while (deleteIndex < 1 || deleteIndex > todos.length ||isNaN(deleteIndex)){
      if( deleteIndex==='cancel' || deleteIndex==='c') break;
        deleteIndex = prompt("Please enter a valid line number!\nwhat is the line number you want to delete?\nEnter 'cancel' to go back.").trim().toLocaleLowerCase();
      }
      if( deleteIndex==='cancel' || deleteIndex==='c') break;
      console.log(`[Line ${deleteIndex} : ${todos.splice(deleteIndex - 1,1)}] deleted from the list!`);
      break;
    case "clear":
    case "c":
    case "4":
        const confirm = prompt("All list will be Deleted\nAre you sure you? Y/N").trim().toLocaleLowerCase();
        if(confirm ==='y' || confirm==='yes')
        console.log(`all lines were deleted!\n[${todos.splice(0,todos.length )}] were deleted!`);
        break;
      
    default:
      alert("Please enter a valid command!");
      break;
  }
  console.log("****************");
  input = prompt("Options:\n1. list -> display all Todos\n2. new -> add a new todo\n3. delete- remove a to do\n4. clear - Clear entire list\n5. quit - Exit the app\n----------------------------\n----------------------------\nwhat whould you like to do? ","Enter command number or command name").toLocaleLowerCase().trim();
}
console.log("OK QUIT THE APP!");
