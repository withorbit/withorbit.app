<script lang="ts">
	import "../app.css";
	import { ModeWatcher } from "mode-watcher";
</script>

<ModeWatcher />
<!-- <ProgressBar /> -->

<div class="flex min-h-screen flex-col overflow-clip">
	<!-- <Header /> -->

	<main class="grow">
		<slot />
	</main>

	<!-- <Footer /> -->
</div>

<!-- <Notifications /> -->
<!-- <Toaster /> -->
