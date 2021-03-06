import styled from 'styled-components'
import add from '../svg/add.svg'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ProgrammeName = styled.input`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 900;
  font-size: 20px;
  text-align: left;
  color: white;
  margin: 0;
  background-color: rgba(0, 0, 0, 0);
  border: none;
`

export const AddButton = styled.button`
  background-color: rgba(0,0,0,0);
  color: white;
  border: none;
  outline: none;
  width: 20%;
  font-size: 25px;
  font-weight: 600;
  &:active {
    transform: scale(0.8);
  }
`

export const FooterWrapper = styled.div`
  position: fixed;
  width: 100%;
  padding: 0 20px;
  bottom: 25px;
`

export const FooterButton = styled.button`
  border-radius: 3px;
  border: none;
  background-color: #fca311;
  padding: 5px 15px;
  font-family: 'Paytone One', sans-serif;
  font-size: 16px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  align-self: flex-end;
  text-align: center;
  width: 100px;
  float: ${(props) => (props.save ? 'right' : null)};
  margin-right: ${(props) => (props.save ? '40px' : null)};
`

export const AddPrompt = styled.p`
  margin-top: 20px;
  color: white;
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 500;
`
