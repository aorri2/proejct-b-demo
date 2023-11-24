import { Flex } from 'antd'
import React from 'react'
import styled from 'styled-components'

styled(Flex)`
    width: 320px;
`

export default function SignUpContent({children}) {
  return (
    <Flex vertical={true} align='center'>{children}</Flex>
  )
}
