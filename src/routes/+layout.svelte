<script lang="ts">
	import { initializeApp, type FirebaseOptions } from 'firebase/app';
	import { onMount } from 'svelte';

	onMount(() => {
		const firebaseConfig: FirebaseOptions = {
			apiKey: 'AIzaSyARxh9J-ylXCut84i8TF6z0IBEDiM83wio',
			authDomain: 'svelte-game-collection.firebaseapp.com',
			projectId: 'svelte-game-collection',
			storageBucket: 'svelte-game-collection.appspot.com',
			messagingSenderId: '716713051302',
			appId: '1:716713051302:web:fb0963ff4a9a8bad99e067',
			measurementId: 'G-GQ4S1YLJZM'
		};

		initializeApp(firebaseConfig);
	});
</script>

<slot />
