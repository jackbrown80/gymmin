import styled from 'styled-components'
import arrow from '../svg/right-arrow.svg'


export const CardWrapper = styled.div`
  background-color: white;
  border-radius: 3px;
  padding: 15px 20px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.5);
  width: 90%;
  align-self: center;
  margin: 0;
  display: flex;
  align-items: center;
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 80%;
`

export const Title = styled.h1`
  font-style: normal;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 900;
  font-size: 20px;
`

export const Description = styled.p`
  color: #333333;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  margin-top: 10px;
`

export const Arrow = styled.div`
  background-repeat: no-repeat;
  background-size: 25px;
  background-position: center;
  background-image: url(${arrow});
  flex: 1 0 20%;
  height: 50px;
`