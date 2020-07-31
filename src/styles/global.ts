import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    font: 14px 'Roboto', sans-serif;
    background: ${({ theme: { colors } }) => colors.background};
    color:  ${({ theme: { colors } }) => colors.color};
    -webkit-font-smoothing: antialiased !important;
  }
  ul {
    list-style: none;
  }
  *::-webkit-scrollbar {
      width: 5px;
  }
  *::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 5px;
  }
  *::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
  }
  .swal2-show {
    background-color: ${({ theme: { colors } }) => colors.background}!important;
  }
  .swal2-title, .swal2-content{
    color: ${({ theme: { colors } }) => colors.color}!important
  }
  .swal2-success-circular-line-left{
    background-color: ${({ theme: { colors } }) => colors.background}!important;
  }
  .swal2-success-circular-line-right{
    background-color: ${({ theme: { colors } }) => colors.background}!important;
  }
  .swal2-success-fix{
    background-color: ${({ theme: { colors } }) => colors.background}!important;
  }
`;
