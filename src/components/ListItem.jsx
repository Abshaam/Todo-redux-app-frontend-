
// import {styled, css} from 'styled-components'
import styled, {css} from 'styled-components';
// import css from 'styled-components';
import { changeStatus } from '../store/thunk';
import { removeTodo } from '../store/thunk';
import { connect } from 'react-redux';

const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   border-radius: 8px;
   box-shadow: 0, 4px, 8px, grey;
   margin: 0, 30rem;
   position: relative;
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
        css `
        background-color: blue;
        color: #fff;
        `}

        ${(props) => 
            props.incompleted && 
            css `
            background-color: purple;
            color: #fff;
            `}
    
        
      ${ (props) => 
        props.delete && 
        css `
        background-color: pink;
        color: #fff;
        `}
    
      `;
      
const ListItem = ({task, amend, deleteTodo}) =>{
    return(
        <Wrapper>
            <h3> { task.text} </h3>
            <BtnContainer>

                {
                task.isCompleted? (
                    <Button completed 
                    onClick ={() => amend(task.id)}>
                        Amend to incompleted
                    </Button>
                ) : (
                    <Button incompleted onClick ={() => amend(task.id)}>
                        Amend to completed
                    </Button> 
                )}
                
                <Button delete
                onClick={() => deleteTodo(task.id)} > 
                Delete 
                </Button>

            </BtnContainer>
        </Wrapper>
    )
}

const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (id) => dispatch(removeTodo(id)),
    amend: (id) => dispatch(changeStatus(id)),
});

export default connect(null, mapDispatchToProps) (ListItem);