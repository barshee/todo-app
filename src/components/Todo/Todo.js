import React, { Component  } from 'react'

export default class Todo extends Component {
  render() {
    const className = 'undone'
    const link = this.props.done ? '元に戻す' : '完了!'
    const style = {
      listItem: {
        background: '#EEE',
        padding: 8 * 2,
        marginBottom: 20,
      }
    }

    return (
      <li className={className} style={ style.listItem }>
        <span>{ this.props.id }</span>
        <span>：{this.props.title}</span>
        <a href="">{ link }</a>
        <p>{ this.props.desc }</p>
      </li>
    )
  }
}