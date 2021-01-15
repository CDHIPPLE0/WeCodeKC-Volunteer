import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import { FormControl } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { PieChart } from '@material-ui/icons';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ControlPanelDemographics extends Component {
  state = {
    selectDefault: 'Select',
  };
  render() {
    return (
      <div>
        <Grid container>
          <Grid item lg={2}>
            <FormControl style={{ minWidth: 120 }}>
              <Select
                variant="outlined"
                labelId="roleSelection"
                id="roleSelection"
                value={null}
                onChange={null}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={null}></MenuItem>
                <MenuItem value={null}></MenuItem>
                <MenuItem value={null}></MenuItem>
                <MenuItem value={null}></MenuItem>
                <MenuItem value={null}></MenuItem>
                <MenuItem value={null}></MenuItem>
                <MenuItem value={null}></MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="secondary">
              Ascending
            </Button>
            <Button variant="contained" color="secondary" s>
              Descending
            </Button>
          </Grid>
          <Grid item lg={3}>
            <h1>Demographics</h1>
            <h3>Total Volunteers : </h3>
            <h3>Total Mentors : </h3>
            <h3>Total Admins : </h3>
            <Button variant="contained" color="secondary" s>
              Download
            </Button>
          </Grid>
          <Grid item lg={7}>
            <PieChart
              data={[
                { title: 'One', value: 40, color: '#E38627' },
                { title: 'Two', value: 40, color: '#C13C37' },
                { title: 'Three', value: 20, color: '#6A2135' },
              ]}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ControlPanelDemographics);
