import React, {Component} from 'react'
import { Link, Redirect } from 'react-router-dom'
/* Import Components */
import CheckBox from '../components/CheckBox';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Select from '../components/Select';
import Button from '../components/Button'
import ImageInput from '../components/ImageInput'
import { handleSaveUser } from '../actions'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'


class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        age: '',
        gender: '',
        skills: [],
        about: ''

      },
      toHome: false,

      genderOptions: ['Male', 'Female', 'Others'],
      skillOptions: ['Programming', 'Development', 'Design', 'Testing']

    }
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleInput(e) {
       let value = e.target.value;
       let name = e.target.name;
   this.setState( prevState => ({ newUser :
        {...prevState.newUser, [name]: value
        }
      }), () => console.log(this.state.newUser))
  }

  handleTextArea(e) {
    const value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser, about: value
      }
      }), ()=>console.log(this.state.newUser))
  }


  handleCheckBox = e => {
  const newSelection = e.target.value;
  let newSelectionArray;

  if (this.state.newUser.skills.indexOf(newSelection) > -1) {
    newSelectionArray = this.state.newUser.skills.filter(
      s => s !== newSelection
    );
  } else {
    newSelectionArray = [...this.state.newUser.skills, newSelection];
  }

  this.setState(prevState => ({
    newUser: { ...prevState.newUser, skills: newSelectionArray }
  }));
};

 handleClearForm = () => {
  this.setState({
    newUser: {
      name: "",
      age: "",
      gender: "",
      skills: [],
      about: ""
    }
  });
};

  handleRedirect = () => {
  this.setState(() => ({
    toHome: true
  }));
};

  handleFormSubmit = e => {
  e.preventDefault();
  const { dispatch } = this.props;
  const userData = this.state.newUser;

  dispatch(
    handleSaveUser(userData, [this.handleClearForm(), this.handleRedirect()])
  );
};


  render() {

    if (this.state.toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
      <Link to='/'>Close</Link>

        <Form className="container-fluid" onSubmit={this.handleFormSubmit}>

            <Input inputtype={'text'}
                   title= {'Full Name'}
                   name= {'name'}
                   value={this.state.newUser.name}
                   placeholder = {'Enter your name'}
                   handlechange = {this.handleInput}

                   /> {/* Name of the user */}

          <Input inputtype={'number'}
                 name={'age'}
                 title= {'Age'}
                 value={this.state.newUser.age}
                 placeholder = {'Enter your age'}
                 handlechange={this.handleInput} /> {/* Age */}


          <Select title={'Gender'}
                  name={'gender'}
                  options = {this.state.genderOptions}
                  value = {this.state.newUser.gender}
                  placeholder = {'Select Gender'}
                  handleChange = {this.handleInput}
                  /> {/* Age Selection */}
          <CheckBox  title={'Skills'}
                  name={'skills'}
                  options={this.state.skillOptions}
                  selectedOptions = { this.state.newUser.skills}
                  handleChange={this.handleCheckBox}
                   /> {/* Skill */}

          <ImageInput
            className='create-contact-avatar-input'
            name='avatarUrl'
            maxHeight={64}
            />

          <TextArea
            title={'About you.'}
            rows={10}
            value={this.state.newUser.about}
            name={'currentPetInfo'}
            handleChange={this.handleTextArea}
            placeholder={'Describe your past experience and skills'} />{/* About you */}

          <Button
              action = {this.handleFormSubmit}
              type = {'primary'}
              title = {'Submit'}
            style={buttonStyle}
          /> { /*Submit */ }

          <Button
            action = {this.handleClearForm}
            type = {'secondary'}
            title = {'Clear'}
            style={buttonStyle}
          /> {/* Clear the form */}

        </Form>

        </div>

    );
  }
}

const buttonStyle = {
  margin : '10px 10px 10px 10px'
}

export default connect()(FormContainer)