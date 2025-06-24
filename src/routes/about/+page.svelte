<script lang="ts">
	import deadlift from '$lib/assets/deadlift.png';
	import firebaseIcon from '$lib/assets/icons/firebase.svg';
	import gitIcon from '$lib/assets/icons/git.svg';
	import jsIcon from '$lib/assets/icons/javaScript.svg';
	import reactIcon from '$lib/assets/icons/react-light.svg';
	import svelteIcon from '$lib/assets/icons/svelte.svg';
	import tailwindIcon from '$lib/assets/icons/tailwind.svg';
	import threejsIcon from '$lib/assets/icons/threejs.svg';
	import typescriptIcon from '$lib/assets/icons/typeScript.svg';
	import vercelIcon from '$lib/assets/icons/vercel-light.svg';
	import zod from '$lib/assets/icons/zod.svg';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let sliderItems = [
		{ name: 'JavaScript', icon: jsIcon },
		{ name: 'TypeScript', icon: typescriptIcon },
		{ name: 'React', icon: reactIcon },
		{ name: 'Svelte', icon: svelteIcon },
		{ name: 'Tailwind', icon: tailwindIcon },
		{ name: 'Three.js', icon: threejsIcon },
		{ name: 'Firebase', icon: firebaseIcon },
		{ name: 'Zod', icon: zod },
		{ name: 'Git', icon: gitIcon },
		{ name: 'Vercel', icon: vercelIcon }
	];
	let displayItems = [...sliderItems, ...sliderItems];
	let start = 0;

	const slide = () => {
		start = (start + 1) % sliderItems.length;
	};

	let interval: number;

	onMount(() => {
		interval = setInterval(slide, 2000);
		return () => {
			clearInterval(interval);
		};
	});
</script>

<main class="mx-auto flex max-w-5xl flex-col items-center gap-10 p-5 sm:p-10 md:gap-20">
	<header class="flex w-full flex-col-reverse justify-between gap-5 md:flex-row">
		<h1 class="w-full text-center text-4xl font-semibold sm:text-8xl lg:text-9xl">
			THEO <br /> BERTILSSON
		</h1>
	</header>
	<article class="flex w-full flex-col gap-10">
		<section class="flex w-full flex-col gap-5 border-b border-gray-300 pb-10">
			<div class="flex w-full items-end justify-between gap-5">
				<h2 class="text-lg">about.</h2>
				<a
					href="../../lib/assets/CV/CV-EN.pdf"
					class="flex h-10 w-24 items-center justify-center bg-gray-300 text-sm font-semibold hover:bg-gray-400"
					>Read CV</a
				>
			</div>
			<div class="w-full">
				<p class=" font-inter w-2/3 text-end text-lg font-medium">
					I enjoy working on projects that challenge me to learn and grow, and I’m always looking
					for new opportunities to collaborate with others in the tech community.
				</p>
			</div>
			<div class="flex w-full items-center justify-between gap-5">
				<img src={deadlift} alt="AI generated of med deadlifting" class="w-1/2" />
				<p class="text-sm">
					When I’m not coding, you can find me pumping iron, exploring the mind, or experimenting
					with new technologies. I’m always eager to connect with like-minded individuals, so feel
					free to reach out if you’d like to chat about tech, training, or anything else!
				</p>
			</div>
		</section>
		<section class="flex w-full flex-col gap-20 border-b border-gray-300 pb-10">
			<div class="flex w-full items-end justify-between gap-5">
				<h2 class="text-lg">i make websites that are.</h2>
				<a
					href="/work"
					class="flex h-10 w-24 items-center justify-center bg-gray-300 text-sm font-semibold hover:bg-gray-400"
					>My work</a
				>
			</div>
			<div class="w-full">
				<ul class="flex w-full flex-col items-center gap-3 text-4xl font-bold uppercase">
					<li>Responsive</li>
					<li>SEO</li>
					<li>Accessible</li>
					<li>Engaging design</li>
					<li>Fast</li>
				</ul>
			</div>

			<div class="w-full overflow-hidden px-5">
				<ul
					class="flex [animation:slide-left_30s_linear_infinite] items-center gap-8"
					style="min-width: max-content;"
				>
					{#each displayItems as item}
						<li
							class="flex min-w-[160px] items-center justify-center gap-2 text-center text-gray-500"
						>
							<img src={item.icon} alt="slider icon" class="size-5 rounded-xs" />
							{item.name}
						</li>
					{/each}
				</ul>
			</div>
		</section>
	</article>
</main>
