import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  children?: React.ReactNode;
  textAlign?: string;
  color?: string;
}

export default function Heading(props: Props) {
  const { className, textAlign, color, children } = props;
  return (
    <Heading1 className={className} textAlign={textAlign} color={color}>
      {children}
    </Heading1>
  );
}

// NOTE: can use type <Props> but <Pick> is more specific
const Heading1 = styled.h1<Pick<Props, "textAlign" | "color">>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  color: ${(props) => (props.color ? props.color : props.theme.colors.primary)};
  margin: 0;
`;
