import styled from 'styled-components';

const blue = "#2196F3";

export const Link = styled.a`
  color: ${props => props.color || blue};
  font-size: ${props => props.fontSize || "16px"};
  text-decoration: none;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    visibility: hidden;
    background-color: ${props => props.color || blue};
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    &:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
`;
