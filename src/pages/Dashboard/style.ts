import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

const Title = styled.h1`
  font-size: 48;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 15px;
`;

const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  // margin: 0 auto;

  input {
    flex: 1;
    height: 70px;
    padding: 0 12px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 230px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

const Repositories = styled.div`
  margin-top: 15px;
  max-width: 700px;
  // border: 1px solid black;

  a + a {
    margin-top: 16px;
  }

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 12px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
      background: red;
    }
  }
`;

export { Title, Form, Error, Repositories };
