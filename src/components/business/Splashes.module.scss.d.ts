declare namespace SplashesModuleScssNamespace {
  export interface ISplashesModuleScss {
    buyNow: string;
    text: string;
    title: string;
  }
}

declare const SplashesModuleScssModule: SplashesModuleScssNamespace.ISplashesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SplashesModuleScssNamespace.ISplashesModuleScss;
};

export = SplashesModuleScssModule;
