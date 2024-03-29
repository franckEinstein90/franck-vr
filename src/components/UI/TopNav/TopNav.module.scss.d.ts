declare namespace TopNavModuleScssNamespace {
  export interface ITopNavModuleScss {
    loginButton: string;
    navItem: string;
    topNav: string;
  }
}

declare const TopNavModuleScssModule: TopNavModuleScssNamespace.ITopNavModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: TopNavModuleScssNamespace.ITopNavModuleScss;
};

export = TopNavModuleScssModule;
