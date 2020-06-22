import styled from 'styled-components'
import mail from '../svg/mail.svg'
import lock from '../svg/lock.svg'
import facebook from '../svg/facebook.svg'
import google from '../svg/google.svg'

export const Tagline = styled.p`
  margin: 0 0 25px 0;
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;
  text-align: center;
`

export const FormsWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  text-align: center;
  width: 90%;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.5);
  margin: auto;
  padding-top: 15px;
`
export const Title = styled.h1`
  font-family: 'Paytone One', sans-serif;
  font-size: 24px;
`

export const Input = styled.input`
  border: none;
  width: 80%;
  background-color: #e5e5e5;
  height: 42px;
  padding-left: 45px;
  margin-top: 25px;
  border-radius: 3px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;
  background-repeat: no-repeat;
  background-size: 21px;
  background-position-x: 12px;
  background-image: ${(props) =>
    props.mail ? `url(${mail})` : `url(${lock})`};
  background-position-y: ${(props) => (props.mail ? '10px' : '9px')};
`

export const ForgotPasswordWrapper = styled.div`
  text-align: right;
  margin: 0 auto;
  width: 80%;
  text-decoration: underline;
`

export const ForgotPasswordLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 12px;
  font-family: 'Josefin Sans', sans-serif;
`

export const SignInButton = styled.button`
  border-radius: 3px;
  border: none;
  width: 50%;
  background-color: #fca311;
  height: 42px;
  margin: 20px 0;
  font-family: 'Paytone One', sans-serif;
  font-size: 18px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
`

export const DividerWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Josefin Sans', sans-serif;
`

export const DividerLine = styled.hr`
  width: 25%;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  margin: 0 30px;
`

export const AltLoginButton = styled.button`
  border: none;
  width: 80%;
  background-color: #e5e5e5;
  height: 42px;
  padding-left: 45px;
  margin-top: 25px;
  border-radius: 3px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;
  background-repeat: no-repeat;
  background-size: 21px;
  background-position-x: 12px;
  color: #ffffff;
  text-align: left;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => (props.facebook ? '#3b5998' : '#d71919')};
  background-image: ${(props) =>
    props.facebook ? `url(${facebook})` : `url(${google})`};
  background-position-y: ${(props) => (props.facebook ? '11px' : '10px')};
  margin-bottom: ${(props) => (props.bottom ? '25px' : null)};
`

export const SignUpPrompt = styled.p`
  margin-top: 15px;
  font-size: 13px;
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  color: white;
  & a {
    color: white;
  }
`
