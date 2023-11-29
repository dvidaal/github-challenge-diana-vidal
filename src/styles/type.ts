import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mainFont: string;
    colors: {
      mainColor: string;
    };
  }
}
