import React from "react";
import { Form, Button } from 'react-bootstrap';

const Contact = (props) => {
    if (props.sharedBasicInfo) {
      var networks = props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <section id="contact">
        <div class="d-grid gap-2 col-4 mx-auto">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>

        <div class="d-grid gap-2 col-4 mx-auto">
          <div className="row justify-content-center">
          <div className="social-links">{networks}</div>
          </div>

          <div className="row justify-content-center">
          <a type="button" href={props.sharedBasicInfo.calendly} className="btn btn-primary btn-lg p-3 m-3">Schedule Phone Call</a>
          </div>
        </div>
      </section>
    );
  }

export default Contact;
