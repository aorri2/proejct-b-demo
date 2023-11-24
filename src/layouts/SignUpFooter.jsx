import { Flex } from 'antd'
import React from 'react'
import styled from 'styled-components'


const Footer = styled(Flex)`
    width: 1260px;
    padding: 16px 0px;
`

export default function SignUpFooter({children}) {
  return (
    <Footer vertical={true} align='center' gap="4px">
        {children}
    </Footer>    
  )
}
