import React, { Component } from "react";
import className from "classnames";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      disable: true,
      focus: false,
      isChange: true
    };
    this.changeForm = this.changeForm.bind(this);
  }

  changeForm() {
    this.setState({ isChange: !this.state.isChange });
    console.log(this.state.isChange);
  }

  submit = event => {
    event.preventDefault();
    this.changeForm();
  };

  render() {
    const { name, mass, deleteId, changeValue } = this.props;
    return (
      <li>
        <div className="block">
          {this.state.isChange ? (
            <p className="paragraph" onClick={this.changeForm}>{name}</p>
          ) : (
            <form onSubmit={this.submit}>
              <input
                required
                name="name"
                type="text"
                value={name}
                autoFocus={true}
                onChange={changeValue}
                onBlur={this.changeForm}
              />
            </form>
          )}
        </div>
        <p>{mass}</p>
        <button className="delete" onClick={deleteId}>
          Удалить
        </button>
      </li>
    );
  }
}
