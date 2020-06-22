import styled from 'styled-components'
import add from '../svg/add-black.svg'

export const WelcomeCardWrapper = styled.div`
  background-color: white;
  border-radius: 3px;
  padding: 15px 20px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.5);
  width: 90%;
  align-self: center;
`

export const WelcomeCardTitle = styled.h1`
  font-style: normal;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 900;
  font-size: 20px;
`
export const WelcomeCardText = styled.p`
  color: #333333;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  margin-top: 10px;
`

export const WelcomeCardCtaWrapper = styled.div`
  display: flex;
`

export const WelcomeCardCtaText = styled.p`
  margin-right: 10px;
  color: #333333;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  margin-top: 10px;
`

export const WelcomeCardCtaButton = styled.button`
  border-radius: 3px;
  border: none;
  background-color: #fca311;
  padding: 5px 15px;
  font-family: 'Paytone One', sans-serif;
  font-size: 16px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  align-self: flex-end;
  text-align: center;
`

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Title = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 900;
  font-size: 20px;
  color: white;
  margin-top: 30px;
`

export const NoProgrammesPrompt = styled.p`
  margin-top: 15px;
  padding: 0;
  font-family: 'Josefin Sans', sans-serif;
  color: white;
  text-align: center;
  font-weight: 500;
`