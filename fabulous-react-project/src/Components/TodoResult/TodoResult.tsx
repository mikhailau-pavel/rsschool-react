import { FC, useState } from "react";
import { todoAPI } from "../../apiService/MovieServer";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { appSlice } from "../../store/reducers/AppReducer";

 const TodoResult: FC = () => {
    
    const {queryString} = useAppSelector(state => state.appReducer)
    const [inputValue, setInputValue] = useState(queryString)

    const [newLimit, setLimit] = useState(1)
    const {showDetails, setQueryString} = appSlice.actions
    const {data: todoList, isLoading} = todoAPI.useFetchAllTodosQuery({limit: newLimit, page: 1, search: queryString})
   
    const dispatch = useAppDispatch()

    const changeInputHandle = (event: React.FormEvent<HTMLInputElement>) => {
          setInputValue(event.currentTarget.value)
          
      };


    const buttonHandler = () => {
        localStorage.setItem('request', inputValue)
        dispatch(setQueryString(inputValue))

    }

    const limitButton = () => {
        setLimit(newLimit + 1)
    }

    return (<div>

        <div>
            <input type="text" onChange={changeInputHandle} value={inputValue}/>
            <button onClick={buttonHandler}>Click</button>
        </div>
        <button onClick={limitButton}>set new limit</button>
        {isLoading && <h1>Loading list...</h1>}
        <ul>{todoList && todoList.map((todo) => {
            return <li key={todo.id} onClick={()=>dispatch(showDetails())}>{todo.title}<br/>{todo.completed}</li>
        })}</ul>
    </div>)
}

export default TodoResult