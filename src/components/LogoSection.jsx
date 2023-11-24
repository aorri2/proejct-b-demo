import { Flex, Image, Typography } from "antd";
import styled from "styled-components";
import HeaderLogo from "assets/O..svg"
const LogoContainer = styled(Flex)`
  height: 30px;
`;
const Logo = styled(Flex)`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background: var(--character-success, #52C41A);
  box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.29);
`;

const LogoTitle = styled(Flex)`
  height: 32px;
`

const LogoTitleText = styled(Typography.Text)`
  color: var(--primary-6, #198C75);
  font-family: Zapf Dingbats;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
`

export default function LogoSection() {
  return (
    <LogoContainer align="center" gap="8px">
      <Logo vertical={true} justify="center" align="center" gap="4px">
        <Image src={HeaderLogo}/>
      </Logo>
      <LogoTitle align="end" gap="4px">
      <LogoTitleText>Ossom.ai</LogoTitleText>
      </LogoTitle>
    </LogoContainer>
  );
}
