import formStyle from '../css/todo.module.css'
import { useState } from 'react';
import { createTodo } from '../store/thunk';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';




const TodoForm = ({ Alltodos, content }) => {
    const [inputValue, setInputValue] = useState('');
    return (

        <>

            <Container
                // className={formStyle.todo_form}
                className='mt-5'
                fluid='lg'

            >
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}


                        >
                            <Form.Control type="text" placeholder=" Type a todo" />

                        </Form.Group>

                        {/* button */}
                        <button
                            className={formStyle.todo_button}

                            //  run this at a button click, check to find a duplicate todo
                            onClick={() => {
                                const duplicate = Alltodos.some(tod => tod.text === inputValue);
                                console.log(duplicate);

                               

                                // if no duplicate, run the send the request and empty the input field
                                if (!duplicate) {
                                    content(inputValue);

                                    setInputValue('');
                                    console.log(inputValue);

                                    // run this if no duplicate found
                                } else {
                                    alert(`${inputValue} has being added`)
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