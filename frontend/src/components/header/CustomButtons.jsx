import { Box, Button, Typography , styled} from '@mui/material'
import {ShoppingCart} from '@mui/icons-material'
import React from 'react'


const Wrapper = styled(Box)`
   display:flex;
   margin:0 3% 0 auto;
   & > button , & > p, & > div{
    margin-right:40px;
    font-size:16px;
    align-items: centre;
   }
`


const Container = styled(Box)`
display:flex;
padding-top:4px;

`
const LoginButton = styled(Button)`
 color: #2874f0;
 background:#FFFFFF;
 text-transform: none;
 padding: 5px 40px;
 border-radius:2px;
 box-shadow:none;
 font-weight:600;
 height:32px;
`
export default function CustomButtons() {

  return (
    <Wrapper>
        <LoginButton variant='contained'>Login</LoginButton>
        <Typography style={{marginTop:3 , width:135}}>Become a Seller</Typography>
        <Typography style={{ marginTop: 3 }}>More</Typography>

        <Container>
            <ShoppingCart></ShoppingCart>
            <Typography>
                Cart
            </Typography>
        </Container>
    </Wrapper>
  )
}
