<script lang="ts">
	const groups = [
		{
			name: "Products",
			items: [
				{ name: "Emotes", href: "/emotes" },
				{ name: "Extension", href: "#install" },
				{ name: "Orbit Plus", href: "/plus" },
			],
		},
		{
			name: "Community",
			items: [
				{ name: "GitHub", href: "https://github.com/withorbit" },
				{ name: "Discord", href: "https://discord.gg/ABKSNyDN5D" },
				{ name: "Twitter/X", href: "" },
			],
		},
		{
			name: "Resources",
			items: [
				{ name: "Guidelines", href: "" },
				{ name: "API", href: "" },
				{ name: "Security", href: "" },
			],
		},
		{
			name: "Legal",
			items: [
				{ name: "Terms of Service", href: "" },
				{ name: "Privacy Policy", href: "" },
				{ name: "Refund Policy", href: "" },
			],
		},
	];
</script>

<footer class="border-t bg-background">
	<div class="mx-auto max-w-6xl px-4 sm:px-6">
		<div class="grid grid-cols-12 gap-8 py-8 md:py-16">
			<div class="col-span-12 mb-4 h-full justify-between lg:col-span-4 lg:mb-0">
				<a class="mb-4 inline-block" href="/" aria-label="Orbit">
					<img src="/img/logo.svg" alt="Orbit" width="38" height="38" />
				</a>

				<div class="text-sm font-medium">
					&copy; {new Date().getFullYear()} Copyright
				</div>
			</div>

			{#each groups as group}
				<div class="col-span-6 md:col-span-3 lg:col-span-2">
					<span class="mb-6 block text-sm font-semibold">{group.name}</span>

					<ul class="space-y-4 text-sm" role="list">
						{#each group.items as item}
							<li class="text-muted-foreground transition-colors hover:text-foreground">
								<a href={item.href}>{item.name}</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</footer>
