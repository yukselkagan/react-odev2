import { useState } from "react";
import Input from './Input';
import List from './List';
import ItemCount from "./ItemCount";
import FilterSelect from "./FilterSelect";
import Clear from "./Clear";

function Todo() {
    const [todos, setTodos] = useState([
        {
            itemName: 'Learn JavaScript', 
            completed: true,          
        },
        {
            itemName: 'Learn React',
            completed: false,  
        },
        {
            itemName: 'Learn HTML', 
            completed: false,
        },
        {
            itemName: 'Learn CSS', 
            completed: false,
        }

    ]);

    const [filter, setFilter] = useState("all");



    return (
      <section className="todoapp" >
        <header>
          <h1>todos</h1>                   
            <Input addTodos={setTodos} todos={todos} />
        </header>
  
        <section className="main" >
          <input className="toggle-all" type="checkbox" id="toggle-all" />
          <label htmlFor="toggle-all">
            Mark all as complete
          </label>
          <List changeTodos={setTodos} todos={todos} filter={filter} />  
        </section>

        <footer className="footer" >
          <ItemCount todos={todos} />

          <FilterSelect filter={filter} changeFilter={setFilter} />
          <Clear todos={todos} changeTodos={setTodos} />


        </footer>
  
  
      </section>
    )
  }


export default Todo;