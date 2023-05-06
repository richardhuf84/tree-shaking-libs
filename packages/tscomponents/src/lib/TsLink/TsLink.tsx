import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TsLinkProps {
  children?: React.ReactNode;
  href: string;  
}

const StyledTsLink = styled.a`
  color: blue;
`;

export function TsLink({ children, href }: TsLinkProps) {
  return (
    <StyledTsLink href={href}>
      {children}
    </StyledTsLink>
  );
}

export default TsLink;