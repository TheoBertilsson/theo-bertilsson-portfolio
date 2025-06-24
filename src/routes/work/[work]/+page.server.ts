import { createClient, type Entry } from 'contentful';
import type { PageServerLoad } from './$types';
import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from '$env/static/private';

export const load = (async ({ params }) => {
	let work: undefined | Entry[];
	const client = createClient({
		space: CONTENTFUL_SPACE_ID,
		accessToken: CONTENTFUL_ACCESS_TOKEN
	});

	const response = await client.getEntries({
		content_type: 'work',
		'fields.slug': params.work
	});

	work = response.items;
	console.log(work);
	return { work };
}) satisfies PageServerLoad;
