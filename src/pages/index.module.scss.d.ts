declare namespace IndexModuleScssNamespace {
  export interface IIndexModuleScss {
    backgroundVideo: string;
    fullPage: string;
    pageContainer: string;
    subTitle: string;
    title: string;
  }
}

declare const IndexModuleScssModule: IndexModuleScssNamespace.IIndexModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexModuleScssNamespace.IIndexModuleScss;
};

export = IndexModuleScssModule;
