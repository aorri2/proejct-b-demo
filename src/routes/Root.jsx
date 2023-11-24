import React from 'react'
import {Flex} from 'antd'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const RootContainer = styled(Flex)`
  width: 1440px;
  height: 1024px;
  padding: 0px 90px;

`

export default function Root() {
  return (
    <RootContainer align='center' vertical={true}>
        <Outlet/>
    </RootContainer>
  )
}