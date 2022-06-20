
import { useEffect } from "react";
import TodoForm from "./TodoForm";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import { getTodos } from "../store/thunk";
import NavScrollExample from "./Navbar";
import styleup from '../css/todo.module.css';
// import styled from "styled-components"



const TodoList = ({ todos, loadAll, loadingStarts }) => {

    // loadAll gets called when the page sets in
    useEffect(() => {
        loadAll()
    }, [loadAll])
    
    return (
        <>
        <div className = {styleup.back}>
        <NavScrollExample/>
        <div className="list-wrapper">
            
            {/* input form to add a todo */}
            <TodoForm />

            { loadingStarts ? (
                <h3> .....loading </h3>
            ) : (
                // todos 
                
                todos.map((todo, key) => (
                    <ListItem task= {todo} key={key} />
                ))
                
            )}

        </div>
        </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    todos: state.todos.data,
    loadingStarts: state.todos.loading
})

const mapDispatchToProps = (dispatch) => ({
    loadAll: () => dispatch(getTodos())
})

export default connect(mapStateToProps, mapDispatchToProps) (TodoList);

