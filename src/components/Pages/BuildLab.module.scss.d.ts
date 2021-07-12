declare namespace BuildLabModuleScssNamespace {
  export interface IBuildLabModuleScss {
    anime: string;
    buildLab: string;
    buildLabContainer: string;
    buildLabRightPane: string;
    canvas: string;
    container: string;
  }
}

declare const BuildLabModuleScssModule: BuildLabModuleScssNamespace.IBuildLabModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BuildLabModuleScssNamespace.IBuildLabModuleScss;
};

export = BuildLabModuleScssModule;
