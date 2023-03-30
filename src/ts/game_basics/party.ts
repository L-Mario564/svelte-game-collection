// Party

import type { Player } from './player';

export interface Party {
	partyID: string;
	players: Player[];
}

export function createParty(partyID: string, players: Player[]): Party {
	return {
		partyID: partyID,
		players: players
	};
}

export function getPlayerPosition(party: Party, player: Player): number {
	for (let _pos = 0; _pos < party.players.length; _pos++) {
		if (party.players[_pos].playerID == player.playerID) return _pos;
	}
	return -1;
}

export function getPlayerByPosition(party: Party, _pos: number): Player {
	return party.players[_pos];
}

export function addPlayer(party: Party, player: Player): boolean {
	if (getPlayerPosition(party, player) != -1) return false;
	party.players.push(player);
	return true;
}
