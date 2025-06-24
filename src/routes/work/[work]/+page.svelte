<script lang="ts">
	import type { PageData } from './$types';
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

	let { data }: { data: PageData } = $props();

	const aboutContent = documentToHtmlString(data.work[0].fields.about);
	const challengeContent = documentToHtmlString(data.work[0].fields.challenge);
	const resultContent = documentToHtmlString(data.work[0].fields.results);
</script>

<main class="mx-auto flex max-w-5xl flex-col gap-5 p-5 sm:p-10 md:gap-10">
	<header class="flex w-full flex-col items-end gap-5">
		<ul class="flex w-full flex-col items-end gap-1 text-sm">
			<li>
				<span class="text-gray-400">Company:</span><span>{data.work[0].fields.company}</span>
			</li>
			<li>
				<span class="text-gray-400">Date:</span><span>{data.work[0].fields.date}</span>
			</li>
		</ul>
	</header>
	<article class="flex w-full flex-col items-center gap-20">
		<section
			class="flex w-full flex-col-reverse items-center justify-center gap-5 md:flex-row md:gap-10"
		>
			<img
				src={data.work[0].fields.images[0].fields.file.url}
				alt="Thumbnail for the work"
				class=" w-full object-cover md:max-w-2/3"
			/>
			<h1 class="text-2xl font-semibold sm:text-4xl lg:text-5xl">
				{data.work[0].fields.title}
			</h1>
		</section>
		<section class="flex w-full flex-col items-end gap-5">
			<div class="flex w-full items-end justify-between">
				<p class="font-semibold">about.</p>
				<a
					href={data.work[0].fields.url}
					class="flex h-10 w-24 items-center justify-center bg-gray-300 text-sm hover:bg-gray-400"
					>See It Live</a
				>
			</div>
			<div class="flex w-full max-w-2/3 text-sm">
				{@html aboutContent}
			</div>
			<img src={data.work[0].fields.images[1].fields.file.url} alt="" />
		</section>
		<section class="flex w-full flex-col items-end gap-5">
			<div class="flex w-full items-end justify-between">
				<p class="font-semibold">challenge.</p>
			</div>
			<div class="flex w-full max-w-2/3 text-sm">
				{@html challengeContent}
			</div>
			<img src={data.work[0].fields.images[2].fields.file.url} alt="" />
		</section>
		<section class="flex w-full flex-col items-end gap-5">
			<div class="flex w-full items-end justify-between">
				<p class="font-semibold">results.</p>
			</div>
			<div class="flex w-full max-w-2/3 text-sm">
				{@html resultContent}
			</div>
			<img src={data.work[0].fields.images[3].fields.file.url} alt="" />
		</section>
	</article>
</main>
