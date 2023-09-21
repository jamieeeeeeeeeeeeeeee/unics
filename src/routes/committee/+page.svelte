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
      <div class="name">{member.name}</div>
      <div class="position">{member.position}</div>
      <div class="email">{member.email}</div>
    </div>
    {/each}
  </div>
  <h1>2022-2023</h1>
  <div class="grid">
    {#each data.props.committee['2022-2023'] as member}
      <div class="member">
        <a href={member.linkedin} target="_blank"><img src={`/person.png`} alt={member.name} /></a>
        <div class="name">{member.name}</div>
        <div class="position">{member.position}</div>
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
    font-size: 3rem;
  }
  
  .position {
    color: #b536da;
  }

  .email {
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

  @media screen and (max-width: 800px) {
    .grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    .name {
      font-size: 0.8em;
    }

    .position {
      font-size: 0.8em;
    }

    .email {
      font-size: 0.64em;
    }
  }
</style>