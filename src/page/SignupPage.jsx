import { Button, Flex, Form, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoSection from "components/LogoSection";
import NextButton from "components/NextButton";
import SignUpHeader from "layouts/SignUpHeader";
import SignUpInfo from "layouts/SignUpInfo";
import SignUpInfoText from "components/SignUpInfoText";
import SignUpContent from "layouts/SignUpContent";
import SignUpFooter from "layouts/SignUpFooter";
import useEmailVerification from "hooks/query/useEmailVerification";

const OqupieForm = styled(Form)`
  align-self: stretch;
  align-items: center;
  width: 360px;
`;

export default function SignupPage() {
  const [form] = Form.useForm();
  const [showVerification, setShowVerification] = useState(true);
  
  const {checkEmailDuplicated} = useEmailVerification();
  const emailPattern = /^[a-zA-Z0-9._%+-]{5,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleVerificationCodeSubmitButton = async () => {
    const emailFieldValue = form.getFieldValue('email');
    console.log(emailFieldValue);
    try{
      const isEmailDuplicate = await checkEmailDuplicated(emailFieldValue);
      console.log(isEmailDuplicate);
      if (isEmailDuplicate) {
        form.setFields([
          {
            name: "email",
            errors: ["중복된 이메일입니다."],
          },
        ]);
      } else {
        setShowVerification(false);
      }
    }catch(error){
      console.error('Error handling email verification', error);
    }
  }

  return (
    <Flex justify="center" align="center" vertical={true}>
      <SignUpHeader>
        <LogoSection />
      </SignUpHeader>
      <SignUpInfo>
        <SignUpInfoText>회원가입</SignUpInfoText>
      </SignUpInfo>
      <SignUpContent>
        <OqupieForm layout="vertical" form={form} name="validateOnly">
          <Form.Item
            label="이메일"
            name="email"
            rules={[
              { required: true, message: "이메일을 입력해주세요" },
              {
                pattern: emailPattern,
                message: "올바른 이메일 형식을 입력해주세요.",
              },
            ]}
          >
            <Input placeholder="your@comany.email" />
          </Form.Item>
          {showVerification ? (
            <Button
              type="primary"
              block
              style={{ marginBottom: 10 }}
              onClick={handleVerificationCodeSubmitButton}
            >
              인증코드 전송
            </Button>
          ) : (
            <OqupieForm layout="vertical" form={form} name="validateCode">
              <Button type="link" block>
                인증코드 재전송
              </Button>
              <Form.Item label="인증코드" name="verificationCode">
                <Input placeholder="12345678" />
              </Form.Item>
              <Button type="primary" block style={{ marginBottom: 10 }}>
                인증 확인
              </Button>
            </OqupieForm>
          )}
          <Form.Item
            label="이름"
            name="name"
            rules={[{ required: true, message: "이름을 입력해주세요" }]}
          >
            <Input placeholder="홍길동" />
          </Form.Item>
          <Form.Item label="전화번호" name="phoneNumber">
            <Input placeholder="01012345678( - 제외 )" />
          </Form.Item>
          <Form.Item
            label="비밀번호"
            name="password"
            rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
          >
            <Input.Password placeholder="문자,숫자,특수문자 조합(최소8자, 최대 32자)" />
          </Form.Item>
          <NextButton form={form} />
        </OqupieForm>
        {/* <Button type="primary" block danger >시작하기</Button> */}
        {/* <TermsOfUseSection>
        <Divider style={{marginBottom:0, marginTop:0}}/>
        <Checkbox onChange={(e)=>{alert(e.target.checked)}}>Remember me</Checkbox>
        <Typography.Text type="secondary">Save my login details for next time.</Typography.Text>
        </TermsOfUseSection> */}
      </SignUpContent>
      <SignUpFooter>
        <span>
          이미 계정이 있나요?<Link to="/login"> Login</Link>
        </span>
      </SignUpFooter>
    </Flex>
  );
}

