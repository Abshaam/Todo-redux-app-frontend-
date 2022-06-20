
// import {styled, css} from 'styled-components'
import styled, { css } from 'styled-components';
import formStyle from '../css/todo.module.css'
// import css from 'styled-components';
import { changeStatus } from '../store/thunk';
import { removeTodo } from '../store/thunk';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import pic2 from '../images/todolist.jpg'


const Header = styled.div`
//    justify-content: space-between;
//    border-radius: 8px;
//    box-shadow: 0, 4px, 8px, grey;
   margin: 0, 30rem;
//    position: relative;
   padding: 6px;
    `;



const BtnContainer = styled.div`
   display: flex;
   gap: 1rem;
//    justify-content: space-between
//    position: absolute;
//    rignt: 12px;
//    buttom: 12px;`;

const Button = styled.button`
      padding: 8px;
      border-radius: 8px;
      border: none;
      outline: none;
      cursor: ponter;

      ${(props) =>
        props.completed &&
        css`
        background-color: blue;
        color: #fff;
        `}

        ${(props) =>
        props.incompleted &&
        css`
            background-color: purple;
            color: #fff;
            `}
    
        
      ${(props) =>
        props.delete &&
        css`
        background-color: pink;
        color: #fff;
        `}
    
      `;

const ListItem = ({ task, amend, deleteTodo }) => {
    return (

        <div className={formStyle.wrap}>
            <Header>
                <Card>
                    <Card.Body>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pic2} alt="" />
                            <Card.Body>
                                <Card.Title>TODO</Card.Title>
                                <Card.Text>
                                    <Card>
                                        <Card.Body>{task.text}</Card.Body>
                                    </Card>
                                </Card.Text>
                                <BtnContainer>
                                    {
                                        task.isCompleted ? (
                                            <Button completed
                                                onClick={() => amend(task.id)}>
                                                incomplete
                                            </Button>
                                        ) : (
                                            <Button incompleted onClick={() => amend(task.id)}>
                                                complete
                                            </Button>
                                        )}

                                    <Button delete
                                        onClick={() => deleteTodo(task.id)} >
                                        Delete
                                    </Button>

                                </BtnContainer>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>


                {/* <Card>
            <Card.Body>{ task.text}</Card.Body>
           </Card> */}


                <h3>  </h3>
                {/* <BtnContainer>

                {
                task.isCompleted? (
                    <Button completed 
                    onClick ={() => amend(task.id)}>
                         incomplete
                    </Button>
                ) : (
                    <Button incompleted onClick ={() => amend(task.id)}>
                         complete
                    </Button> 
                )}
                
                <Button delete
                onClick={() => deleteTodo(task.id)} > 
                Delete 
                </Button>

            </BtnContainer> */}
            </Header>
        </div>


    )
}

const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (id) => dispatch(removeTodo(id)),
    amend: (id) => dispatch(changeStatus(id)),
});

export default connect(null, mapDispatchToProps)(ListItem);