declare namespace PagesModuleScssNamespace {
  export interface IPagesModuleScss {
    page: string;
    topNav: string;
  }
}

declare const PagesModuleScssModule: PagesModuleScssNamespace.IPagesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PagesModuleScssNamespace.IPagesModuleScss;
};

export = PagesModuleScssModule;
