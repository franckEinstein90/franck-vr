declare namespace ButtonsModuleScssNamespace {
  export interface IButtonsModuleScss {
    buyNow: string;
  }
}

declare const ButtonsModuleScssModule: ButtonsModuleScssNamespace.IButtonsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ButtonsModuleScssNamespace.IButtonsModuleScss;
};

export = ButtonsModuleScssModule;
