import "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    mainFont: string;
    colors: {
      mainColor: string;
    };
  }
}
