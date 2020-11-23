import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='scrollable'
          scrollButtons='auto'
          aria-label='scrollable auto tabs example'
        >
          <Tab label='Regulator' {...a11yProps(0)} />
          <Tab label='Financial Institution' {...a11yProps(1)} />
          <Tab label='Location' {...a11yProps(2)} />
          <Tab label='Document Listing' {...a11yProps(3)} />
          <Tab label='Internal Process' {...a11yProps(4)} />
          <Tab label='Outsourced Processes' {...a11yProps(5)} />
          <Tab label='Products' {...a11yProps(6)} />
          <Tab label='Business Units' {...a11yProps(7)} />
          <Tab label='Reg Bus Lines' {...a11yProps(8)} />
          <Tab label='Basel Risk Categ' {...a11yProps(9)} />
          <Tab label='GL Account' {...a11yProps(10)} />
          <Tab label='Document Mng' {...a11yProps(11)} />
          <Tab label='Document Mng' {...a11yProps(12)} />
          <Tab label='Document Mng' {...a11yProps(13)} />
          <Tab label='Document Mng' {...a11yProps(14)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <form
          method='post'
          style={{ width: "100%" }}
          name='userRegistrationForm'
          //onSubmit={this.submituserRegistrationForm}
        >
          <div className='row margin_top2'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Code</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Country</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>India</option>
                  <option>jordan</option>
                  <option>UK</option>
                </select>
              </div>
              <div className='form-group'>
                <label>View/Upload Documents</label>
                <input type='file' className='form-control ' />
              </div>
              <div className='form-group'>
                <label>Country Risk Rating</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Good</option>
                  <option>Average</option>
                  <option>Low</option>
                </select>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label> Regulator Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Regulator Type</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Central Bank</option>
                  <option>Securities Market</option>
                  <option>Capital Market</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Regulator Compliance Rating</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Good</option>
                  <option>Average</option>
                  <option>Low</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Live Feed Link</label>
                <input type='text' className='form-control' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Website</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Description</label>
                <textarea className='form-control' rows='5'></textarea>
              </div>
            </div>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <form
          method='post'
          style={{ width: "100%" }}
          name='userRegistrationForm'
          //onSubmit={this.submituserRegistrationForm}
        >
          <div className='row margin_top2'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Code</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Country of Incorporation</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>India</option>
                  <option>jordan</option>
                  <option>UK</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Parent Mapping</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Good</option>
                  <option>Average</option>
                  <option>Low</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Registered Office </label>
                <input type='text' className='form-control' />
              </div>

              <div className='form-group'>
                <label>View/Upload Documents</label>
                <input type='file' className='form-control' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Type of FI</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Government</option>
                  <option>Private</option>
                  <option>NBFC</option>
                </select>
              </div>

              <div className='form-group'>
                <label>Relationship with the parent</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Head office</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Corporate Office </label>
                <input type='text' className='form-control' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Regulators</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Central Bank</option>
                  <option>Securities Market</option>
                  <option>Capital Market</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Description</label>
                <textarea className='form-control' rows='5'></textarea>
              </div>
              <div className='form-group'>
                <label>Website</label>
                <input type='text' className='form-control' />
              </div>
            </div>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <form
          method='post'
          style={{ width: "100%" }}
          name='userRegistrationForm'
          //onSubmit={this.submituserRegistrationForm}
        >
          <div className='row margin_top2'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Code</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Parent Location</label>
                <input type='text' className='form-control' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>View/Upload Documents</label>
                <input type='file' className='form-control' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Description</label>
                <textarea className='form-control' rows='5'></textarea>
              </div>
            </div>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <form
          method='post'
          style={{ width: "100%" }}
          name='userRegistrationForm'
          //onSubmit={this.submituserRegistrationForm}
        >
          <div className='row margin_top2'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Code</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>SOP Owner</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Sop1</option>
                  <option>Sop2</option>
                  <option>Sop3</option>
                </select>
              </div>

              <div className='form-group'>
                <label>Document Type</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>(Policy/</option>
                  <option>Sop</option>
                </select>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>SOP Approval Date</label>
                <input type='date' className='form-control' />
              </div>
              <div className='form-group'>
                <label></label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Approved</option>
                  <option>Not Approved</option>
                </select>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Description</label>
                <textarea className='form-control' rows='5'></textarea>
              </div>
              <div className='form-group'>
                <label>View/Upload Documents</label>
                <input type='file' className='form-control' />
              </div>
            </div>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <form
          method='post'
          style={{ width: "100%" }}
          name='userRegistrationForm'
          //onSubmit={this.submituserRegistrationForm}
        >
          <div className='row margin_top2'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Code</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Process Manager</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Process1</option>
                  <option>Process2</option>
                  <option>Process3</option>
                </select>
              </div>

              <div className='form-group'>
                <label> Process Type</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>(Policy/</option>
                  <option>Sop</option>
                </select>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Parent Process </label>
                <select className='form-control'>
                  <option>Process1</option>
                  <option>Process2</option>
                  <option>Process3</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Process Inherent Risk</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Approved</option>
                  <option>Not Approved</option>
                </select>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Description</label>
                <textarea className='form-control' rows='5'></textarea>
              </div>
              <div className='form-group'>
                <label>View/Upload Documents</label>
                <input type='file' className='form-control' />
              </div>
            </div>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <form
          method='post'
          style={{ width: "100%" }}
          name='userRegistrationForm'
          //onSubmit={this.submituserRegistrationForm}
        >
          <div className='row margin_top2'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Code</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Parent Process</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>India</option>
                  <option>jordan</option>
                  <option>UK</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Process Inherent Risk</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Vendor Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Outsourcing date</label>
                <input type='date' className='form-control' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Process Type</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Government</option>
                  <option>Private</option>
                  <option>NBFC</option>
                </select>
              </div>
              <div className='form-group'>
                <label>View/Upload Documents</label>
                <input type='file' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Vendor Code</label>
                <input type='text' className='form-control' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Outsourced Process Manager</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Process1</option>
                  <option> Process2</option>
                  <option>Process3</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Description</label>
                <textarea className='form-control' rows='5'></textarea>
              </div>
              <div className='form-group'>
                <label> Outsourcing Country</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>India</option>
                  <option>jordan</option>
                  <option>UK</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <form
          method='post'
          style={{ width: "100%" }}
          name='userRegistrationForm'
          //onSubmit={this.submituserRegistrationForm}
        >
          <div className='row margin_top2'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Code</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Process Manager</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Process1</option>
                  <option>Process2</option>
                  <option>Process3</option>
                </select>
              </div>

              <div className='form-group'>
                <label>Process Segment</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Retail</option>
                  <option>Corporate/</option>
                  <option>Treasury</option>
                </select>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Parent Process </label>
                <select className='form-control'>
                  <option>Process1</option>
                  <option>Process2</option>
                  <option>Process3</option>
                </select>
              </div>
              <div className='form-group'>
                <label>View/Upload Documents</label>
                <input type='file' className='form-control' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Description</label>
                <textarea className='form-control' rows='5'></textarea>
              </div>
            </div>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <form
          method='post'
          style={{ width: "100%" }}
          name='userRegistrationForm'
          //onSubmit={this.submituserRegistrationForm}
        >
          <div className='row margin_top2'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Code</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Parent</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Currency</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Dollar</option>
                  <option>Rupe</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Product Name </label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Product 1</option>
                  <option>Product 2</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Process Description</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Cost Centre</label>
                <input type='number' className='form-control' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Type</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Government</option>
                  <option>Private</option>
                  <option>NBFC</option>
                </select>
              </div>

              <div className='form-group'>
                <label>Head of Business Unit</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Head office</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Product Description </label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Location </label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>View/Upload Documents</label>
                <input type='file' className='form-control' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Business location</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Description</label>
                <textarea className='form-control' rows='5'></textarea>
              </div>
              <div className='form-group'>
                <label>Process Name</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Process 1</option>
                  <option>Process 2</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Amount Threshold</label>
                <input type='number' className='form-control' />
              </div>
            </div>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={8}>
        <form
          method='post'
          style={{ width: "100%" }}
          name='userRegistrationForm'
          //onSubmit={this.submituserRegistrationForm}
        >
          <div className='row margin_top2'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Code</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Regulator</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Process1</option>
                  <option>Process2</option>
                  <option>Process3</option>
                </select>
              </div>

              <div className='form-group'>
                <label> Business Unit</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Retail</option>
                  <option>Corporate/</option>
                  <option>Treasury</option>
                </select>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label> Parent Business Line </label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Process1</option>
                  <option>Process2</option>
                  <option>Process3</option>
                </select>
              </div>
              <div className='form-group'>
                <label>View/Upload Documents</label>
                <input type='file' className='form-control' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Description</label>
                <textarea className='form-control' rows='5'></textarea>
              </div>
            </div>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={9}>
        <form
          method='post'
          style={{ width: "100%" }}
          name='userRegistrationForm'
          //onSubmit={this.submituserRegistrationForm}
        >
          <div className='row margin_top2'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Code</label>
                <input type='text' className='form-control' />
              </div>

              <div className='form-group'>
                <label> Parent Business Line </label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Process1</option>
                  <option>Process2</option>
                  <option>Process3</option>
                </select>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' />
              </div>

              <div className='form-group'>
                <label>View/Upload Documents</label>
                <input type='file' className='form-control' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Description</label>
                <textarea className='form-control' rows='5'></textarea>
              </div>
            </div>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={10}>
        <form
          method='post'
          style={{ width: "100%" }}
          name='userRegistrationForm'
          //onSubmit={this.submituserRegistrationForm}
        >
          <div className='row margin_top2'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Code</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>GL Account No</label>
                <input type='number' className='form-control' />
              </div>
              <div className='form-group'>
                <label> System maintained </label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Banking names </option>
                </select>
              </div>
              <div className='form-group'>
                <label>Communication</label>
                <input type='text' className='form-control' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Account Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label> System maintained </label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Loss</option>
                  <option>Recovery</option>
                  <option>Both</option>
                </select>
              </div>
              <div className='form-group'>
                <label> Owner of GL </label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Unit 1</option>
                  <option>Unit2</option>
                </select>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Description</label>
                <textarea className='form-control' rows='5'></textarea>
              </div>
              <div className='form-group'>
                <label>View/Upload Documents</label>
                <input type='file' className='form-control' />
              </div>
            </div>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={11}>
        <form
          method='post'
          style={{ width: "100%" }}
          name='userRegistrationForm'
          //onSubmit={this.submituserRegistrationForm}
        >
          <div className='row margin_top2'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Code</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Category</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Process1</option>
                  <option>Process2</option>
                  <option>Process3</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Regulation</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Regulation1</option>
                  <option>Regulation2</option>
                  <option>Regulation3</option>
                </select>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>External Agency Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>View/Upload Documents</label>
                <input type='file' className='form-control' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Description</label>
                <textarea className='form-control' rows='5'></textarea>
              </div>
            </div>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={12}>
        <form
          method='post'
          style={{ width: "100%" }}
          name='userRegistrationForm'
          //onSubmit={this.submituserRegistrationForm}
        >
          <div className='row margin_top2'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Code</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Category</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Process1</option>
                  <option>Process2</option>
                  <option>Process3</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Regulation</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Regulation1</option>
                  <option>Regulation2</option>
                  <option>Regulation3</option>
                </select>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>External Agency Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>View/Upload Documents</label>
                <input type='file' className='form-control' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Description</label>
                <textarea className='form-control' rows='5'></textarea>
              </div>
            </div>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={13}>
        <form
          method='post'
          style={{ width: "100%" }}
          name='userRegistrationForm'
          //onSubmit={this.submituserRegistrationForm}
        >
          <div className='row margin_top2'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Code</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Category</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Process1</option>
                  <option>Process2</option>
                  <option>Process3</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Regulation</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Regulation1</option>
                  <option>Regulation2</option>
                  <option>Regulation3</option>
                </select>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>External Agency Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>View/Upload Documents</label>
                <input type='file' className='form-control' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Description</label>
                <textarea className='form-control' rows='5'></textarea>
              </div>
            </div>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={14}>
        <form
          method='post'
          style={{ width: "100%" }}
          name='userRegistrationForm'
          //onSubmit={this.submituserRegistrationForm}
        >
          <div className='row margin_top2'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Code</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Category</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Process1</option>
                  <option>Process2</option>
                  <option>Process3</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Regulation</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Regulation1</option>
                  <option>Regulation2</option>
                  <option>Regulation3</option>
                </select>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>External Agency Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>View/Upload Documents</label>
                <input type='file' className='form-control' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Description</label>
                <textarea className='form-control' rows='5'></textarea>
              </div>
            </div>
          </div>
        </form>
      </TabPanel>
      <TabPanel value={value} index={15}>
        <form
          method='post'
          style={{ width: "100%" }}
          name='userRegistrationForm'
          //onSubmit={this.submituserRegistrationForm}
        >
          <div className='row margin_top2'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Code</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>Category</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Process1</option>
                  <option>Process2</option>
                  <option>Process3</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Regulation</label>
                <select className='form-control'>
                  <option>Select</option>
                  <option>Regulation1</option>
                  <option>Regulation2</option>
                  <option>Regulation3</option>
                </select>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>External Agency Name</label>
                <input type='text' className='form-control' />
              </div>
              <div className='form-group'>
                <label>View/Upload Documents</label>
                <input type='file' className='form-control' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label>Description</label>
                <textarea className='form-control' rows='5'></textarea>
              </div>
            </div>
          </div>
        </form>
      </TabPanel>
    </div>
  );
}
