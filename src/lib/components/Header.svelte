<script>
	import menuIcon from '$lib/assets/menu.svg';
	import closeIcon from '$lib/assets/close.svg';
	import { fade, fly } from 'svelte/transition';

	let isMenuOpen = $state(false);
</script>

<header class="w-full bg-white">
	<nav class="flex w-full justify-between px-8 py-7" aria-label="Main navigation">
		<a href="/" class="text-xl font-bold">THEO</a>
		<div class="relative flex size-[30px] w-40 items-center justify-end">
			{#if isMenuOpen}
				<ul
					in:fly={{ duration: 100, x: 30 }}
					out:fly={{ duration: 100, x: 30 }}
					class="flex gap-4 pr-12"
					id="main-menu"
				>
					<li class="hover:text-menu-link-hover font-semibold"><a href="/work">Work</a></li>
					<li class="hover:text-menu-link-hover font-semibold"><a href="/about">About</a></li>
					<li class="hover:text-menu-link-hover font-semibold"><a href="/contact">Contact</a></li>
				</ul>
				<button
					transition:fade={{ duration: 100 }}
					class="absolute flex size-[30px] items-center justify-center p-0.5"
					onclick={() => (isMenuOpen = !isMenuOpen)}
					aria-label="Close main menu"
					aria-expanded="true"
					aria-controls="main-menu"
				>
					<img src={closeIcon} alt="Close menu" class="size-5" />
				</button>
			{:else}
				<button
					transition:fade={{ duration: 100 }}
					class="absolute flex size-[30px] items-center justify-center p-0.5"
					onclick={() => (isMenuOpen = !isMenuOpen)}
					aria-label="Open main menu"
					aria-expanded="false"
					aria-controls="main-menu"
				>
					<img src={menuIcon} alt="Open menu" class="size-5" />
				</button>
			{/if}
		</div>
	</nav>
</header>
