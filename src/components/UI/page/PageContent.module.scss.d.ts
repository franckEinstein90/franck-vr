declare namespace PageContentModuleScssNamespace {
  export interface IPageContentModuleScss {
    page: string;
  }
}

declare const PageContentModuleScssModule: PageContentModuleScssNamespace.IPageContentModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PageContentModuleScssNamespace.IPageContentModuleScss;
};

export = PageContentModuleScssModule;
