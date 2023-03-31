// Game

export interface Game {
	gameID: string;
	name: string;
}

export function createGame(gameID: string, name: string): Game {
	return {
		gameID: gameID,
		name: name
	};
}
