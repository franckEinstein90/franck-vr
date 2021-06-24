declare namespace AccountPageModuleScssNamespace {
  export interface IAccountPageModuleScss {
    accountPage: string;
    anime: string;
    button: string;
    buttonFacebook: string;
    buttonGithub: string;
    buttonLinkedin: string;
    buttonSocialLogin: string;
    icon: string;
  }
}

declare const AccountPageModuleScssModule: AccountPageModuleScssNamespace.IAccountPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AccountPageModuleScssNamespace.IAccountPageModuleScss;
};

export = AccountPageModuleScssModule;
