declare namespace DocsModuleScssNamespace {
  export interface IDocsModuleScss {
    paragraph: string;
  }
}

declare const DocsModuleScssModule: DocsModuleScssNamespace.IDocsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DocsModuleScssNamespace.IDocsModuleScss;
};

export = DocsModuleScssModule;
