import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 9;
  width: 100%;
`;
export const Content = styled.div`
    padding: 20px;
  flex: 9;
  width: 100%;
  position: relative;
  img{
    width: 100%;
    object-fit: cover;
    height: 300px;
  }
  .postTitle{
    width: 100;
    text-align: center;
    position: relative;
    h4{
      font-size: 1.3rem;
      font-weight: 600;
      margin-top: 10px;
    }
    .edit{
      position: absolute;
      right: 0;
      top: 0;
      span{
        margin-left: 10px;
        :first-child{
          color: red;
        }
        :last-child{
          color: green;
        }
      }
    }
  }
  .author{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .9rem;
    color: #f1de72;
    margin-bottom: 20px;
    h4{
      font-size: .9rem;
      font-weight: 400;
      span{
        font-weight: 700;
      }
    }
  }
  p{
    font-size: .9rem;
    ::first-letter{
      margin-left: 20px;
      font-size: 30px;
      font-weight: 600;
    }
  }
`;