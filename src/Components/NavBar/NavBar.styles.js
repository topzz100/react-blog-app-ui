import styled from "styled-components";

export const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  background-color: grey;
  display: flex;
  align-items: center;
`;
export const Content = styled.div`
  width: 100%;
  padding: 0 100px ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;

  .left{
    flex: 3;
    .socials{
      display: flex;
    }
  }
  .center{
    flex: 6;
    .links{
      display: flex;
    }
  }
  .right{
    flex: 3;
  }
`;