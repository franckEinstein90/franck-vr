declare namespace ScreenSceneModuleScssNamespace {
  export interface IScreenSceneModuleScss {
    canvas: string;
  }
}

declare const ScreenSceneModuleScssModule: ScreenSceneModuleScssNamespace.IScreenSceneModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ScreenSceneModuleScssNamespace.IScreenSceneModuleScss;
};

export = ScreenSceneModuleScssModule;
