import React, { Component } from 'react'
import Todo from './Todo'

const style = {
  list: {
    listStyle: 'none',
    padding: 0
  }
}

export default class TodoList extends Component {
  render() {
    const items = this.props.collection.map(item => (
      <Todo
        key={ item.id }
        { ...item }
      />
    ))
    return(
      <ul style={style.list}>
        { items }
      </ul>
    )
  }
}