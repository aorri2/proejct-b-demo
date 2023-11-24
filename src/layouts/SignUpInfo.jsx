import { Flex } from 'antd'
import React from 'react'
import styled from 'styled-components'

const SignUpInfoContaier = styled(Flex)`
    width: 320px;
    padding: 115px 0px 24px 0px;
`

export default function SignUpInfo({children}) {
  return (
    <SignUpInfoContaier vertical={true} justify='end' align='center' gap="4px">
        {children}
    </SignUpInfoContaier>
  )
}
