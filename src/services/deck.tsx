import { Container } from "pixi.js";
import GameService from "./gameService";
import windowGenerator from "./windowGenerator";
import Rune from "./rune";
import runes from "./runes.json";

const HAND_MAX_SIZE = 6;
const LANE_MAX_SIZE = 5;
type ObjectKey = keyof typeof runes.runes | null;
class Deck extends Container {
  public handWindow: Container;
  public laneWindow: Container;
  public hand: Rune[] = [];
  public lane: Rune[] = [];
  public runes: Rune[];
  constructor(App: GameService) {
    super();
    // LANE
    this.laneWindow = windowGenerator("littleWood1", 3, 7, App.loader);
    this.laneWindow.x = 0;
    this.laneWindow.y = 0;
    this.addChild(this.laneWindow);
    // HAND
    this.handWindow = windowGenerator("littleWood1", 12, 4, App.loader);
    this.handWindow.x = 0;
    this.handWindow.y = this.laneWindow.height + 16;
    this.addChild(this.handWindow);
    // RUNES
    this.runes = [];
    const keys = Object.keys(runes.runes) as Array<ObjectKey>;
    keys.forEach((key) => {
      this.runes.push(new Rune(App, this, key));
    });
  }

  public addRuneToHand(rune: Rune): Deck {
    if (this.hand.length < HAND_MAX_SIZE) {
      this.hand.push(rune);
      this.renderWindows();
    } else {
      console.log("Deck is full");
    }
    return this;
  }

  public drawRunes(number: number): Rune | null {
    let numberToDraw = number - 1;
    let rune: Rune | null = null;
    if (this.hand.length < HAND_MAX_SIZE) {
      let randIndex = [];
      for (let i = 0; i < this.runes.length; i++) {
        randIndex.push(i);
      }
      randIndex = randIndex.sort(() => Math.random() - 0.5);

      for (let i = 0; i < randIndex.length; i++) {
        rune = this.runes[randIndex[i]];
        if (this.hand.includes(rune)) {
          continue;
        } else {
          this.addRuneToHand(rune);
          numberToDraw--;
          if (numberToDraw <= 0) {
            break;
          } else {
            continue;
          }
        }
      }
    }
    return rune;
  }

  public handToLane(rune: Rune): Deck {
    if (this.lane.length < LANE_MAX_SIZE) {
      if (this.hand.includes(rune)) {
        this.lane.push(rune);
        this.removeRune(rune);
        this.renderWindows();
      } else {
        console.log("Rune not found");
      }
    }else{
        console.log("Lane is full");
    }
    return this;
  }

  public removeRune(rune: Rune): Deck {
    if (this.hand.includes(rune)) {
      this.hand.splice(this.hand.indexOf(rune), 1);
      this.renderWindows();
    } else {
      console.log("Rune not found");
    }
    return this;
  }

  public renderWindows(): Deck {
    this.renderHand();
    this.renderLane();
    return this;
  }

  public renderLane(): Deck {
    this.laneWindow.children.forEach((element) => {
      if (element instanceof Rune) {
        this.laneWindow.removeChild(element);
      }
    });
    for (let i = 0; i < this.lane.length; i++) {
      this.laneWindow.addChild(this.lane[i]);
      if (i === 0) {
        this.lane[i].y = 56;
      } else {
        this.lane[i].y = this.lane[i - 1].y + this.lane[i - 1].height + 16;
      }
      this.lane[i].x = this.laneWindow.width / 2 - this.lane[i].width / 2;
    }
    return this;
  }

  public renderHand(): Deck {
    this.handWindow.children.forEach((element) => {
      if (element instanceof Rune) {
        this.handWindow.removeChild(element);
      }
    });
    for (let i = 0; i < this.hand.length; i++) {
      this.handWindow.addChild(this.hand[i]);
      if (i === 0) {
        this.hand[i].x = 56;
      } else {
        this.hand[i].x = this.hand[i - 1].x + this.hand[i - 1].width + 16;
      }
      this.hand[i].y = this.handWindow.height / 2 - this.hand[i].height / 2;
    }
    return this;
  }
}

export default Deck;
