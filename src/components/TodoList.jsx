
import { useEffect } from "react";
import TodoForm from "./TodoForm";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import { getTodos } from "../store/thunk";
import NavScrollExample from "./Navbar";
import styleup from '../css/todo.module.css';
import formStyle from '../css/todo.module.css';
import Spinner from 'react-bootstrap/Spinner'
import { getTodosData,  getTodosLoading, completeTodos, IncompletedTodos } from "../store/selectors";


// import styled from "styled-components"



const TodoList = ({ todos, loadAll, loadingStarts, completeTodos, IncompletedTodos }) => {

    // loadAll gets called when the page sets in
    useEffect(() => {
        loadAll()
    }, [loadAll])

    const spinner = <Spinner animation = 'border' style= {{marginLeft: '50em'}}></Spinner>
    
    return (
        <>
        <div className = {styleup.back}>
        <NavScrollExample/>
        <div className="list-wrapper">
            
            {/* input form to add a todo */}
            <TodoForm />

            <div className= {formStyle.wrap}>
            {/* //  " grid grid-cols-4 md: grid-cols-4"> */}

            { loadingStarts ? (
                // <h3 className={ formStyle.load }> .....loading </h3>
                spinner
            ) : (

                <>
                <h3 style={{textAlign: "center"}}> Completed Todos: </h3>
                  {completeTodos.map((todo, key) => (
                   
                   <ListItem task= {todo} key={key} />

                  ))}

               <h3 style={{textAlign: "center"}}> InCompleted Todos: </h3>
                  {IncompletedTodos.map((todo, key) => (
                   
                   <ListItem task= {todo} key={key} />

                  ))}

               </>
                  
            //    }
                
               
               
              
             
                // todos.map((todo, key) => (
                   
                //     <ListItem task= {todo} key={key} />
            
                // ))
                
                
            )}
            </div>

        </div>
        </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    todos: getTodosData(state),
    loadingStarts: getTodosLoading(state),
    completeTodos: completeTodos(state),
    IncompletedTodos: IncompletedTodos(state)
})

const mapDispatchToProps = (dispatch) => ({
    loadAll: () => dispatch(getTodos())
})

export default connect(mapStateToProps, mapDispatchToProps) (TodoList);

