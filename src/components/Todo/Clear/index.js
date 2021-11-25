// import react from "react";


function Clear({ todos, changeTodos }){

    const ClearItems = () => {

        const newTodos = todos.filter( (item) => {
            if(item.completed === false ){
                return item;
            }
            return null;
        });


        changeTodos(newTodos);

    }


    return (
        <button onClick={ClearItems} className="clear-completed">
            Clear completed
        </button>


    );


}


export default Clear;

