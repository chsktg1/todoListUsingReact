import React, { Component } from 'react'
import './Header.css'
import InputElement from '../InputElement/InputElement.js'

export default class Header extends Component {
    render() {
        return (
            <div className="heading">
                <h1>Todo List</h1>
                <InputElement/>
            </div>
        )
    }
}
