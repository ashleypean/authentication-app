import React, { useState, useContext } from 'react'
import { DarkModeContext } from '../../utils/DarkModeHook'
import styled from 'styled-components'

const MainDiv = styled.div``

const SignUp = styled.div``

const Logo = styled.div``

const Title = styled.h1``

const Subtitle = styled.h3``

const Form = styled.form``

const Email = styled.input``

const Password = styled.input``

const Button = styled.button``

const SocialMediaAuth = styled.div``

const AlternateLoginText = styled.p``

const LoginSpan = styled.span``

const CreditsText = styled.p``

export default function Homepage() {
  const darkMode = useContext(DarkModeContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <MainDiv>
      
    </MainDiv>
  )
}
