import formStyle from '../css/todo.module.css'
import { useState } from 'react';
import { createTodo } from '../store/thunk';
import { connect } from 'react-redux';
import  pic1  from '../images/flower.jpg'
import Image from 'react-bootstrap/Image'


const TodoForm = ({ Alltodos, content}) =>{
    const [inputValue, setInputValue] = useState('')
    return(

        <>

        <div className={formStyle.todo_form}>
            <input type="text"
             className={formStyle.todo_input}
             value = { inputValue } 
             onChange = {(e) => setInputValue(e.target.value)}
              />

            {/* button */}
            <button
             className={formStyle.todo_button}

            //  run this at a button click, check to find a duplicate todo
            onClick= {() =>{
                const duplicate = Alltodos.some(tod => tod.text === inputValue);
                console.log(duplicate);

                // if no duplicate, run the send the request and empty the input field
                if(!duplicate) {
                    content(inputValue);
                    setInputValue('')   
                
                    // run this if no duplicate found
                } else {
                    alert(`${inputValue} has being added`)
                }
            }}
            > Add Task
            </button>

            
        </div>

        {/* <div> */}
            <Image src= { pic1 } alt="" />
        {/* </div> */}
        </>
    )
}

const mapStateToProps = (state) => ({
    Alltodos: state.todos.data
});

const mapDispatchToProps = (dispatch) => ({
    content: (text) => dispatch(createTodo(text))
});

// store.subscribe(() => setTodos(store.getState()))

export default connect(mapStateToProps, mapDispatchToProps) (TodoForm);