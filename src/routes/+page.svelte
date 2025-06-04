<script lang="ts">
	import profileImage from '$lib/assets/profileImage.png';
	import deadliftPlaceholder from '$lib/assets/deadlift.png';
	import copyIcon from '$lib/assets/copy.svg';
</script>

<main class="mx-auto flex max-w-5xl flex-col items-center gap-20 py-10">
	<header class="flex w-full justify-between">
		<h1 class="text-9xl font-semibold">THEO <br /> BERTILSSON</h1>
		<img src={profileImage} alt="Profile of Theo Bertilsson" class="size-40 rounded-full" />
	</header>
	<aside class="flex w-full items-start justify-between">
		<div class="flex items-center justify-center gap-2">
			<a href="mailto:theo.uab@icloud.com">theo.uab@icloud.com</a>
			<button
				class="m-auto size-4"
				onclick={() => navigator.clipboard.writeText('theo.uab@icloud.com')}
			>
				<img src={copyIcon} alt="copy email" />
			</button>
		</div>
		<p class="max-w-1/2 text-4xl font-semibold">
			Hello, I'm a junior Frontend developer — based in Gothenburg, Sweden. <br />Let’s create
			something cool!
		</p>
	</aside>
	<article class="flex w-full flex-col items-center gap-24">
		<section class="flex w-full flex-col items-center gap-5">
			<div class="flex w-full items-end justify-between">
				<p class="text-lg">work.</p>
				<a
					href="/work"
					class="flex h-12 w-28 items-center justify-center bg-gray-300 font-semibold hover:bg-gray-400"
					>Show more</a
				>
			</div>
			<div class="grid w-full max-w-5xl grid-cols-2 gap-4">
				<div class="aspect-square w-full bg-gray-400">1</div>
				<div class="aspect-square w-full bg-gray-400">2</div>
				<div class="aspect-square w-full bg-gray-400">3</div>
				<div class="aspect-square w-full bg-gray-400">4</div>
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
				<p class="w-full max-w-1/2 text-3xl font-semibold">
					I collaborate with businesses of all sizes worldwide, using the latest technologies. My
					designs have also earned multiple awards
				</p>
				<div class="flex w-full items-center justify-center gap-16">
					<img src={deadliftPlaceholder} alt="AI generated deadlift" class="w-full max-w-2/5" />
					<p class="w-full max-w-2/5 text-lg">
						I’m dedicated to crafting beautiful and highly functional designs that seamlessly align
						with my clients' unique needs and long-term goals
					</p>
				</div>
			</div>
		</section>
	</article>
</main>
