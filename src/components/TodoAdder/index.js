import React, { Component } from 'react'
import './index.css'
export default class TodoAdder extends Component {
    
        // const {dataToBeStored}=this.props
        
         removeTodo=()=>{
            //  console.log(this.props)
            const{uniqueId,removeFromLocalStorage}=this.props
            removeFromLocalStorage(uniqueId)
        }
        
        
         RenderTrashIcon=()=>{
            return (
                <div>
                    <i onClick={this.removeTodo} className="far fa-trash-alt delete-icon"></i>
                </div>
            )
        }
render() {
    const {eachTodo,uniqueId}=this.props
        return (
            <div id={uniqueId} className="todoContainer d-flex justify-content-space-between">
                <p>{eachTodo}</p>
                {
                    this.RenderTrashIcon()
                }
            </div>
        )
    }
}
