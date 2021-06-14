import styled from 'styled-components';

export const Box = styled.div`
  padding: 50px 60px;
  background: #1b1c29;
  position: relative;
  bottom: 0;
  width: 100%;


  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
    height: 50px;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,
                         minmax(185px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill,
                           minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 15px;
  text-decoration: none;
  text-shadow: 0 0 0.5rem black;

  &:hover {
      color: #3BBA9C;
      transition: 200ms ease-in;
      text-shadow: 0 0 0.3rem #3BBA9C;
  }
`;

export const Heading = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
  text-shadow: 0 0 0.5rem black;


  &:hover{
    transition: 200ms ease-in;
    text-shadow: 0 0 0.1rem #d4d9e4;
  }
`;
