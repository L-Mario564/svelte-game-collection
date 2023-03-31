import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { UserCredential } from 'firebase/auth';

const localStorage = browser ? window.localStorage.getItem('userData') : null;
const initialValue = localStorage != null ? JSON.parse(localStorage) : null;
const authStore = writable<UserCredential['user'] | null>(initialValue);

authStore.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('userData', JSON.stringify(value));
	}
});

export default {
	subscribe: authStore.subscribe,
	set: authStore.set
};
