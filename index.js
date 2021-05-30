import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1> REGISTRATION FORM </h1>
      <p>Enter your first name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your last name:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <p>Enter the user name:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <p>Enter your address:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <p>Enter your E-mail:</p>
      <input
        type='email'
        name='age'
        onChange={this.myChangeHandler}
      />
      <p>Enter password:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <p>Confirm password:</p>
      <input
        type='password'
        name='age'
        onChange={this.myChangeHandler}
      />
      <br></br>
      <br></br>
      
      <input
        type='button' value="Register"
        name='age' 
        onChange={this.myChangeHandler}
      />
     <p><i>Thank You For Your Registration!!!</i></p>
    </form>
  

    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
