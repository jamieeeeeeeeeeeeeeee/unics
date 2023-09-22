<script lang="ts">
  let date: Date = new Date();

  function getDaysArray(): (number)[] {
    let daysInLastMonth: number = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    let daysInThisMonth: number = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    let firstDayInThisMonth: number = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    let days: (number) [] = [];
    for (let i = 1; i < firstDayInThisMonth; i++) {
      days.push(33 + daysInLastMonth - firstDayInThisMonth + i);
    }
    for (let i = 1; i <= daysInThisMonth; i++) {
      days.push(i);
    }
    let day: number = 1;
    while (days.length < 35) {
      days.push(32 + day++);
    } 
    return days;
  }
</script>

<div class="calendar">
  <!--<div class="title">
    {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
  </div>-->
  <div class="calendargrid"> 
    {#each getDaysArray() as day (day)}
      <div class="day {day > 31 ? 'inactive' : ''}">
        {day % 32}
      </div>
    {/each}
  </div>
</div>


<style>
  .calendar {
    display: flex;
    flex-direction: column;;
  }
  /*.title {
    font-size: 2rem;
    margin: 1rem 0;
    color: #b536da;
  }*/
  .calendargrid {
    margin: auto 0;
    padding: 0 20rem;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .day {
    border: 1px solid #ccc;
    height: 90px;
    display: flex;
  }

  .day.inactive {
    color:#363636
  }

  @media screen and (max-width: 800px) {
    .calendargrid {
      padding: 0 1rem;
    }
  }
</style>