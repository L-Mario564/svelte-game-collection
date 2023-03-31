<script lang="ts">
	import { initializeApp, type FirebaseOptions } from 'firebase/app';
	import { onMount } from 'svelte';
	import {
		PUBLIC_FB_APIKEY,
		PUBLIC_FB_APPID,
		PUBLIC_FB_PROJECTID,
		PUBLIC_FB_AUTH_DOMAIN,
		PUBLIC_FB_MEASUREMENTID,
		PUBLIC_FB_MESSAGING_SENDER_ID,
		PUBLIC_FB_STORAGEBUCKET
	} from '$env/static/public';

	onMount(() => {
		const firebaseConfig: FirebaseOptions = {
			apiKey: PUBLIC_FB_APIKEY,
			authDomain: PUBLIC_FB_AUTH_DOMAIN,
			projectId: PUBLIC_FB_PROJECTID,
			storageBucket: PUBLIC_FB_STORAGEBUCKET,
			messagingSenderId: PUBLIC_FB_MESSAGING_SENDER_ID,
			appId: PUBLIC_FB_APPID,
			measurementId: PUBLIC_FB_MEASUREMENTID
		};

		initializeApp(firebaseConfig);
	});
</script>

<slot />
