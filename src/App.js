import React, { Component } from 'react'

import todosData from './data'
import TodoItem from './TodoItem'

class App extends Component {
	constructor() {
		super()
		this.state = { todos: todosData }
	}
	render() {
		const allTodoItems = this.state.todos.map(item => {
			return <TodoItem item={item} />
		})
		return (
			<div>
				<p>This is a list of to do items...</p>
				{allTodoItems}
			</div>
		)
	}
}

export default App
