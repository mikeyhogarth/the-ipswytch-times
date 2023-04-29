<script lang="ts">
	import { Headline, RichTextArea } from '$lib/components';
	import type { InputValue } from '@portabletext/svelte/ptTypes';

	export let headline: string;
	export let content: InputValue;
</script>

<article class="px-4 md:px-10 mb-10">
	<Headline value={headline} />
	<RichTextArea value={content} />
</article>
