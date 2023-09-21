<script lang="ts">
  import { onMount } from "svelte";
  let speed: number = 2;
  let images: string[] = [
    "bet365.png",
    "qrt.png",
    "booking.com.png",
    "bloomberg.png"
  ]

  let ticker: HTMLElement;
  let offset: number = 0;

  function animate() {
    offset -= speed;
    if (offset <= -ticker.offsetWidth / 6) {
      offset = 0;
    }
    
    ticker.style.transform = `translateX(${offset}px)`;
    requestAnimationFrame(animate);
  }

  onMount(() => {
    requestAnimationFrame(animate);
  });
</script>

<div class="ticker-container">
  <div class="ticker" bind:this={ticker}>
    {#each images as image (image)}
      <img class="sponsor-image" src={`/sponsors/${image}`} alt={image}>
    {/each}
    {#each images as image (image)}
      <img class="sponsor-image" src={`/sponsors/${image}`} alt={image}>
    {/each}
    {#each images as image (image)}
      <img class="sponsor-image" src={`/sponsors/${image}`} alt={image}>
    {/each}
    {#each images as image (image)}
      <img class="sponsor-image" src={`/sponsors/${image}`} alt={image}>
    {/each}
    {#each images as image (image)}
      <img class="sponsor-image" src={`/sponsors/${image}`} alt={image}>
    {/each}
    {#each images as image (image)}
      <img class="sponsor-image" src={`/sponsors/${image}`} alt={image}>
    {/each}
  </div>
</div>

<style>
  .ticker-container {
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    width: 100%;
  }

  .ticker {
    display: inline-flex;
    animation-timing-function: linear;
  }

  img {
    height: 50px; /* adjust as needed */
    margin-right: 10px;
  }

  .sponsor-image {
    margin: 0 1rem;
    filter: grayscale(100);
  }
</style>