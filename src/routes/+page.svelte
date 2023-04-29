<script lang="ts">
	import type { NewsStory } from '$lib/types';
	import type { PageData } from './$types';
	import { HomepageSummary } from '$lib/components';

	export let data: PageData;
	const newsStories: NewsStory[] = data.stories;
</script>

<div class="lg:grid lg:grid-cols-3">
	{#each newsStories as { headline, content }}
		<HomepageSummary {headline} {content} />
	{/each}
</div>
