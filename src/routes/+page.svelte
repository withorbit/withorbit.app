<script lang="ts">
	import Particles from "$lib/components/Particles.svelte";
</script>

<div class="relative flex flex-col justify-center h-full w-full">
	<Particles />

	<div class="pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden" aria-hidden>
		<div class="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
			<img class="max-w-none" src="/glow-top.svg" alt="" width="2146" height="774" />
		</div>

		<div class="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
			<img class="max-w-none" src="/glow-bottom.svg" alt="" width="2146" height="774" />
		</div>
	</div>

	<div class="pb-16 pt-32 md:pb-32 md:pt-52">
		<div class="mx-auto max-w-3xl text-center">
			<div class="mb-6">
				<div
					class="relative inline-flex before:absolute before:inset-0 before:bg-purple-500 before:blur-md"
				>
					<span
						class="relative px-3 py-1 flex shadow rounded-full border border-transparent before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/50"
					>
						<span class="relative text-sm font-medium text-slate-300">Coming soon</span>
					</span>
				</div>
			</div>

			<h1
				class="bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-5xl font-extrabold text-transparent md:text-6xl"
			>
				Next generation Twitch enhancement
			</h1>

			<p class="mb-6 text-lg text-slate-300">
				A unified suite of user-friendly Twitch utilities delivering a consistent, reliable, and
				enjoyable experience that works anywhere.
			</p>

			<p class="text-slate-300 font-medium">
				Join the
				<a
					class="underline font-semibold hover:text-slate-100"
					href="https://discord.gg/ABKSNyDN5D"
				>
					Discord
				</a>
				to get updates.
			</p>
		</div>
	</div>
</div>

<style>
	div > span {
		background:
			linear-gradient(theme("colors.purple.500"), theme("colors.purple.500")) padding-box,
			linear-gradient(theme("colors.purple.500"), theme("colors.purple.200") 75%, transparent 100%)
				border-box;
	}
</style>
