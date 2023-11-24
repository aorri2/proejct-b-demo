import { Flex } from 'antd'
import React from 'react'
import styled from 'styled-components'

const Header = styled(Flex)`
  width: 1260px;
  height: 80px;
  padding: 4px;
  flex-shrink: 0;
`


export default function SignUpHeader({children,...restprops}) {
  return (
    <Header align='center' gap='8px'  >{children}</Header>
  )
}
