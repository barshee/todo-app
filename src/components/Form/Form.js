import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="form">
        <form>
          <input name="title" type="text" placeholder="タイトル ※必須" defaultValue="reactの勉強" />
          <textarea name="desc" placeholder="説明を入力" defaultValue="todoアプリを作っています！"></textarea><br/>
          <button type="submit">todoを作成</button>
        </form>
      </div>
    )
  }
}