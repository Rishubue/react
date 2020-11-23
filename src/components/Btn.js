import styled, { css } from "styled-components"

export const Btn = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 6rem;
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  background-color: #fff;
  border: 2px solid #333;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  ${props =>
    props.isStick
      ? css`
          bottom: 6rem;
          opacity: 1;
          visibility: visible;
        `
      : ""}

  &:hover {
    background-color: seagreen;
  }

  .icon {
    font-size: 3rem;
    color: #333;
  }
`
