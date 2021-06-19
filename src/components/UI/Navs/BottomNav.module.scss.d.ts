declare namespace BottomNavModuleScssNamespace {
  export interface IBottomNavModuleScss {
    bottomNav: string;
  }
}

declare const BottomNavModuleScssModule: BottomNavModuleScssNamespace.IBottomNavModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BottomNavModuleScssNamespace.IBottomNavModuleScss;
};

export = BottomNavModuleScssModule;
