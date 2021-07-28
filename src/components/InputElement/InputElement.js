import React, { Component } from 'react'
import './InputElement.css'
import TodoAdder from '../TodoAdder'

class InputElement extends Component {
    

    
        state={allTodo:JSON.parse(localStorage.getItem('allTodosList'))}
    
    

    addTask=()=>{
       console.log('clicked');
        let TodoTask=document.getElementById('inputElement').value
        if (TodoTask==='') {
            alert('please enter a todo task')
        } else {
            let firstTimeUser=localStorage.getItem('isThisTheFirstTime')
            if (firstTimeUser===null){
                // console.log(JSON.stringify([TodoTask.]))
                localStorage.setItem('isThisTheFirstTime','nope')
                localStorage.setItem('allTodosList',JSON.stringify([TodoTask]))
                this.setState({allTodo:[TodoTask]})
                document.getElementById('inputElement').value=''
            }
            else{
                let data= JSON.parse(localStorage.getItem('allTodosList'))
                data.push(TodoTask)  
                localStorage.setItem('allTodosList',JSON.stringify(data))
                data= JSON.parse(localStorage.getItem('allTodosList'))
                this.setState({allTodo:data}) 
                // console.log(data)   
                document.getElementById('inputElement').value='' 
            }
            // this.setState((p)=>{
            //     console.log(p.allTodo)
            //     return {allTodo:p.allTodo.push(TodoTask.value)}
            // })
            
        }

    }    

    removeFromLocalStorage=(todoId)=>{
        
        const dataIndex=parseInt(todoId.slice(7,),10)
        let dataFromLocalStorage= JSON.parse(localStorage.getItem('allTodosList'))
        dataFromLocalStorage.splice(dataIndex,1)
        console.log(dataFromLocalStorage)
        localStorage.setItem('allTodosList',JSON.stringify(dataFromLocalStorage))
        this.setState({allTodo:dataFromLocalStorage})
    }

render() {
    
    console.log('being rendered')
    const {allTodo}=this.state
    const doIrenderTodos=(allTodo!==null && allTodo.length!==0)?true:false
    console.log('doIrenderTodos',doIrenderTodos)        
        return (
            
            <div className="inputContainer">
                <input id='inputElement' type="text" className="inputElement" />
                <div className="buttonHolder">
                    <button className="btn btn-primary" onClick={this.addTask}>Add Task</button>
                </div>
                <div className="allTodoConatiner">
                    {
                    doIrenderTodos?(
                        allTodo.map((eachTodo)=>{return (<TodoAdder key={allTodo.indexOf(eachTodo)} removeFromLocalStorage={this.removeFromLocalStorage} uniqueId={`todoNum${allTodo.indexOf(eachTodo)}`}   eachTodo={eachTodo}/>)})
                        // <p>Todos exist</p>
                    ):(
                        null
                    )
                }
                </div>
            
            
            
            </div>

        )
    }
}


export default InputElement