import React from 'react'
import axios from 'axios'
// import './Calendar.css'
// class Calendar extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         value: "",
//       todos: [],
//       };
//     }


//     render() {
//         return (
//             <div className="container" style={{margin:'100px auto',
//                 width:'809px'}}>
//   <div className="calendar light">
//     <div className="calendar_header" style ={{borderBottom: '2px solid rgba(0, 0, 0, 0.08)'}}>
//       <h1 className = "header_title">Calendar</h1>
//       <p className="header_copy" style ={{color:'$light_grey',
//   fontSize:'20px'}}> Today's Plan</p>
//     </div>
//     <div className="calendar_plan" style={{margin:'20px 0 40px'}}>
//       <div className="cl_plan" style={{  width:'100%',
//   height: '140px',
//   backgroundImage: 'linear-gradient(-222deg, #FF8494, #ffa9b7)',
//   boxShadow: '0px 0px 52px -18px rgba(0, 0, 0, 0.75)',
//   padding:'30px',
//   color:'#fff'}}>
//         <div className="cl_title">Today</div>
//         <div className="cl_copy">22nd  April  2018</div>
//         <div className="cl_add">
//           <i className="fas fa-plus"></i>
//         </div>
//       </div>
//     </div>

// /</div>
// </div>
  
//         )
//     }
// }

// export default Calendar


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
      this.setState({
        todos: [],
      });
  
      axios.post(`/calendar`, { todo: [] }).then((res) => {
        console.log(res);
        console.log(res.data);
      });
    }
  
    render() {
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
