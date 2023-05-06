import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TsTextProps {
  children?: React.ReactNode;
}

const StyledTsText = styled.p`
  color: black;
`;

export function TsText(props: TsTextProps) {
  return (
    <StyledTsText>
      {props.children}
    </StyledTsText>
  );
}

export default TsText;