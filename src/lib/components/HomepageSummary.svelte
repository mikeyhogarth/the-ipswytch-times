<script lang="ts">
	import { RichTextArea } from '$lib/components';
	import type { InputValue } from '@portabletext/svelte/ptTypes';

	export let headline: string;
	export let content: InputValue;
</script>

<article class="px-10">
	<h2 class="text-3xl font-bold mb-4">{headline}</h2>
	<RichTextArea value={content} />
</article>
