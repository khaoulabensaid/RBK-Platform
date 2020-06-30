import React from 'react'
import axios from 'axios'
import $ from "jquery";


class Calendar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: "",
        todos: [],
        // todo: null,
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.clearList = this.clearList.bind(this);
    }
  
    handleChange(event) {
      this.setState({ value: event.target.value });
      //console.log(this.state.value)
    }
  
    handleSubmit(event) {
      event.preventDefault();
  
      const todo = {
        value: this.state.value,
      };
      console.log("hi");
  
      axios.post(`/calendar`, todo ).then((res) => {
        console.log(res);
        this.setState({ todos: res.data });
      });
    }
  
    componentWillMount() {
      fetch("/calendar")
        .then((res) => res.json())
        .then((todos) =>
          this.setState({ todos }, () => console.log("todos here fetched", todos))
        );
    }
  
    deleteItem(id) {
      console.log(id);
      const todoos = this.state.todos.filter((todo) => {
        return todo["_id"] !== id;
      });
      console.log(todoos);
      this.setState({
        todos: todoos,
      });
      axios.delete(`/${id}`).then((res) => {
        console.log(res);
        console.log(res.data);
      });
    }
  
    clearList() {
        this.state.todos.map(todo => {
            var todoID = todo['_id']
            axios.delete(`${todoID}`).then(res => {
                console.log('deleted all!')
            })
        })
      this.setState({
        todos: [],
      });
  
      axios.post(`/calendar`, { todo: [] }).then((res) => {
        console.log(res);
        console.log(res.data);
      });
    }
    
  
    render() {
        if (this.state.todos.length === 0) {
            $('#todosID').hide()
        } else  {
            $('#todosID').show()
        }
        console.log(this.state)
      return (
        <div style={{ textAlign: "center" }}>
          <form onSubmit={this.handleSubmit} className="form-horizontal">
            <label>
              <h1 style={{marginTop: '25px'}}>
                <span style={{ color: "#0066ff" }}>Today's</span> Calendar
              </h1>
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Add an event..."
              />
            </label>
            <input
              type="submit"
              value="Submit"
              placeholder="Add an event..."
              onClick={this.handleClick}
              // style={{ marginLeft: '1%' }}
              className="btn btn-success"
            />
          </form>
          <ul
            style={{
              borderStyle: "solid",
              borderWidth: "5px",
              marginRight: "15%",
              marginLeft: "15%",
              borderRadius: "8px",
            }}
            className="rounded-sm"
            id='todosID'
          >
            {this.state.todos.map((todo, i) => {
              return (
                <div
                  key={i}
                  style={{ textAlign: "center", position: "relative" }}
                >
                  <li
                    key={todo["_id"]}
                    style={{ listStyleType: "none", marginTop: "1%" }}
                  >
                    {todo.value}
                    <button
                      className="btn btn-danger"
                      key={todo["_id"]}
                      onClick={this.deleteItem.bind(this, todo["_id"])}
                    >
                      Delete
                    </button>
  
                    <hr></hr>
                  </li>
                </div>
              );
            })}
          </ul>
          <button onClick={this.clearList}>Clear List</button>
        </div>
      );
    }
  }

  export default Calendar;
