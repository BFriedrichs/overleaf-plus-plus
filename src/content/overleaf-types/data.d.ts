namespace Overleaf {
  type Data = {
    ExposedSettings: {
      isOverleaf: boolean;
      appName: string;
      hasSamlFeature: boolean;
      hasLinkUrlFeature: boolean;
      siteUrl: string;
      emailConfirmationDisabled: boolean;
      maxEntitiesPerProject: number;
      maxUploadSize: number;
      recaptchaDisabled: {
        invite: boolean;
        login: boolean;
        register: boolean;
      };
      textExtensions: [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ];
      validRootDocExtensions: [string, string, string];
      enableSubscriptions: boolean;
    };
    ab: Record<string, unknown>;
    aceBasePath: string;
    anonymous: boolean;
    anonymousAccessToken: string;
    baseAssetPath: string;
    brandVariation: undefined;
    csrfToken: string;
    enablePdfCaching: boolean;
    fileActionI18n: {
      edited: string;
      renamed: string;
      created: string;
      deleted: string;
    };
    gitBridgePublicBaseUrl: string;
    i18n: {
      currentLangCode: string;
    };
    isRestrictedTokenMember: boolean;
    isTokenMember: boolean;
    logsUISubvariant: string;
    maxDocLength: number;
    pdfCMapsPath: string;
    project_id: string;
    resetServiceWorker: boolean;
    sharelatex: {
      siteUrl: string;
      templates: {
        user_id: string;
      };
    };
    showNewLogsUI: boolean;
    showSymbolPalette: boolean;
    trackPdfDownload: boolean;
    useShareJsHash: boolean;
    useV2History: boolean;
    user: {
      id: string;
      email: string;
      first_name: string;
      last_name: string;
      referal_id: string;
      signUpDate: string;
      allowedFreeTrial: boolean;
      features: {
        collaborators: number;
        versioning: boolean;
        dropbox: boolean;
        github: boolean;
        gitBridge: boolean;
        compileTimeout: number;
        compileGroup: string;
        templates: boolean;
        references: boolean;
        trackChanges: boolean;
      };
      refProviders: {
        mendeley: boolean;
        zotero: boolean;
      };
      alphaProgram: boolean;
      betaProgram: boolean;
      isAdmin: boolean;
    };
    userSettings: {
      mode: string;
      editorTheme: string;
      fontSize: number;
      autoComplete: boolean;
      autoPairDelimiters: boolean;
      pdfViewer: string;
      syntaxValidation: boolean;
      fontFamily: string;
      lineHeight: string;
      overallTheme: string;
    };
    user_id: string;
    usersEmail: string;
    wikiEnabled: boolean;
    wsRetryHandshake: number;
  };
}
