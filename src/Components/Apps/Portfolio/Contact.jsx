// Import node_modules
import React from "react";
import styled from "styled-components";

// Import class
import "./../../../Assets/CSS/Contact.css";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      message: "",
      emailSending: false,
      emailError: false,
      emailSent: false,
    };
  }

  async sendEmail() {
    // Dummy email
    this.setState({
      emailSent: true,
      emailSending: false,
      emailError: false,
      username: "",
      email: "",
      message: "",
    });

    /*
      ###############################################################
      Removed along with backend, will be added in next major version 
      ###############################################################
    */

    // fetch('/email', {
    //     method: "POST",
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({name: this.state.username, email: this.state.email, message: this.state.message})
    // }).then(res => {
    //     setTimeout(() => {
    //         if(res.status !== 200){
    //             return this.setState({emailError: true, emailSending: false});
    //         };
    //         this.setState({emailSent: true, emailSending: false, emailError: false, username: "", email: "", message: ""});
    //     }, 1000)
    // });
  }

  render() {
    let formbtn =
      this.state.emailSending === true ? (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : this.state.emailError === true ? (
        "Error! Try again"
      ) : (
        "Submit"
      );
    return (
      <Container id="contact">
        <Title>Contact Me</Title>
        <DescriptionContainer>
          <Description>
            My inbox is always open. Whether you have a question, you want to
            discuss a new opportunity or just want to say HI, I'll try my best
            to get back to you as soon as possible!
          </Description>
        </DescriptionContainer>
        <FormContainer>
          <UsernameInput
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.username}
            onChange={(event) =>
              this.setState({ username: event.target.value })
            }
          />
          <EmailInput
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={(event) => this.setState({ email: event.target.value })}
          />
          <TextInput
            name="message"
            rows="10"
            placeholder="Message"
            value={this.state.message}
            onChange={(event) => this.setState({ message: event.target.value })}
          />
          {this.state.emailSent === false ? (
            <GreenButton
              onClick={() => {
                if (this.state.emailSent) return;
                if (
                  this.state.username.replace(/ /g, "").length < 1 ||
                  this.state.email.replace(/ /g, "").length < 1 ||
                  this.state.message.replace(/ /g, "").length < 1
                )
                  return;
                this.sendEmail();
                this.setState({ emailSending: true });
              }}
            >
              {formbtn}
            </GreenButton>
          ) : (
            <PurpleButton>🎉 Speak soon!</PurpleButton>
          )}
        </FormContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.font};
  font-family: "Exo", sans-serif;
  border-radius: 16px;
  overflow: auto;

  @media (max-width: 768px) {
    background-color: ${(props) => props.theme.colors.primary};
    box-shadow: none;
  }
`;

const Title = styled.h1`
  margin: 30px 0 10px 0;
`;

const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.p`
  width: 100%;
  max-width: 650px;
  margin: 10px 0 20px 0%;
  font-size: 17px;
  text-align: center;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;

const UsernameInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  margin: 10px;
  font-family: "Exo", sans-serif;
  font-size: 16px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.font};
  border-radius: 8px;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.highlight};
  }
`;

const EmailInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  margin: 10px;
  font-family: "Exo", sans-serif;
  font-size: 16px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.font};
  border-radius: 8px;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.highlight};
  }
`;

const TextInput = styled.textarea`
  width: 100%;
  max-width: 502px;
  min-height: 250px;
  max-height: 250px;
  padding: 10px;
  margin: 10px;
  font-family: "Exo", sans-serif;
  font-size: 16px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.font};
  border-radius: 8px;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.highlight};
  }
`;

const GreenButton = styled.a`
  background-color: #38bb79;
  border: none;
  color: #fff;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
  width: 150px;
  margin-top: 25px;
  border-radius: 8px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #3bce85;
    box-shadow: 0 5px 15px rgba(59, 206, 133, 0.4);
    animation: shine 5s ease-in-out infinite;
    animation-fill-mode: forwards;
  }
`;

const PurpleButton = styled.a`
  background-color: #4a3bce;
  border: none;
  color: #fff;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
  width: 150px;
  margin-top: 25px;
  border-radius: 8px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #5747e7;
    box-shadow: rgb(74 59 206 / 60%) 0px 5px 15px;
    animation: shine 5s ease-in-out infinite;
    animation-fill-mode: forwards;
    cursor: no-drop;
  }
`;
