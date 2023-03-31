// Game State

import type { Party } from './party';

export interface GameState {
	gameStateID: number;
	party: Party;
	state: object;
}
