import { Container, Sprite } from "pixi.js";
import GameService from "./gameService";
import windowGenerator from "./windowGenerator";
import Rune from "./rune";
import runes from "./runes.json";
import { nextTick } from "process";

const HAND_MAX_SIZE = 6;
const LANE_MAX_SIZE = 5;
type ObjectKey = keyof typeof runes.runes | null;
class Deck extends Container {
  public handWindow: Container;
  public laneWindow: Container;
  public hand: Rune[] = [];
  public lane: Array<Rune|Sprite> = [];
  public runes: Rune[];
  public emptyRune: Sprite;
  constructor(App: GameService) {
    super();
    // LANE
    this.laneWindow = windowGenerator("littleWood1", 3, 10, App.loader);
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
    this.emptyRune = new Sprite(App.loader.resources["gui"]!.spritesheet!.textures["background_parchment"]);
    for(let i = 0; i < LANE_MAX_SIZE; i++){
      this.lane.push(new Sprite(this.emptyRune.texture));
    }
  }

  public removeRuneToHand(rune: Rune): Deck {
    if (this.hand.includes(rune)) {
      this.hand.splice(this.hand.indexOf(rune), 1);
      this.renderWindows();
    } else {
      console.log("Rune not found");
    }
    return this;
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
    for(let i = 0; i < LANE_MAX_SIZE; i++){
      if(this.lane[i] instanceof Rune){
        continue;
      }else{
        this.lane[i] = rune;
        this.removeRuneToHand(rune);
        this.renderWindows();
        return this;
      }
    }
    console.log("Lane is full");
    return this;
  }

  public laneOnTurn(): Deck {
    const tempLane = [...this.lane];
    this.lane.pop();
    this.lane.unshift(new Sprite(this.emptyRune.texture));
    this.renderWindows();
    return this;
  }

  public renderWindows(): Deck {
    this.renderHand();
    this.renderLane();
    return this;
  }

  public renderLane(): Deck {
    // TODO: Refactor this
    this.laneWindow.children.forEach((element) => {
      if (element instanceof Rune) {
        this.laneWindow.removeChild(element);
      }
    });
    for (let i = 0; i < LANE_MAX_SIZE; i++) {
      this.laneWindow.addChild(this.lane[i]);
      if (i === 0) {
        this.lane[i].y = 48;
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
