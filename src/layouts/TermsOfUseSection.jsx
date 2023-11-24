import { Flex } from 'antd'
import React from 'react'
import styled from 'styled-components'

const TermsOfUseFlex = styled(Flex)`
    width: 360px;
`



export default function TermsOfUseSection({children}) {
  return (
    <TermsOfUseFlex align='start' vertical={true} gap={'var(--spacing-3xl, 24px)'}>
        {children}
    </TermsOfUseFlex>   
  )
}
