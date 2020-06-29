import styled from 'styled-components'
import add from '../svg/add-black.svg'

export const CardWrapper = styled.div`
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.5);
  align-self: center;
  flex: 1 0 100%;
  padding: 8px 10px;
  margin: 10px 10px 20px 10px;
`

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`
export const WorkoutNameInput = styled.input`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 900;
  margin-top: 10px;
  color: black;
  font-size: 18px;
  outline: none;
  border: none;
  width: 70%;
  min-height: 100%;
`

export const AddButton = styled.button`
  background-color: rgba(0,0,0,0);
  color: black;
  border: none;
  outline: none;
  width: 20%;
  font-size: 25px;
  font-weight: 600;
  &:active {
    transform: scale(0.8);
  }
`

export const DeleteButton = styled.button`
  background-color: white;
  border: none;
  outline: none;
  width: 10%;
  font-size: 25px;
  font-weight: 600;
`

export const ExercisesWrapper = styled.div`
  padding: 0 5px;
  margin: 8px 0 0 0;
`

export const ExercisesHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ExerciseTitle = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 15px;
  margin-left: 10px;
  flex: 1 0 45%;
  margin-bottom: 8px;
`

export const SetsTitle = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 15px;
  flex: 1 0 50%;
  text-align: center;
  margin-bottom: 8px;
`

export const Divider = styled.hr`
  width: 100%;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
`
export const ExerciseWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const ExerciseNameInput = styled.input`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;
  margin-top: 8px;
  margin-left: 10px;
  margin-bottom: 8px;
  text-align: left;
  width: 60%;
  outline: none;
  border: none;
`

export const SetsInput = styled.input`
  width: 40%;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 18px;
  text-align: center;
  outline: none;
  border: none;
`
