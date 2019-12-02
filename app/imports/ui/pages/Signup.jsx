import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Container, Form, Grid, Message, Header, Segment } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';
import SUBar from '../components/SUBar';
import SUFooter from '../components/SUFooter';

/**
 * Signup component is similar to signin component, but we create a new user instead.
 */
class Signup extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email: '',
      password: '',
      error: '',
      redirectToReferer: false };
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  /** Handle Signup submission. Create user account and a profile entry, then redirect to the home page. */
  submit = () => {
    const { user, email, password } = this.state;
    Accounts.createUser({ user, email, username: user, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  /** Display the signup form. Redirect to add page after successful registration and login. */
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/home' } };
    // if correct authentication, redirect to from: page instead of signup screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }
    return (
        <div>
          <SUBar/>
          <div id='sign-page'>
          <div id='sign-up'>
      <Container>
        <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
          <Grid.Column>
            <Segment>
            <Form onSubmit={this.submit}>
              <Header id='header' as='h2' textAlign='center'>
                Create an Account
              </Header>
              <p id='span'>
               Johnsonslist is an easy way to sell goods to other UH community members
              </p>
              <div className='ui divider'/>
              <Form.Group>
                  <Form.Input
                    width={8}
                    label='First Name'
                    icon='user'
                    iconPosition='left'
                    name='firstname'
                    type='name'
                    placeholder="First Name"
                    onChange={this.handleChange}
                    required
                  />
              <Form.Input
                  width={8}
                  label='Last Name'
                  icon='user'
                  name='lastname'
                  iconPosition='left'
                  type='name'
                  placeholder="Last Name"
                  onChange={this.handleChange}
                  required
              />
              </Form.Group>
              <Form.Input
                  width={16}
                  label='Careful, this is what others will see when they interact with you'
                  icon="id badge"
                  iconPosition="left"
                  name="user"
                  type='name'
                  placeholder="Username"
                  onChange={this.handleChange}
                  required
              />
                <Form.Input
                    width={16}
                    label='Email'
                    icon="envelope"
                    iconPosition="left"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                    required
                />
                <Form.Input
                    width={16}
                    label='Password'
                    icon="lock"
                    iconPosition="left"
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={this.handleChange}
                    required
                />
              <div className='ui divider'/>
                <Form.Button
                    fluid
                    color='blue'
                    content="Done"/>
            </Form>
            </Segment>
            {this.state.error === '' ? (
              ''
            ) : (
              <Message
                error
                header="Registration was not successful"
                content={this.state.error}
              />
            )}
          </Grid.Column>
        </Grid>
      </Container>
          </div>
            <SUFooter/>
          </div>
        </div>
    );
  }
}

/** Ensure that the React Router location object is available in case we need to redirect. */
Signup.propTypes = {
  location: PropTypes.object,
};

export default Signup;
