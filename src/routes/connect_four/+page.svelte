<script lang="ts">
	import {
		startConnectFourGame,
		type ConnectFour,
		chooseColumn
	} from '../../ts/games/connect_four';
	import { scale } from 'svelte/transition';
	import { getPlayerByPosition } from '../../ts/game_basics/party';
	import type { Player } from '../../ts/game_basics/player';

	let gameTest = startConnectFourGame({
		partyID: 'Temp',
		players: [
			{ playerID: '1', username: 'N1' },
			{ playerID: '2', username: 'N1' }
		]
	}) as ConnectFour;

	let mensaje = '';

	function add(player: Player, column: number): void {
		console.log(chooseColumn(gameTest, player, column));
		mensaje = gameTest.state.winner
			? gameTest.state.winner === true
				? 'Draw'
				: 'Winner Player ' + ((gameTest.state.turn + 1) % 2)
			: '';
		gameTest = gameTest;
	}
</script>

<div>
	{#each gameTest.state.board as row}
		<div class="array">
			{#each row as val, column}
				<button
					on:click={(event) =>
						add(getPlayerByPosition(gameTest.party, gameTest.state.turn % 2), column)}
				>
					<div out:scale={{ duration: 250 }} in:scale={{ duration: 250 }} class="element">
						{val ?? ''}
					</div>
				</button>
			{/each}
		</div>
	{/each}
</div>

<div class="message">
	{mensaje}
</div>

<style>
	:global(body) {
		color: #000;
		margin: 4%;
	}

	.array {
		display: flex;
		height: 3em;
	}

	.message {
		margin-top: 15px;
	}

	.element {
		width: 3em;
		height: 3em;
		background-color: #5f8;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid black;
	}

	/* .element + .element {
		margin-left: 0.25em;
	} */
</style>
