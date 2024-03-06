import { logger } from "$lib/logger";

export async function handle({ event, resolve }) {
	event.locals.log = logger;

	return resolve(event);
}
