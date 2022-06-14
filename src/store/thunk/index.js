
import axios from "axios";
import { addTodo, fetchTodos, deleteTodo, amendStatus } from "../action";





// thunk for adding a todo
export const createTodo = (text) => async (dispatch, getState) => {
    try {
        const response = await axios.post('http://localhost:8000/add', {text});

        const { data } = response
        console.log("data", data);

        // if(getState().loading === false) {
        //     alert('yes the state is false')
        // }
        dispatch(addTodo(data));

    } catch (error) {
        console.log(error);
    }
}


// thunk for fetching a todos
export const getTodos = () => async (dispatch, getState) => {
    try {
    const response = await axios.get('http://localhost:8000/fetch');

        const { data } = response
        dispatch(fetchTodos(data));

        console.log(data);
        console.log(response);
        // console.log('this is the state', getState());

    } catch (error) {
        console.log(error.response.data);
    }
}

// thunk for deleting a todo
export const removeTodo = id => async dispatch => {
    try {

    const response = await axios.delete(`http://localhost:8000/delete/${id}`);

        // const { text } = response
        dispatch(deleteTodo(id));

        // console.log('this is the state', getState());

    } catch (error) {
        console.log(error);
    }
}


// thunk for amending a status
export const changeStatus = (id) => async ( dispatch) => {
    try {
    // const {id} = req.params
    const response = await axios.put(`http://localhost:8000/update/${id}`);

        const { data } = response
       
        dispatch(amendStatus(id));
        console.log(data);
        console.log("Identity", id);
        console.log("id",response.data.id);

        // console.log('this is the state', getState());

    } catch (error) {
        console.log(error);
    }
}



// 055378