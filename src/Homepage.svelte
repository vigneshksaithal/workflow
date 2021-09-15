<script>
  import { tweened } from 'svelte/motion';
  let initialTime = 25 * 60; // TYPE NUMBER OF SECONDS HERE
  let timer = tweened(initialTime);

  var isStartButtonDisabled = false;

  function startTimer() {
    setInterval(() => {
      if ($timer > 0) $timer--;
    }, 1000);
  }

  $: minutes = Math.floor($timer / 60);
  $: minname = minutes > 1 ? 'mins' : 'min';
  $: seconds = Math.floor($timer - minutes * 60);

  var interval = 1000; // ms
  var expected = Date.now() + interval;

  setTimeout(step, interval);
  function step() {
    var dt = Date.now() - expected; // the drift (positive for overshooting)
    if (dt > interval) {
      // something really bad happened. Maybe the browser (tab) was inactive?
      // possibly special handling to avoid futile "catch up" run
    }
    // do what is to be done

    expected += interval;
    setTimeout(step, Math.max(0, interval - dt)); // take into account drift
  }

  var tasksInput = {
    title: '',
    duration: 0,
    subTasks: [],
  };

  function addTask() {
    tasksInput.subTasks.push({
      title: '',
      status: '',
      isTaskDone: false,
    });

    tasksInput.subTasks = tasksInput.subTasks;
  }
  var checkbox;
</script>

<div class="card mt-8">
  <div class="grid grid-cols-2 px-2 py-2">
    <div class="grid grid-cols-1">
      <span class="place-self-start text-5xl">{minutes}:{seconds}</span>

      <!-- time progress bar -->
      <div class="mt-3">
        <div class="h-3 relative w-full rounded-full overflow-hidden">
          <div class="w-full h-full bg-gray-200 absolute" />
          <div
            id="bar"
            class="h-full bg-green-500 relative"
            style="width: {($timer / initialTime) * 100}%;"
          />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1">
      <div class="place-self-end mb-2">
        <button
          class="btn-primary w-24"
          disabled={isStartButtonDisabled}
          on:click={() => {
            startTimer();
            isStartButtonDisabled = true;
          }}>START</button
        >
      </div>
      <div class="place-self-end">
        <button
          class="btn-danger w-24"
          disabled={!isStartButtonDisabled}
          on:click={() => {
            isStartButtonDisabled = false;
          }}>STOP</button
        >
      </div>
    </div>
  </div>
</div>

<div class="card px-6 mt-4 mb-6">
  <div class="grid grid-cols-12 gap-4 mb-5">
    <input class="col-span-12 text-lg w-full" type="text" placeholder="Title" />
  </div>

  {#each tasksInput.subTasks as subTask}
    <div class="grid grid-cols-12 my-5">
      <input
        class="checkbox col-span-1 pr-2"
        type="checkbox"
        bind:checked={subTask.isTaskDone}
      />
      <input
        class="col-span-11 ml-2 disabled:opacity-30"
        disabled={subTask.isTaskDone}
        type="text"
        placeholder="Task name"
        bind:value={subTask.title}
      />
    </div>
  {/each}
  <div class="flex justify-end mt-8">
    <button class="btn-secondary" on:click={addTask}>Add a task</button>
  </div>
</div>
