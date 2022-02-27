import React, { Component } from 'react';
export default class TodoItems extends Component{
    constructor(){
        super();
        this.newTaskField = React.createRef();
        this.state={isEditing: true, isMarked: true}
        this.remove = this.remove.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.mark = this.mark.bind(this);
    }

    remove(elem){
        var value = elem.target.parentNode.querySelector('span').innerText;
        this.props.remove(value);
    }

    onEditClick(){
        if(this.state.isEditing === true){
            this.setState({isEditing: false});
        }else
        {
            this.setState({isEditing: true});
        }
        
    }

    editTodo(event){
        event.preventDefault();
        var value = this.newTaskField.current.value;
        var i = this.newTaskField.current.id;
        this.props.editTask(value , i);
        this.setState({isEditing: true})
    }

    mark(){
        if(this.state.isMarked === true){
            this.setState({isMarked: false})
        }else
        {
            this.setState({isMarked: true})
        }
    }

    render(){
            
        return(
            <li key={this.props.i} className = {
                ['li-style' , this.state.isMarked || 'marked']
                .filter(e => !!e)
                .join(' ')
            } >
                <span onClick={this.mark} className="li-task-element">{this.props.elem}</span>
                <button onClick={this.remove} className = "btn-style">Delete</button>
                <button onClick={this.onEditClick} className = "btn-style">Edit</button>
                
                {this.state.isEditing || <form onSubmit={this.editTodo}> <input ref={this.newTaskField} id={this.props.i} placeholder={this.props.elem} type="text"/><label className='edit-label'><i>Press enter to edit task</i></label></form>} 
            </li>
          
        );
       
    }
}


