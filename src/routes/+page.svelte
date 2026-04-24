<script>
  import { setContext } from "svelte";
  import copy from "$data/copy.json";

  import Index from "$components/Index.svelte";

  setContext("copy", copy);
</script>

<Index />