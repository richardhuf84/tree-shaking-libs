import styled from '@emotion/styled';
import { TsButton } from '@treeshaking-libs/TsButton';
import { TsText, TsLink } from '@treeshaking-libs/tscomponents';

const StyledApp = styled.div`
  padding: '1rem'
`;

export function App() {
  return (
    <StyledApp>
      <TsButton color="blue">Tree shake button</TsButton>
      <TsText>Tree shake text</TsText>
      <TsLink href="https://google.com">Tree shake link</TsLink>
      <TsText >Tree shake Text</TsText>
    </StyledApp>
  );
}

export default App;
