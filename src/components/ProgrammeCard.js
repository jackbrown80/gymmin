import React from 'react'
import {
    CardWrapper,
  TextWrapper,
  Title,
  Description,
  Arrow,
} from '../styles/ProgrammeCard.style'

const ProgrammeCard = () => {
    return (
        <CardWrapper>
            <TextWrapper>
                <Title>Push, Pull, Legs</Title>
                <Description>Not yet started</Description>
            </TextWrapper>
            <Arrow></Arrow>
        </CardWrapper>
    )
}

export default ProgrammeCard
