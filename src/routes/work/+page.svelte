<script lang="ts">
	let { data } = $props();
</script>

<main class="mx-auto flex max-w-5xl flex-col gap-10 p-5 sm:p-10 md:gap-20">
	<h1 class="text-4xl font-semibold sm:text-8xl lg:text-9xl">WORK</h1>
	<section class="flex w-full flex-col items-center gap-5">
		<div class="flex w-full items-end justify-end">
			<p class="text-lg">work 2024-2025</p>
		</div>
		<div class="flex w-full max-w-5xl flex-col gap-4 sm:grid sm:grid-cols-2">
			{#each data.works as work}
				<a href={`/work/${work.fields.slug}`}
					><img
						src={work.fields.thumbnail?.fields.file.url}
						alt=""
						class="aspect-square w-full overflow-clip object-center"
					/></a
				>
			{/each}
		</div>
	</section>
</main>
