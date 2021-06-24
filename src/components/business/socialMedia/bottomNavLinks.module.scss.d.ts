declare namespace BottomNavLinksModuleScssNamespace {
  export interface IBottomNavLinksModuleScss {
    darkIcons: string;
    facebookBtn: string;
    googleplusBtn: string;
    lightIcons: string;
    linkedinBtn: string;
    pinterestBtn: string;
    smGlobalBtn: string;
    socialMediaLinks: string;
    tumblrBtn: string;
    twitterBtn: string;
  }
}

declare const BottomNavLinksModuleScssModule: BottomNavLinksModuleScssNamespace.IBottomNavLinksModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: BottomNavLinksModuleScssNamespace.IBottomNavLinksModuleScss;
};

export = BottomNavLinksModuleScssModule;
