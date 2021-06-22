declare namespace AccountPageModuleScssNamespace {
  export interface IAccountPageModuleScss {
    accountPage: string;
  }
}

declare const AccountPageModuleScssModule: AccountPageModuleScssNamespace.IAccountPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AccountPageModuleScssNamespace.IAccountPageModuleScss;
};

export = AccountPageModuleScssModule;
