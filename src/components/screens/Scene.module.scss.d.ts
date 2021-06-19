declare namespace SceneModuleScssNamespace {
  export interface ISceneModuleScss {
    canvas: string;
    screen: string;
  }
}

declare const SceneModuleScssModule: SceneModuleScssNamespace.ISceneModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SceneModuleScssNamespace.ISceneModuleScss;
};

export = SceneModuleScssModule;
