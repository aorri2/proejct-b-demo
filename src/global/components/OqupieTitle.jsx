import { Typography } from 'antd';
import React from 'react'
import styled from 'styled-components';

const Title = styled(Typography.Title)`
  margin-top: 0px;
  margin-bottom: 0px;
`;

export default function OqupieTitle({children}) {
  return (
    <Title>{children}</Title>
  )
}
