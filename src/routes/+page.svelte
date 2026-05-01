<script>
  import { setContext } from "svelte";
  import copy from "$data/copy.json";

  import Meta from "$components/Meta.svelte";
  import Index from "$components/Index.svelte";

  const { title, description, url } = copy.meta;
  setContext("copy", copy);
</script>

<Meta {title} {description} {url} />
<Index />