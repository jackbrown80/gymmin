import styled from 'styled-components'
import mail from '../svg/mail.svg'
import lock from '../svg/lock.svg'
import user from '../svg/user.svg'

export const Tagline = styled.p`
  margin: 0 0 25px 0;
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;
  text-align: center;
`

export const FormWrapper = styled.div`
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
    props.mail ? `url(${mail})` : props.user ? `url(${user})` : `url(${lock})`};
  background-position-y: ${(props) =>
    props.mail ? '10px' : props.user ? '10px' : '9px'};
`

export const SignUpButton = styled.button`
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
