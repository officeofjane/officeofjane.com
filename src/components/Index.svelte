<script>
  import { getContext } from "svelte";

  const copy = getContext("copy");
</script>

<h1>{copy.hed}</h1>
<article>
  <ul>
    <li><a href="./particles">Particle animation from Josh Comeau</a></li>
  </ul>
</article>