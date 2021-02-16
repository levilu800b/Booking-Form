import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";

class Form extends React.Component {
  state = {
      date: "",
      time: "",
      numberofguests: "",
    fname: "Mark",
    lname: "Otto",
    email: "",
    city: "",
    state: "",
    zip: "",
    phonenumber: "",
    message: ""
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
        <Container>
      <div className="Form">
          <h1>BOOK A TABLE</h1>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
            <Row>
            <Col md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                Date
              </label>
              <input
                value={this.state.date}
                name="date"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="XX/XX/XXXX"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </Col>
            <Col md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Time
              </label>
              <input
                value={this.state.time}
                name="time"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="24Hrs Format"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </Col>
            <Col md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Number of Guests
              </label>
              <input
                value={this.state.numberofguests}
                onChange={this.changeHandler}
                type="numberofguests"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="numberofguests"
                placeholder="Choose Your Option"
              />
            </Col>
          </Row>
          <h2>Details</h2>
          <br></br>
          <Row>
            <Col md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                First name
              </label>
              <input
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="First name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </Col>
            <Col md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Last name
              </label>
              <input
                value={this.state.lname}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Last name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </Col>
            <Col md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Email
              </label>
              <input
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="email"
                placeholder="Your Email address"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </Col>
          </Row>
          <Row>
            <Col md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                City
              </label>
              <input
                value={this.state.city}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="city"
                placeholder="City"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </Col>
            <Col md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                State
              </label>
              <input
                value={this.state.state}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="state"
                placeholder="State"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </Col>
            <Col md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Zip
              </label>
              <input
                value={this.state.zip}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="zip"
                placeholder="Zip"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </Col>
          </Row>
          <Row>
          <Col md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                  Phone Number
                  </label>
                  <input
                value={this.state.phonenumber}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="phonenumber"
                placeholder="Phone Number"
                required
              />
              <div className="invalid-feedback">
                Phone Number
              </div>
              </Col>
    <Col md="8"
    className="mb-3">
    <label
      htmlFor="defaultFormRegisterConfirmEx3"
      className="grey-text"
    >
        Message
        </label>
        <textarea
      value={this.state.message}
      onChange={this.changeHandler}
      type="text"
      id="defaultFormRegisterPasswordEx4"
      className="form-control"
      name="message"
      placeholder="Enter Text"
      required
    />
    </Col>
  </Row>
          <Col md="4" className="mb-3">
            <div className="custom-control custom-checkbox pl-3">
              <input
                className="custom-control-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="custom-control-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </Col>
          <Button className="Button" color="primary" type="submit">
            Confirm Booking
          </Button>
        </form>
      </div>
      </Container>
    );
  }
}

export default Form;