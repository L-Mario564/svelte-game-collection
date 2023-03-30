// Connect Four

import { getPlayerByPosition, getPlayerPosition, type Party } from '../game_basics/party';
import type { Player } from '../game_basics/player';

export interface ConnectFourState {
	turn: number;
	board: (number | undefined)[][];
	winner: Player | true | undefined;
}

export interface ConnectFour {
	gameStateID: string;
	party: Party;
	state: ConnectFourState;
}

export function createConnectFour(gameStateID: string, party: Party, state: ConnectFourState) {
	return {
		gameStateID: gameStateID,
		party: party,
		state: state
	};
}

export function startConnectFourGame(party: Party): ConnectFour {
	return createConnectFour('', party, {
		turn: 0,
		board: Array(6)
			.fill(null)
			.map(() => Array(7)),
		winner: undefined
	});
}

export function checkBoard(connectFour: ConnectFour): boolean {
	function checkFourInRow(
		row: number,
		column: number,
		add_row: number,
		add_column: number
	): boolean {
		const playerPosition = connectFour.state.board[row][column];
		if (playerPosition == undefined) return false;

		for (let step = 0; step < 4; ++step) {
			if (row < 0 || row > 5 || column < 0 || column > 6) return false;
			if (playerPosition != connectFour.state.board[row][column]) return false;
			row += add_row;
			column += add_column;
		}

		connectFour.state.winner = getPlayerByPosition(connectFour.party, playerPosition) as Player;
		return true;
	}

	for (let row = 0; row < 6; ++row) {
		for (let column = 0; column < 7; ++column) {
			if (checkFourInRow(row, column, 1, 1)) return true;
			if (checkFourInRow(row, column, -1, 1)) return true;
			if (checkFourInRow(row, column, 0, 1)) return true;
			if (checkFourInRow(row, column, 1, 0)) return true;
		}
	}

	for (let column = 0; column < 7; ++column) {
		if (connectFour.state.board[0][column] == undefined) return false;
	}

	connectFour.state.winner = true;
	return true;
}

export function chooseColumn(
	connectFour: ConnectFour,
	player: Player,
	column: number
): string | boolean {
	if (connectFour.state.winner != undefined) return 'Winner is already decided';
	const playerPosition = getPlayerPosition(connectFour.party, player);
	if (playerPosition != connectFour.state.turn % 2) return "It isn't your turn yet";
	if (column < 0 || column > 7) return "Chosen column doesn't exist";
	if (connectFour.state.board[0][column] != undefined) return 'Chosen column is full';

	for (let row = 5; row >= 0; row--) {
		if (connectFour.state.board[row][column] != undefined) continue;
		connectFour.state.board[row][column] = playerPosition;
		break;
	}

	connectFour.state.turn++;
	return checkBoard(connectFour);
}
