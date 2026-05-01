<script>
  let {
    title = "",
    description = "",
    url = "https://officeofjane.com"
  } = $props();
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="author" content="Jane Pong" />
  
  <meta property="og:title" content={title} />
  <meta property="og:url" content={url} />
  <meta property="og:description" content={description} />
</svelte:head>