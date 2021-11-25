// import react from "react";


function ItemCount({ todos }){


    const uncompletedTodos = todos.filter( (item) => {
        if(item.completed === false ){
            return item;
        }
        return null;

    });



    return (        
        <span className="todo-count">
            <strong>{uncompletedTodos.length} </strong>
            items left
          </span>
    );


}

export default ItemCount;