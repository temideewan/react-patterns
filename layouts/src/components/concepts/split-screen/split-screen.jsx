/* eslint-disable react/prop-types */
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
`;
const Panel = styled.div`
  flex: ${(p) => p.flex};
`;

const SplitScreen = ({ children, leftWidth = 1, rightWidth = 1 }) => {
  const [Left, Right] = children;
  return (
    <Container>
      <Panel flex={leftWidth}>{Left}</Panel>
      <Panel flex={rightWidth}>{Right}</Panel>
    </Container>
  );
};

export default SplitScreen;
