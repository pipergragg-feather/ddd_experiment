import { CharacterAttacked } from './modules/characters/domain/events/characterAttacked';
import { Game } from './modules/game/useCases/startGame';
import { DomainEvents } from './shared/domain/events/DomainEvents';

const charAttackLog = (event: CharacterAttacked) => {
  console.log({
    event: `\n${event.character.name} attacked ${event.enemy.name} for ${event.damage} at ${event.dateTimeOccurred}\n ${event.enemy.name} has ${event.enemy.health.current}/${event.enemy.health.max} HP
    `,
  });
};
const gameLoop = async () => {
  const game = Game.start();
  DomainEvents.register(charAttackLog, 'CharacterAttacked');

  while (game.isActive) {
    await game.gameStep();
    // view(game);
  }
};

gameLoop().then(() => {
  process.exit(0);
});

// const view = async () => {

// }
