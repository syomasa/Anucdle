import { Game } from "../game/Game";

export default class MainMenu {
  private gameWrapper: HTMLElement | null;
  private mainMenuElement: HTMLElement | null;
  private classicModeBtn: HTMLAnchorElement;
  private endlessModeBtn: HTMLAnchorElement;
  private modeNameElement: HTMLElement | null;
  private gameStartButton: HTMLButtonElement;
  private videoCoverElement: HTMLDivElement;
  private videoIframe: HTMLIFrameElement;

  constructor(private game: Game) {
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

    this.gameStartButton = document.getElementById(
      "startBtn"
    ) as HTMLButtonElement;

    this.videoIframe = document.getElementById("ytplayer") as HTMLIFrameElement;
    this.videoCoverElement = document.getElementById("cover") as HTMLDivElement;
    this.gameWrapper = document.getElementById("game-wrapper");
    this.mainMenuElement = document.getElementById("main-menu");
    this.modeNameElement = document.getElementById("mode-name");

    console.log(this.game);
  }

  private onSelectModeClick(
    ev: PointerEvent,
    modeTitle: string,
    startGameFunction: () => string,
    resetGameFunction: () => void
  ) {
    ev.preventDefault();

    if (this.gameWrapper && this.mainMenuElement && this.modeNameElement) {
      this.modeNameElement.innerHTML = modeTitle;
      this.gameWrapper.style.display = "block";
      this.mainMenuElement.style.display = "none";

      this.gameStartButton?.addEventListener("click", () => {
        const videoId = startGameFunction();
        this.videoIframe.src = `https://www.youtube.com/embed/${videoId}?&autoplay=1&mute=0`;
        this.videoIframe.style.display = "block";
        this.videoCoverElement.style.display = "flex";
        this.videoCoverElement.textContent = "It's Anuc time!";
        resetGameFunction();
      });
    }
  }

  public navigateTo(): void {
    // handle page navigation
  }

  public bindEvents(resetGameFunction: () => void): void {
    // Bind event handlers to correct elements

    this.classicModeBtn.addEventListener("click", (ev) => {
      this.onSelectModeClick(
        ev,
        "Classic mode",
        () => this.game.start(),
        () => resetGameFunction()
      );
    });

    this.endlessModeBtn.addEventListener("click", (ev) => {
      this.onSelectModeClick(
        ev,
        "Endless mode",
        () => this.game.startEndlessMode(),
        () => resetGameFunction()
      );
    });
  }

  public unBindEvents(): void {
    // Clean make sure that eventhandlers are detached when necessary
  }
}
