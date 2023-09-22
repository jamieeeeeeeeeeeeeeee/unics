<script lang="ts">
  import type { PageData } from './$types';
  import ImageTicker from '$lib/ImageTicker.svelte';

  export let data: PageData;
</script>

<main>
  <h1>OUR SPONSORS</h1>
  <div class="container">
    <h2>Gold Sponsors</h2>
    {#each data.props.sponsors.gold as sponsor}
    <div class="sponsor">
      <a href={sponsor.url} target="_blank">
        <img class="sponsor-logo" src={`/sponsors/${sponsor.name.replace(" ", "_")}.png`} alt={sponsor.name} width={"300px"}/>
      </a>
      <p>{sponsor.description}</p>
    </div>
    {/each}
    <h2>Silver Sponsors</h2>
    {#each data.props.sponsors.silver as sponsor}
    <div class="sponsor">
      <a href={sponsor.url} target="_blank">
        <img class="sponsor-logo" src={`/sponsors/${sponsor.name.replace(" ", "_").toLowerCase()}.png`} alt={sponsor.name} width={"300px"}/>
      </a>
      <p>{sponsor.description}</p>
    </div>
    {/each}
    <h2>Over the past few years we have been sponsored by:</h2>
    <ImageTicker />
  </div>
</main>

<style>
  main {
    background-color: #000;
    color: #fff;
    padding: 0 1rem;
  }

  h1 {
    color: #b536da;
    font-size: 3rem;
  }
  
  h2 {
    color: #b536da;
  }

  p {
    line-height: 1.3;
  }

  .sponsor {
    margin: 3rem 0;
  }

  .sponsor-logo {
    display: block;
    margin: 0 auto;
  }
</style>