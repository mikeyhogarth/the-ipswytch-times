<script lang="ts">
	import { Header } from '$lib/components';
	import '../app.css';
</script>

<div class="bg-white min-h-screen font-serif">
	<Header />

	<main class="m-auto max-w-6xl">
		<slot />
	</main>
</div>
