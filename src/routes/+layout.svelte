<script lang="ts">
  export let data;
	import { setLanguageTag } from "$paraglide/runtime";

  $: setLanguageTag(data.lang);
</script>

<slot />