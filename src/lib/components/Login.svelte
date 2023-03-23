<script lang="ts">
	import { GoogleAuthProvider, getAuth, signInWithPopup, type UserCredential } from 'firebase/auth';
	import authStore from '$lib/authStore';

	export let user: UserCredential['user'] | null | undefined;

	const click = async () => {
		const provider = new GoogleAuthProvider();
		const auth = getAuth();
		const result = await signInWithPopup(auth, provider);
		authStore.set(result.user);
	};

	authStore.subscribe(async (resp) => {
		user = resp;
	});
</script>

{#if user}
	<img src={user.photoURL} alt="profile" />
	Welcome, {user.displayName}
{:else}
	<button on:click={click}>Login</button>
{/if}

<style>
</style>
