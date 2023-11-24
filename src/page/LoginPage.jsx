import { Flex, Layout, Typography } from 'antd'
import LogoSection from 'components/LogoSection'
import styled from 'styled-components'

const LoginPageLayout = styled(Layout)`
  width: 1440px;
  height: 960px;
  min-height: 960px;
  align-items: center;
  background: var(--colors-background-bg-primary, #FFF);
  flex-direction: row;
`
const LeftSection = styled(Flex)`
  min-width: var(--width-sm, 480px);
  flex: 1 0 0;
  align-self: stretch;
`

const RightSection = styled(Flex)`
  padding: var(--spacing-none, 233px) var(--spacing-none, 0px);
  flex: 1 0 0;
  align-self: stretch;
  background: var(--colors-background-bg-brand-section, #53389E);
`

const LeftSectionContainer = styled(Flex)`
  flex: 1 0 0;
  padding: var(--spacing-none, 0px) var(--container-padding-desktop, 32px);
  align-self: stretch;
`

export default function LoginPage() {
  return (
    <LoginPageLayout>
      <LeftSection vertical={true} align='center'>
        <LeftSectionContainer justify='center' align='center' vertical={true}>
          <Flex gap={'var(--spacing-8xl, 80px)'} vertical={true} align='start' justify='start' >
            <LogoSection/>
            <Typography.Title level={2}>로그인 하세요</Typography.Title>
          </Flex>
        </LeftSectionContainer>
      </LeftSection>
      <RightSection justify='center' vertical={true} align='center'>
        asdasd
      </RightSection>
    </LoginPageLayout>
  )
}
