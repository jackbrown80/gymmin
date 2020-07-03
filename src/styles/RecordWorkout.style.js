import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 50px;
`
export const Title = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 900;
  font-size: 20px;
  color: white;
  margin: 0px 0 15px 0;
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