import React, { Component } from 'react'

class TodoItem extends Component {
	constructor() {
		super()
		this.state = {}
	}
	render() {
		return (
			<div>
				{console.log(this.state, this.props)}
				<hr />
				<input
					type='checkbox'
					onChange={() => {
						console.log('Change')
					}}
					checked={this.props.item.status}
				/>
				<h1>{this.props.item.title}</h1>
			</div>
		)
	}
}

export default TodoItem
