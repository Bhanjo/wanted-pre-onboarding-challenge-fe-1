import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        darkblue: string;
        indigo: string;
        skywhite: string;
        white: string;
      };
    };
  }
}
