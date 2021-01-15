import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

//Material-UI imports
import {
  Container,
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
  Chip,
  Box,
} from '@material-ui/core';

class RegisterFormPageTwo extends Component {
  state = {
    motivation_bio: '',
    experience_bio: '',
    background_check_permission: false,
    skills: [],
    time_slot: [],
    languages: [],
  };

  registerUser = (event) => {
    event.preventDefault();

    //  TODO NEED TO FINISH REGISTRATION
    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        ...this.props.store.registration.registrationReducer,
        motivation_bio: this.state.motivation_bio,
        experience_bio: this.state.experience_bio,
        background_check_permission: this.state.background_check_permission,
        skills: this.state.skills,
        time_slot: this.state.time_slot,
      },
    });
    this.props.history.push('/login');
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
    //loop through to get each language from database
    const languages = this.props.store.dropdown.languageReducer.map(
      (item, index) => {
        return (
          <MenuItem value={item.id} key={index}>
            {item.languages_label}
          </MenuItem>
        );
      }
    );
    //loop through to get each skill from database
    const skills = this.props.store.dropdown.skillReducer.map((item, index) => {
      return (
        <MenuItem value={item.id} key={index} name={item.skills_label}>
          {item.skills_label}
        </MenuItem>
      );
    });
    //loop through to get each time slot from database
    const time = this.props.store.dropdown.timeReducer.map((item, index) => {
      return (
        <MenuItem value={item.id} key={index}>
          {item.day_name} {item.time_slot_label}
        </MenuItem>
      );
    });

    return (
      <Container>
        <Grid container justify="center">
          <Grid item>
            <form className="opacity" onSubmit={this.registerUser}>
              <Typography variant="h3" component="h2" gutterBottom>
                Registration
              </Typography>
              {this.props.store.errors.registrationMessage && (
                <h3 className="alert" role="alert">
                  {this.props.store.errors.registrationMessage}
                </h3>
              )}
              <Typography variant="h6" component="h3" gutterBottom>
                More Details
              </Typography>
              <Grid container spacing={3}>
                <Box>
                  <TextField
                    fullWidth
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
                </Box>
                <TextField
                  fullWidth
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
                  Would you be willing to complete a personal background check
                  if requested?
                </FormLabel>
                <RadioGroup
                  row
                  color="secondary"
                  required
                  onChange={this.handleInputChangeFor(
                    'background_check_permission'
                  )}
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="yes"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="no"
                  />
                </RadioGroup>
                <FormControl fullWidth variant="outlined">
                  <Select
                    variant="outlined"
                    labelId="languages"
                    id="languages"
                    multiple
                    value={this.state.languages}
                    onChange={this.handleInputChangeFor('languages')}
                    // input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                      <div>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </div>
                    )}
                  >
                    {languages}
                  </Select>
                  <InputLabel id="languages" variant="outlined">
                    What languages do you speak?
                  </InputLabel>
                </FormControl>

                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="skills">
                    Please select any technical skills you have and would like
                    to use below
                  </InputLabel>
                  <Select
                    labelId="skills"
                    id="skills"
                    multiple
                    value={this.state.skills}
                    onChange={this.handleInputChangeFor('skills')}
                    // input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                      <div>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </div>
                    )}
                  >
                    {skills}
                  </Select>
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="time">Timeslot</InputLabel>
                  <Select
                    labelId="time"
                    id="time"
                    multiple
                    value={this.state.time_slot}
                    onChange={this.handleInputChangeFor('time_slot')}
                    // input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                      <div>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </div>
                    )}
                  >
                    {time}
                  </Select>
                </FormControl>
                <div>
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    onClick={this.handleBackClick}
                    // name="submit"
                    // value="Register"
                  >
                    Back
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    // name="submit"
                    // value="Register"
                  >
                    Submit
                  </Button>
                </div>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(RegisterFormPageTwo));
