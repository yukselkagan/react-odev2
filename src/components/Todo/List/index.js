import React from "react";

function List({ todos, changeTodos, filter }){

  const deleteItem = (key) => {
    var newTodos = [...todos];
    newTodos.splice(key,1);
    changeTodos(newTodos);

  }

  const completeItem = (key) => {
    var newTodos = [...todos];
    newTodos[key].completed = !newTodos[key].completed;
    changeTodos(newTodos);

  }

  const filteredTodos = todos.filter( (item) => {
    if(filter === "all"){
      return item;
    }else if(filter === "active"){
      if(item.completed === false ){
        return item;
      }
    }else if(filter === "completed"){
      if(item.completed === true ){
        return item;
      }
    }
    return null;


  });






  return (
    <>    
      <ul className="todo-list" >
        {
          filteredTodos.map(
            (todo, key) => {

              return (
                <li key={key} className={todo.completed ? "completed" : "normal" } >
                  <div className="view" >
                    <input onChange={() => completeItem(key)} className="toggle" 
                      type="checkbox" checked={todo.completed ? "checked" : "" } />
                    <label>{todo.itemName}</label>
                    <button onClick={() => deleteItem(key)} className="destroy" ></button>
                  </div>                    
                </li>
              );

            }
          )

        }






      </ul>



    

    
    
    </>
  );
}

export default List;