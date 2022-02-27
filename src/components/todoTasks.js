import React from 'react';
import TodoItems from './todoItems';

export class TodoTasks extends React.Component{
    render(){
        var items = this.props.tasks.map((elem, i) =>{
            return  (
                <TodoItems key={i} elem={elem} i={i} remove={this.props.remove} editTask={this.props.editTask}/> 
            );
        });
        return(
          <ul className='task-list'>
             {items}
          </ul>
          
        );
       
    }
}    
