<script>
  import { tweened } from 'svelte/motion';
  let initialTime = 25 * 60; // TYPE NUMBER OF SECONDS HERE
  let timer = tweened(initialTime);

  function startTimer() {
    setInterval(() => {
      if ($timer > 0) $timer--;
    }, 1000);
  }

  $: minutes = Math.floor($timer / 60);
  $: minname = minutes > 1 ? 'mins' : 'min';
  $: seconds = Math.floor($timer - minutes * 60);

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

<div class="card border-2 mt-8">
  <div class="grid grid-cols-2 px-2 py-2">
    <span class="place-self-start text-3xl">{minutes}:{seconds}</span>
    <div class="place-self-end">
      <button class="btn-primary" on:click={startTimer}>START</button>
    </div>
  </div>
  <!-- time progress bar -->
  <div class="px-2 mt-3">
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

<div class="card px-6 mt-4 mb-6">
  <div class="grid grid-cols-12 gap-4 mb-5">
    <input class="col-span-12 text-lg w-full" type="text" placeholder="Title" />
  </div>

  {#each tasksInput.subTasks as subTask}
    <div class="grid grid-cols-12 mt-4 mb-4">
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
