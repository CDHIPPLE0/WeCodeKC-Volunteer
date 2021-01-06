import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

//Material-UI imports
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem,
  Button,
  Grid,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
} from '@material-ui/core';

class RegisterFormPageTwo extends Component {
  state = {
    motivation_bio: '',
    experience_bio: '',
    background_check_permission: false,
    custom_entry_skills: '',
    backClicked: false,
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
      },
    });
  }; // end registerUser

  //go back to first page of registration
  handleBackClick = (e) => {
    this.props.history.push('/registration/page/1');
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    // const skills = this.props.store.skillReducer.map((item, index) => {
    //   return (
    //     <MenuItem value={item.id} key={index}>
    //       {item.day}
    //     </MenuItem>
    //   );
    // });

    return (
      <div>
        <form className="formPanel" onSubmit={this.registerUser}>
          <Typography variant="h3" component="h2" gutterBottom>
            Mentor Registration
          </Typography>
          {this.props.store.errors.registrationMessage && (
            <h3 className="alert" role="alert">
              {this.props.store.errors.registrationMessage}
            </h3>
          )}
          <Typography variant="h6" component="h3" gutterBottom>
            Personal Details
          </Typography>
          <Grid container spacing={3}>
            <TextField
              multiline
              rows={4}
              placeholder="What motivated you to mentor with us?"
              type="text"
              name="motivation"
              value={this.state.motivation_bio}
              required
              variant="outlined"
              onChange={this.handleInputChangeFor('motivation_bio')}
            />
            <TextField
              multiline
              rows={4}
              placeholder="Do you have any previous volunteer experience with other youth serving organizations? Please give a brief description of your role and responsibilities."
              type="text"
              name="experience_bio"
              value={this.state.experience_bio}
              required
              variant="outlined"
              onChange={this.handleInputChangeFor('experience_bio')}
            />
            <FormLabel>
              Would you be willing to complete a personal background check if
              requested?
            </FormLabel>
            <RadioGroup
              color="secondary"
              required
              onChange={this.handleInputChangeFor(
                'background_check_permission'
              )}
            >
              <FormControlLabel value="true" control={<Radio />} label="yes" />
              <FormControlLabel value="false" control={<Radio />} label="no" />
            </RadioGroup>

            {/* <FormControl>
            <InputLabel id="">Chip</InputLabel>
            <Select
              labelId="education_level"
              id="education_level"
              multiple
              value={this.state.education_level}
              onChange={this.handleInputChangeFor('education_level')}
              input={<Input id="select-multiple-chip" />}
              renderValue={(selected) => (
                <div>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
              // MenuProps={MenuProps}
            >
              {level}
            </Select>
          </FormControl> */}
          </Grid>
          <div>
            <Button
              variant="outlined"
              type="submit"
              onClick={this.handleBackClick}
              // name="submit"
              // value="Register"
            >
              Back
            </Button>
            <Button
              variant="outlined"
              type="submit"
              // name="submit"
              // value="Register"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(RegisterFormPageTwo));
