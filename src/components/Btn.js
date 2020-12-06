import styled, { css } from "styled-components"

export const Btn = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 6rem;
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  background-color: #fcfcfc;
  border: 2px solid #0f161f;
  width: 5rem;
  height: 5rem;
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
    background-color: #f1f1f1;
    transform: translateY(5px);
  }

  .icon {
    font-size: 2.4rem;
    color: #0f161f;
    transition: all 0.3s ease;
  }
`
