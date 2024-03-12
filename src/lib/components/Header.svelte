<script lang="ts">
	import {
		Bell,
		ChevronRight,
		LogOut,
		Moon,
		Settings,
		Star,
		Sun,
		Upload,
		User,
	} from "lucide-svelte";
	import { mode, toggleMode } from "mode-watcher";
	import { page } from "$app/stores";
	import { notificationsOpen } from "$lib/stores";
	import { Button } from "./ui/button";
	import * as DropdownMenu from "./ui/dropdown-menu";
	import { Separator } from "./ui/separator";

	let dropdownOpen = false;

	$: groups = [
		[
			{
				label: "Profile",
				icon: User,
				href: `/users/${$page.data.authUser?.id}`,
			},
			{
				label: "Notifications",
				icon: Bell,
				onClick: (event: Event) => {
					event.preventDefault();

					dropdownOpen = false;
					$notificationsOpen = true;
				},
			},
			{
				label: "Upload emote",
				icon: Upload,
				href: "/emotes/new",
			},
			{
				label: "Oribt Plus",
				icon: Star,
				href: "/plus",
			},
		],
		[
			{
				label: "Theme",
				icon: $mode === "dark" ? Moon : Sun,
				onClick: (event: Event) => {
					event.preventDefault();

					toggleMode();
				},
			},
			{
				label: "Settings",
				icon: Settings,
				href: "/settings/account",
			},
		],
		[
			{
				label: "Log out",
				icon: LogOut,
				onClick: () => {},
			},
		],
	];
</script>

<header class="absolute z-20 w-full">
	<div class="mx-auto max-w-6xl px-4 sm:px-6">
		<div class="flex h-16 items-center justify-between md:h-20">
			<div class="mr-4 shrink-0">
				<a class="block" href="/" aria-label="Orbit">
					<img src="/img/logo.svg" alt="Orbit" width="38" height="38" />
				</a>
			</div>

			<nav class="flex grow flex-wrap items-center justify-end space-x-2">
				<Button class="text-current" href="/emotes" variant="link">Emotes</Button>
				<Button class="text-current" href="/sets" variant="link">Sets</Button>

				<Separator class="h-6" orientation="vertical" />

				{#if $page.data.authUser}
					{@const user = $page.data.authUser}

					<DropdownMenu.Root bind:open={dropdownOpen}>
						<DropdownMenu.Trigger asChild let:builder>
							<Button class="group text-current" builders={[builder]} variant="link">
								{user.username}

								<ChevronRight class="ml-2 transition-transform group-data-[state=open]:rotate-90" />
							</Button>
						</DropdownMenu.Trigger>

						<DropdownMenu.Content class="w-44 [&_a]:w-full">
							{#each groups as items, i}
								<DropdownMenu.Group>
									{#each items as item}
										<DropdownMenu.Item>
											<svelte:component this={item.icon} class="mr-2" />

											{#if item.href}
												<a href={item.href}>{item.label}</a>
											{:else}
												<button class="w-full text-left" type="button" on:click={item.onClick}>
													{item.label}
												</button>
											{/if}
										</DropdownMenu.Item>
									{/each}
								</DropdownMenu.Group>

								{#if i !== groups.length - 1}
									<DropdownMenu.Separator />
								{/if}
							{/each}
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				{:else}
					<Button class="text-current" href="/login/twitch" variant="link">Log in</Button>
				{/if}
			</nav>
		</div>
	</div>
</header>
