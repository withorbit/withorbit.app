import { writable } from "svelte/store";

// Modal/dialog store naming: [component][action?]Open

export const notificationsOpen = writable(false);
export const settingsOpen = writable(false);
