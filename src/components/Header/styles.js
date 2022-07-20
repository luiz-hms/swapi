import styled from "styled-components";

export const Container = styled.div`
  background: white;
  display: flex;
  background: var(--primary);
  h1 {
    align-items: center;
    justify-content: center;
    margin: 20px;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      margin: 20px;
      color: red;
      a {
        text-decoration: none;
        color: var(--background);
        font-weight: bold;
        font-size: 1.5rem;
        &:hover {
          color: var(--hover);
          font-weight: bold;
        }
      }
    }
  }
`;
export const Logo = styled.img``;

export const Area = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
`;
