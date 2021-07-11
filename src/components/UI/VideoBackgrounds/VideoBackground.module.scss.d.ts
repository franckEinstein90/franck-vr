declare namespace VideoBackgroundModuleScssNamespace {
  export interface IVideoBackgroundModuleScss {
    backgroundVideo: string;
  }
}

declare const VideoBackgroundModuleScssModule: VideoBackgroundModuleScssNamespace.IVideoBackgroundModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: VideoBackgroundModuleScssNamespace.IVideoBackgroundModuleScss;
};

export = VideoBackgroundModuleScssModule;
