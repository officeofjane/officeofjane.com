<script>
  import { getContext } from "svelte";

  const copy = getContext("copy");
</script>

  <section>
    <h1>{copy.hed}</h1>
    <p>{copy.bio}</p>
    <p>You can reach me via <a href="mailto:officeofjane@gmail.com">email</a>.</p>
  </section>

<style>
  section {
    height: 100%;
    max-width: var(--copy-width);
    margin: 0 auto;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-weight: 400;
  }

  p {
    width: 100%;
    text-wrap: pretty;
  }
</style>
