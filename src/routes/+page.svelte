<script lang="ts">
	import profileImage from '$lib/assets/profileImageWithBackground.png';
	import deadliftPlaceholder from '$lib/assets/deadlift.png';
	import copyIcon from '$lib/assets/copy.svg';

	let { data } = $props();
</script>

<main class="mx-auto flex max-w-5xl flex-col items-center gap-10 p-5 sm:p-10 md:gap-20">
	<header class="flex w-full flex-col-reverse justify-between gap-5 md:flex-row">
		<h1 class="text-4xl font-semibold sm:text-8xl lg:text-9xl">THEO <br /> BERTILSSON</h1>
		<img src={profileImage} alt="Profile of Theo Bertilsson" class="size-40 rounded-full" />
	</header>
	<aside class="flex w-full flex-col items-start justify-between gap-5 sm:flex-row">
		<div class="flex items-center justify-center gap-2">
			<a href="mailto:theo.uab@icloud.com">theo.uab@icloud.com</a>
			<button
				class="m-auto size-4"
				onclick={() => navigator.clipboard.writeText('theo.uab@icloud.com')}
			>
				<img src={copyIcon} alt="copy email" />
			</button>
		</div>
		<p class="w-full text-2xl font-semibold sm:max-w-1/2 lg:text-4xl">
			Hello, I'm a junior Frontend developer — based in Gothenburg, Sweden. <br />Let’s create
			something cool!
		</p>
	</aside>
	<article class="flex w-full flex-col items-center gap-12 sm:gap-24">
		<section class="flex w-full flex-col items-center gap-5">
			<div class="flex w-full items-end justify-between">
				<p class="text-lg">work.</p>
				<a
					href="/work"
					class="flex h-12 w-28 items-center justify-center bg-gray-300 font-semibold hover:bg-gray-400"
					>Show more</a
				>
			</div>
			<div class="flex w-full max-w-5xl flex-col gap-4 sm:grid sm:grid-cols-2">
				{#each data.works as work}
					<a href={`/${work.fields.slug}`}
						><img
							src={work.fields.thumbnail?.fields.file.url}
							alt=""
							class="aspect-square w-full overflow-clip object-center"
						/></a
					>
				{/each}
			</div>
		</section>
		<section class="flex w-full flex-col items-start gap-5">
			<div class="flex w-full items-end justify-between">
				<p class="text-lg">about.</p>
				<a
					href="/about"
					class="flex h-12 w-28 items-center justify-center bg-gray-300 font-semibold hover:bg-gray-400"
					>Show more</a
				>
			</div>
			<div class="flex w-full flex-col gap-16">
				<p class="w-full text-3xl font-semibold sm:max-w-1/2">
					I collaborate with businesses of all sizes worldwide, using the latest technologies. My
					designs have also earned multiple awards
				</p>
				<div class="flex w-full flex-col items-center justify-center gap-5 sm:flex-row sm:gap-16">
					<img
						src={deadliftPlaceholder}
						alt="AI generated deadlift"
						class="m-5 w-full sm:m-0 sm:max-w-2/5"
					/>
					<p class="w-full text-lg sm:max-w-2/5">
						I’m dedicated to crafting beautiful and highly functional designs that seamlessly align
						with my clients' unique needs and long-term goals
					</p>
				</div>
			</div>
		</section>
	</article>
</main>
