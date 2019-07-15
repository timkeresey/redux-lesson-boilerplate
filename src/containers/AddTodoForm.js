import React, { Component } from 'react';
import { addToDo } from '../actions';
import { connect } from 'react-redux';

class AddToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  submitForm = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.submitForm}>
          <input
            value={this.state.text}
            placeholder="Add A Todo"
            onChange={this.handleChange} />
          <button>Add Todo</button>
        </form>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (text) => dispatch( addToDo(text) )
})

export default connect(mapStateToProps, mapDispatchToProps)(AddToDoForm);
