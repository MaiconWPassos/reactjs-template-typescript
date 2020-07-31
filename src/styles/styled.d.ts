import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      danger: string;
      success: string;
      info: string;
      warning: string;
      light: string;

      background: string;
      color: string;
    };
  }
}
