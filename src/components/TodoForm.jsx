import formStyle from '../css/todo.module.css'
import { useState } from 'react';
import { createTodo } from '../store/thunk';
import { connect } from 'react-redux';
// import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';




const TodoForm = ({ Alltodos, content }) => {
    const [input, setInput] = useState('');
    return (

        <>

            <Container
                // className={formStyle.todo_form}
                className='mt-5'
                fluid='lg'

            >
                <Row>
                    <Col>
                        <input className={formStyle.todo_input} type="text" 
                        placeholder=" Type a todo"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}


                        input/>
                           

                        

                        {/* button */}
                        <button
                            className={formStyle.todo_button}

                            //  run this at a button click, check to find a duplicate todo
                            onClick={() => {
                                const duplicate = Alltodos.some(tod => tod.text === input);
                                console.log(duplicate);

                                // content(inputValue);

                                // setInputValue('yes');
                               

                                // if no duplicate, run the send the request and empty the input field
                                if (!duplicate) {
                                    

                                    content(input);

                                    setInput(' ');

                                  

                                   
                                    console.log(input);

                                    // run this if no duplicate found
                                } else {
                                    alert(`${input} has being added`)
                                }
                            }}
                           
                        > Add Task
                        </button>

                    </Col>
                </Row>
            </Container>


        </>
    )
}

const mapStateToProps = (state) => ({
    Alltodos: state.todos.data
});

const mapDispatchToProps = (dispatch) => ({
    content: (text) => dispatch(createTodo(text))
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);