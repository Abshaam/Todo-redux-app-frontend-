
import { useEffect } from "react";
import TodoForm from "./TodoForm";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import { getTodos } from "../store/thunk";
// import styled from "styled-components"



const TodoList = ({ todos, loadAll }) => {

    // loadAll gets called when the page sets in
    useEffect(() => {
        loadAll()
    }, [loadAll])
    
    return (
        <div className="list-wrapper">
            
            {/* input form to add a todo */}
            <TodoForm />

            {/* todos */}
            {
            todos.map((todo, key) => (
                <ListItem task= {todo} key={key} />
            ))
            }

        </div>
    );
};

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    loadAll: () => dispatch(getTodos())
})

export default connect(mapStateToProps, mapDispatchToProps) (TodoList);

