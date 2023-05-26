
import {Participant} from "../yawl/resources/entities/participant.entity";
import { lighten,darken, transparentize, parseToRgba, rgba } from 'color2k';

/**
 * @author Robin Steinwarz
 */

export class ColorUtils {
  static vibrantColor = ["#F94144", "#F3722C", "#F8961E", "#F9844A", "#F9C74F", "#90BE6D", "#43AA8B", "#4D908E", "#577590", "#277DA1"]
  static vibrantIndex = 0;
  static getVibrantColor(): string {
    let index = (this.vibrantIndex++ % this.vibrantColor.length);
    let div = (this.vibrantIndex / this.vibrantColor.length);
    let lighterAmount = (div > 0)? div / 10 : 0;
    return lighten(this.vibrantColor[index], lighterAmount);
  }

  static colorMix = ["#39F6BA", "#31D4CE", "#42C3EB", "#3183D4", "#3966F6", "#A3F659", "#5DD44C", "#5FEA79", "#4CD48B", "#59F6CE",
    "#F6C34F", "#D4B744", "#EBDC56", "#D3D444", "#BBF64F", "#F6724C", "#D47842", "#EBA254", "#D49F42", "#F6CA4C", "#F65DD3", "#D45074",
    "#EB6D65", "#D46C50", "#F6945D", "#B66CF6", "#BD5DD4", "#EB73D9", "#D45D87", "#F6726C", "#6862F6", "#7C55D4", "#B46AEA", "#C155D4",
    "#F662D3", "#B4F7ED", "#9CCFD6", "#B8D9ED", "#9CB1D6", "#B4BAF7","#F7E9BE", "#D6CFA5", "#EEECC4", "#CED6A5","#D9F7BE"]
  static colorMixIndex = 0;
  static getColorMix(): string {
    let index = (this.colorMixIndex++ % this.colorMix.length);
    let div = (this.colorMixIndex / this.colorMix.length);
    let lighterAmount = (div > 0)? div / 10 : 0;
    return lighten(this.colorMix[index], lighterAmount);
  }

  static colorMix2 = ["#3F2BB3", "#635E80", "#4E88E5", "#E9BF89", "#B3642B", "#327FB3", "#58E6D4", "#B33332",
    "#2B9BB3", "#5E7A80", "#4DE5AB", "#E98C89", "#B32B63", "#2DB393", "#51E66F", "#E98CC8", "#A82DB3", "#25B34B", "#5B8064",
    "#80E647", "#CB82E9", "#6425B3", "#E5E53E", "#9179E9", "#1E26B3", "#B2B320", "#7F8057", "#E5C43F", "#7B9DE9",
    "#2074B3", "#B38F15", "#E59833", "#6DDDE9", "#15B396","#B3916B", "#805526", "#E5B0A0", "#69E9A3","#6BB377"]
  static colorMix2Index = 0;
  static getColor2Mix(): string {
    let index = (this.colorMix2Index++ % this.colorMix2.length);
    let div = (this.colorMix2Index / this.colorMix2.length);
    let lighterAmount = (div > 0)? div / 10 : 0;
    return lighten(this.colorMix2[index], lighterAmount);
  }

  static getWeekdayColor(i: number): string {
    return this.vibrantColor[(i % this.vibrantColor.length)]
  }

  static getLighterColor(color: string){
    return lighten(color, .1);
  }
  static getMuchLighterColor(color: string){
    return lighten(color, .3);
  }
  static getTransparentColor(color: string){
    let cl = parseToRgba(color);
    cl[3] = 0.4;
    return rgba(...cl);
  }
  static getDarkerColor(color: string){
    return darken(color, .2);
  }

  static getPrimaryColor(): string {
    return "#2196c3";
  }

  static getSecondaryColor(): string {
    return "#12376a";
  }
}
