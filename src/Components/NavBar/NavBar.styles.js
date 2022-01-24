import styled from "styled-components";

export const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  /* background-color: grey; */
  background-color: white;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`;
export const Content = styled.div`
  width: 100%;
  padding: 0 100px ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  ul{
    list-style: none;
  }

  .left{
    flex: 3;
    .socials{
      display: flex;
      li{
        margin-right: 20px;
        font-size: 1.3rem;
        cursor: pointer;
      }
      
    }
  }
  .center{
    flex: 6;
    .links{
      display: flex;
      justify-content:  center;
      a{
        text-decoration: none;
        color: black;
      }
      li{
        text-transform: uppercase;
        margin: 0 20px;
        font-weight: 300;
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
  }
  .right{
    flex: 3;
    display: flex;
    justify-content: flex-end;
  }
`;