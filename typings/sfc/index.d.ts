// tslint:disable-next-line:no-namespace
declare namespace Types {
  type AppMode = 'production' | 'development';
  interface AppState {
    mode: AppMode;
  }
  interface NavigationState {
    openState: boolean;
  }
}

// tslint:disable-next-line:no-namespace
declare namespace State {
  interface Root {
    app: Types.AppState;
    navigation: Types.NavigationState;
  }
}
