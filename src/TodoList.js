import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import "./style.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["555", "fff"]
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        {/* 下面是一个input */}
        {
          // 单行注释这么写
        }
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>

        <ul>
          {this.state.list.map((item, index) => {
            return (
              <Fragment key={index}>
                {/*
                  <li 
                    key={index} 
                    onClick={this.handleItemDelete.bind(this, index)}
                    dangerouslySetInnerHTML={{__html: item}}
                    >
                    {item}}
                  </li>
                */}
                <TodoItem content={item} index={index} deleteItem={this.handleItemDelete} />
              </Fragment>
            );
          })}
        </ul>
      </Fragment>
    );
  }

  handleInputChange(e) {
    // this.setState({
    //   inputValue: e.target.value
    // });
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }

  handleBtnClick() {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue]
    // });
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue]
    }));
  }

  handleItemDelete(index) {
    //immutable => state 不允许我们做任何的改变
    // const list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({
    //   list: list
    // });
    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  }
}
