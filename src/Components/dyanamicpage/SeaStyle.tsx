import styled from 'styled-components'

export const Fullscreen = styled.div`
  width: 100%;
  height: 4000px;
`
export const sticky = styled.div`
    position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
`
export const h1 = styled.h1`
  font-family: Helvetica;
  margin: 0;
  padding: 0;
  font-size: 48px;
  color: #fff;
  letter-spacing: -0.3px;

  background-image: linear-gradient(
    75deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 33.33%,
    rgba(255, 255, 255, 0) 66.67%,
    rgba(255, 255, 255, 0) 100%
  );
  background-size: 300% 100%;
  background-position-x: calc(100% - var(--percentage));

  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`
