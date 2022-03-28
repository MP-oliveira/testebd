import React from 'react'
import styled, { css } from 'styled-components/macro'

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`

const HeroWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`

const Hero = () => {
  return (
    <HeroSection>
      <HeroWrapper/>
        <h1>Hero</h1>
    </HeroSection>
  )
}

export default Hero