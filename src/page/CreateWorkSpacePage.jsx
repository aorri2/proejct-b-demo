import { Flex } from "antd";
import LogoSection from "components/LogoSection";
import WorkSpaceInfoTitle from "components/WorkSpaceInfoTitle";
import OqupieForm from "global/components/OqupieForm";
import SignUpContent from "layouts/SignUpContent";
import SignUpHeader from "layouts/SignUpHeader";
import SignUpInfo from "layouts/SignUpInfo";

export default function CreateWorkSpacePage() {
  return (
    <Flex justify="center" align="center" vertical={true}>
      <SignUpHeader>
        <LogoSection />
      </SignUpHeader>
      <SignUpInfo>
        <WorkSpaceInfoTitle>
          작업 공간 이름을 만들어주세요
        </WorkSpaceInfoTitle>
      </SignUpInfo>
      <SignUpContent>
      </SignUpContent>
    </Flex>
  );
}
