<script lang="ts">
	import "../app.css";
	import dayjs from "dayjs";
	import localizedFormat from "dayjs/plugin/localizedFormat";
	import { ModeWatcher } from "mode-watcher";
	import { Toaster } from "$lib/components/ui/sonner";
	import Header from "$lib/components/Header.svelte";
	import Notifications from "$lib/components/Notifications.svelte";

	dayjs.extend(localizedFormat);
</script>

<ModeWatcher />
<!-- <ProgressBar /> -->

<div class="flex min-h-screen flex-col overflow-clip">
	<Header />

	<main class="grow">
		<slot />
	</main>

	<!-- <Footer /> -->
</div>

<Notifications />
<Toaster />
