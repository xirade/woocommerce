import React from "react";
import styled from "styled-components";
import Link from "next/link";

interface Props {
  className?: string;
  children?: React.ReactNode;
  color?: string;
  link: string;
}

const NavHeading = (props: Props) => {
  return (
    <Link href={props.link} passHref>
      <Heading4 className={props.className} color={props?.color}>
        {props.children}
      </Heading4>
    </Link>
  );
};

export default NavHeading;

// NOTE: can use type <Props> but <Pick> is more specific
const Heading4 = styled.a<Pick<Props, "color">>`
  color: ${(props) => (props.color ? props.color : props.theme.colors.primary)};
  cursor: pointer;
  font-size: 1.2em;
  padding: 15px 0;
`;
