import { Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'


const SignUpInfoTypography = styled(Typography.Title)`
    color: #000;
    /* H1/medium */
    font-family: Pretendard;
    font-size: 38px;
    font-style: normal;
    font-weight: 500;
    line-height: 46px; /* 121.053% */
`

export default function SignUpInfoText({children}) {
  return (
    <SignUpInfoTypography>
        {children}
    </SignUpInfoTypography>
  )
}
