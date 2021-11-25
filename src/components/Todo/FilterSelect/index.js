//import react from "react";

function FilterSelect({ filter, changeFilter }){


    const selectFilter = (choice) => {
        changeFilter(choice);
    }



    return (
        <ul className="filters">
            <li>
              <span onClick={() => selectFilter("all") } className={ filter === "all" ? "selected" : "unselected"  }>All</span>
            </li>
            <li>
              <span onClick={() => selectFilter("active") } className={ filter === "active" ? "selected" : "unselected"  } >Active</span>
            </li>
            <li>
              <span onClick={() => selectFilter("completed") } className={ filter === "completed" ? "selected" : "unselected"  } >Completed</span>
            </li>
          </ul>
    );

}


export default FilterSelect;