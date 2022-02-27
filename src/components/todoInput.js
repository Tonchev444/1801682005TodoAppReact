import React from 'react';

export class TodoInput extends React.Component{
    constructor(){
        super();
        this.justSubmitted = this.justSubmitted.bind(this);
    }

    justSubmitted(event){
        event.preventDefault();
        var input = event.target.querySelector('input');
        var value = input.value;
        input.value = '';
        this.props.updateList(value);
    }

    render(){
        return(
            <form onSubmit={this.justSubmitted}  className = "input-style">
                <input type="text" placeholder='Type here'/>
                <label className='add-task-label'>Press enter to add task</label>
            </form>
        );
    }
}