import styled from "styled-components";
import { fixedTop } from "../utilities";

const color = "white";
export const Button = styled.button`
  padding: 5px 10px;
  border: 0;
  font-size: 1.6rem;
  color: ${color};
  border-radius: 5px;
  background: indigo;
`;

export const CanceButton = styled(Button)`
  background: tomato;
  ${fixedTop};
`;
