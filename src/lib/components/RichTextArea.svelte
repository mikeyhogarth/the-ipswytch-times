<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { Blockquote, Paragraph } from '$lib/components';
	import type { InputValue } from '@portabletext/svelte/ptTypes';
	export let value: InputValue;

	const components = {
		block: {
			normal: Paragraph,
			blockquote: Blockquote
		}
	};
</script>

<PortableText {value} {components} />
