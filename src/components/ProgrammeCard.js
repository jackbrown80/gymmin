import React from 'react'
import {
    CardWrapper,
  TextWrapper,
  Title,
  Description,
  Arrow,
} from '../styles/ProgrammeCard.style'

const ProgrammeCard = (props) => {
    return (
        <CardWrapper>
            <TextWrapper>
                <Title>{props.title}</Title>
                <Description>{props.desc}</Description>
            </TextWrapper>
            <Arrow onClick={props.arrowClick}></Arrow>
        </CardWrapper>
    )
}

export default ProgrammeCard
