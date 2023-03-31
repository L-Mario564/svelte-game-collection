// Player

export interface Player {
	playerID: string;
	username: string;
	password?: string;
}

export function createPlayer(
	playerID: string,
	username: string,
	password: string | undefined
): Player {
	return {
		playerID: playerID,
		username: username,
		password: password
	};
}
