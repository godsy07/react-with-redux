import React from "react";
import { connect } from "react-redux";
import Todo from "../todo/Todo";
import "./home.css";

const Home = ({ todos }) => {
  return (
    <div className='home'>
      <h1>Home Component</h1>
      <div className='add-area'>
        <Todo />
      </div>
      <div className='list-items'>
        {todos && todos.map((el) => <p key={el.id}>{el.text}</p>)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(Home);
