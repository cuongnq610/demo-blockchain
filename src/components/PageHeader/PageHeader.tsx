import React from 'react'
import styled from 'styled-components'

import Container from '../Container'

interface PageHeaderProps {
  icon: React.ReactNode
  subtitle?: string
  title?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {
  return (
    <Container size="md">
      <StyledPageHeader>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
        <StyledIcon>{icon}</StyledIcon>
      </StyledPageHeader>
    </Container>
  )
}

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
  padding-top: ${(props) => props.theme.spacing[6]}px;
  margin: 0 auto;
`

const StyledIcon = styled.div`
  font-size: 120px;
  // height: 120px;
  line-height: 120px;
  text-align: center;
  width: 120px;
  display: flex;
  justify-content: center;
`

const StyledTitle = styled.h1`
  font-family: 'Kaushan Script', sans-serif;
  // color: ${(props) => props.theme.color.grey[600]};
  color: rgb(223, 238, 255);;
  font-size: 62px;
  letter-spacing: 5px;
  text-align: center;
  font-weight: 700;
  margin: 0;
  padding: 0;
`

const StyledSubtitle = styled.h3`
  // color: ${(props) => props.theme.color.grey[400]};
  color: rgb(160, 172, 186);
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default PageHeader
