import { Game } from './modules/game/useCases/startGame';

const gameLoop = async () => {
  const game = new Game();
  game.start({
    character: {
      health: 100,
      name: 'stuven',
    },
  });

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
