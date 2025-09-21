export default class MainMenu {
  private gameWrapper: HTMLElement | null;
  private mainMenuElement: HTMLElement | null;
  private classicModeBtn: HTMLAnchorElement | null;
  private endlessModeBtn: HTMLAnchorElement | null;

  constructor() {
    const routes = {
      "/": () => {},
      "/classic-mode": () => {},
      "/endless-mode": () => {},
    };

    // related DOM elements
    this.classicModeBtn = document.getElementById(
      "classic-mode-btn"
    ) as HTMLAnchorElement;

    this.endlessModeBtn = document.getElementById(
      "endless-mode-btn"
    ) as HTMLAnchorElement;

    this.gameWrapper = document.getElementById("game-wrapper");
    this.mainMenuElement = document.getElementById("main-menu");
  }

  private onClassicModeClick() {}

  private onEndlessModeClick() {}

  public navigateTo(): void {
    // handle page navigation
  }

  public bindEvents(): void {
    // Bind event handlers to correct elements
  }

  public unBindEvents(): void {
    // Clean make sure that eventhandlers are detached when necessary
  }
}
