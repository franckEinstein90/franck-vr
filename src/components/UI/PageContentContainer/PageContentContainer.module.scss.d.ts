declare namespace PageContentContainerModuleScssNamespace {
  export interface IPageContentContainerModuleScss {
    page: string;
  }
}

declare const PageContentContainerModuleScssModule: PageContentContainerModuleScssNamespace.IPageContentContainerModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PageContentContainerModuleScssNamespace.IPageContentContainerModuleScss;
};

export = PageContentContainerModuleScssModule;
