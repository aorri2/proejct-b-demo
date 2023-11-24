import { ConfigProvider, Flex, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const WorkSpaceInfoTitleContainer = styled(Flex)`
  align-self: stretch;
`;


const workSpaceConfig = {
    components: {
        Typography: {
            colorSuccess: "#198C75",
        }
    }
};
export default function WorkSpaceInfoTitle({ children }) {
  return (
    <WorkSpaceInfoTitleContainer justify="center" align="start" vertical={true}>
        <ConfigProvider
        theme={workSpaceConfig}>
      <Typography.Title type="success">{children}</Typography.Title>
      </ConfigProvider>
    </WorkSpaceInfoTitleContainer>
  );
}
