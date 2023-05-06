import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TsButtonProps {
  color: 'blue' | 'pink';
  children: React.ReactNode;
}

const StyledTsButton = styled.button(({ color }) => ({
  backgroundColor: color,
  color: 'white',
  border: 0
}))

export function TsButton({ children, color }: TsButtonProps) {
  return (
    <StyledTsButton color={color}>
      {children}
    </StyledTsButton>
  );
}

export default TsButton;
