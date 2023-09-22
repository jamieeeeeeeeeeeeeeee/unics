<script> 
  import Calendar from '$lib/Calendar.svelte'
</script>

<main>
  <div class="container align-items-center top">
    <div class="top">
      <div class="unics">
        <div class="uni-white">Uni</div>
        <div class="cs-purple">CS</div>
      </div>
    </div>
    <div class="unicsdesc">University of Manchester</div>
    <div class="unicsdesc">Computer Science Society</div>
  </div>

  <div class="container" id="about">
    <h1>ABOUT US</h1>
    <p>UniCS is the University of Manchester's tech society. We are a big community with a passion for technology and creating innovative solutions for everyone to enjoy. Through our hackathons and other events, we aim to bring students and industry closer together. When we aren't organising our own events we also travel to events in places like Barcelona, Helsinki, Bordeaux, amongst other exotic destinations, often free due to various hackathon sponsors. Come join us to see what we get up to this year!</p>
  </div>
  <div class="container" id="events">
    <h1>EVENTS</h1>
    <p>Our events are suited to every level of knowledge and degree course. If you are someone who is interested in knowing how they can use computers to see an idea come to life, UniCS is the society for you. It doesn't matter if you have never touched a computer or been programming for years, you will never be bored at our events. And if you still aren't convinced, we have free pizza (and occasionally drinks).<br>You can keep up-to-date with our events and see a full list of them by following our <a href="https://www.instagram.com/unicsmcr/">Instagram Page</a>.</p>
  </div>
</main>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #000;
    padding: 0 1rem;
  }

  .align-items-center {
    align-items: center;
  }

  a {
    color: #000;
  }

  .container > p {
    line-height: 1.3;
  }

  .unics {
    display: flex;
    flex-direction: row;
    font-size: 8em;
    font-weight: bold;
    margin-bottom: 3rem;
    background-color: #000;
    padding: 1rem;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .top {
    padding-top: 21vh;
  }

  .unicsdesc {
    font-size: 1.5em;
  }

  .uni-white {
    color: #fff;
  }

  .cs-purple {
    color: #b536da;
  }

  .container > h1 {
    margin-bottom: 0;
    color: #b536da;
  }

  @media screen and (max-width: 800px) {
    .unics {
      font-size: 6.5em;
    }
    .unicsdesc {
      font-size: 1.2em;
    }
  }

  .unics {
    margin-top: -11.25rem; /*hacky*/
  }

  main {
    font-size: 1.5rem;
    margin: auto;
    background-color: rgb(224, 207, 233);
    border-radius: 20px;
    padding: 64px;
  }

  @media screen and (max-width: 1264px) {
    main {
      border-radius: 0;
      padding: 64px;
    }
  }
</style>