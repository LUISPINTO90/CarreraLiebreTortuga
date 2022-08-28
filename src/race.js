import RandomNumFrom1to20 from "./random.js";
import Hare from "./hare.js";
import Turtle from "./turtle.js";

export default class Race {
  constructor() {
    this.hare = new Hare();
    this.turtle = new Turtle();
    this.randomNumber = new RandomNumFrom1to20();
  }

  start() {
    let increase = 1;
    do {
      let random = this.randomNumber.show();

      if (random >= 1 && random <= 10) {
        this.turtle.setPosition(this.turtle.getPosition() + 3);

        if (random >= 5 && random <= 8) {
          this.hare.setPosition(this.hare.getPosition() + 9);
        } else if (random === 9 || random === 10) {
          this.hare.setPosition(this.hare.getPosition() - 12);
        }
      } else if (random >= 11 && random <= 17) {
        this.hare.setPosition(this.hare.getPosition() + 1);

        if (random === 17) {
          this.turtle.setPosition(this.turtle.getPosition() - 6);
        } else {
          this.turtle.setPosition(this.turtle.getPosition() + 1);
        }
      } else {
        this.turtle.setPosition(this.turtle.getPosition() - 6);
        this.hare.setPosition(this.hare.getPosition() - 2);
      }

      console.log(
        `[${increase++}][Random ${random}] Tortuga: ${this.turtle.getPosition()} - Liebre: ${this.hare.getPosition()}`
      );
    } while (
      (this.turtle.getPosition() < 100 && this.hare.getPosition < 100) ||
      (this.hare.getPosition() < 100 && this.turtle.getPosition() < 100)
    );

    //  DETERMINAR GANADOR
    if (this.hare.getPosition() < this.turtle.getPosition()) {
      if (this.hare.getPosition() >= 100 && this.turtle.getPosition() >= 100) {
        console.log("\nEMPATE");
      } else {
        console.log("\nLa Tortuga ha ganado");
      }
    } else if (this.turtle.getPosition() < this.hare.getPosition()) {
      if (this.turtle.getPosition() >= 100 && this.hare.getPosition() >= 100) {
        console.log("EMPATE");
      } else {
        console.log("\nLa Liebre ha ganado");
      }
    } else {
      console.log("\nEMPATE");
    }
  }
}
