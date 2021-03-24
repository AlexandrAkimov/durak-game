import { writable } from 'svelte/store';

export const hisCards = writable([]);
export const meCards = writable([]);
export const bankCards = writable([]);
export const step = writable(false);
export const kozyr = writable('');
export const byStep = writable(false);