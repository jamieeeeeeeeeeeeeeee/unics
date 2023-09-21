<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<main>
  <h1>COMMITTEE</h1>
  <div class="grid">
    {#each data.props.committee.current as member}
    <div class="member">
      <a href={member.linkedin} target="_blank"><img src={`/person.png`} alt={member.name} /></a>
      <div>{member.name}</div>
      <div class="purple">{member.position}</div>
      <div class="smaller">{member.email}</div>
    </div>
    {/each}
  </div>
  <h1>2022-2023</h1>
  <div class="grid">
    {#each data.props.committee['2022-2023'] as member}
      <div class="member">
        <a href={member.linkedin} target="_blank"><img src={`/person.png`} alt={member.name} /></a>
        <div>{member.name}</div>
        <div>{member.position}</div>
      </div>
    {/each}
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
    margin-top: 120px;
    font-size: 3rem;
  }

  .purple {
    color: #b536da;
  }

  .smaller {
    font-size: 0.8rem;
  }

  .member {
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease-in-out;
    align-items: center;
  }

  .member:hover {
    transform: translateY(-5px);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
  }

  img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }
</style>