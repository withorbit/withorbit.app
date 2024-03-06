// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			log: import("pino").Logger;
		}

		// interface Error {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
