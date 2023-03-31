<script lang="ts">
	import Login from '$lib/components/Login.svelte';
	import type { UserCredential } from 'firebase/auth';

	type Data = {
		user?: UserCredential['user'] | null;
	};

	export let data: Data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Login user={data.user} />
