<script>
	import menuIcon from '$lib/assets/menu.svg';
	import closeIcon from '$lib/assets/close.svg';
	import { fade, fly } from 'svelte/transition';

	let isMenuOpen = $state(false);
</script>

<header class="w-full bg-white">
	<nav class="flex w-full justify-between px-8 py-7">
		<a href="/" class=" text-xl font-bold">THEO</a>
		<div class="relative flex size-[30px] w-40 items-center justify-end">
			{#if isMenuOpen}
				<ul
					in:fly={{ duration: 100, x: 30 }}
					out:fly={{ duration: 100, x: 30 }}
					class="flex gap-4 pr-12"
				>
					<li class="font-semibold hover:text-gray-500"><a href="/work">Work</a></li>
					<li class="font-semibold hover:text-gray-500"><a href="/about">About</a></li>
					<li class="font-semibold hover:text-gray-500"><a href="/contact">Contact</a></li>
				</ul>
				<button
					transition:fade={{ duration: 100 }}
					class="top- absolute flex size-[30px] items-center justify-center p-0.5"
					onclick={() => (isMenuOpen = !isMenuOpen)}
				>
					<img src={closeIcon} alt="Menu" class="size-5" />
				</button>
			{:else}
				<button
					transition:fade={{ duration: 100 }}
					class="absolute flex size-[30px] items-center justify-center p-0.5"
					onclick={() => (isMenuOpen = !isMenuOpen)}
				>
					<img src={menuIcon} alt="Menu" class="size-5" />
				</button>
			{/if}
		</div>
	</nav>
</header>
