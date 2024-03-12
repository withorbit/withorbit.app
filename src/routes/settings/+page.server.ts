import { redirect } from "@sveltejs/kit";

export function load({ locals }) {
	// if (/* auth check */) {
	// 	redirect(302, "/login");
	// }

	redirect(301, "/settings/account");
}
