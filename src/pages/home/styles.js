import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin: 0 auto;
  margin-top: 80px;
  max-width: 1080px;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
`;

export const TitlePage = styled.h1`
  color: var(--primary);
  text-align: center;
  margin-top: 40px;
  text-transform: uppercase;
`;

export const ContainerLoad = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 120px;
  max-width: 1080px;
`;
