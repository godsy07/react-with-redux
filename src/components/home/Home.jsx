import React from "react";
import { connect } from "react-redux";
import Todo from "../todo/Todo";
import "./home.css";

const Home = ({ todos }) => {
  console.log(todos);
  return (
    <div className='home'>
      <h1>Home Component</h1>
      <div className='add-area'>
        <Todo />
      </div>
      <div className='list-items'></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(Home);
