declare namespace ButtonsModuleScssNamespace {
  export interface IButtonsModuleScss {
    animate1: string;
    animate2: string;
    animate3: string;
    animate4: string;
    buildNow: string;
    buyNow: string;
  }
}

declare const ButtonsModuleScssModule: ButtonsModuleScssNamespace.IButtonsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ButtonsModuleScssNamespace.IButtonsModuleScss;
};

export = ButtonsModuleScssModule;
