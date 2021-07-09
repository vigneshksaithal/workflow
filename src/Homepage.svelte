<script>
  import { tweened } from "svelte/motion";
  let initialTime = 25 * 60; // TYPE NUMBER OF SECONDS HERE
  let timer = tweened(initialTime);

  function startTimer() {
    setInterval(() => {
      if ($timer > 0) $timer--;
    }, 1000);
  }

  $: minutes = Math.floor($timer / 60);
  $: minname = minutes > 1 ? "mins" : "min";
  $: seconds = Math.floor($timer - minutes * 60);

  var tasksInput = {
    title: "222 Task title",
    duration: 10,
    subTasks: [],
  };

  function addTask() {
    tasksInput.subTasks.push({
      title: "",
      status: "",
      isTaskDone: false,
    });

    tasksInput.subTasks = tasksInput.subTasks;
  }
</script>

<div class="">
  <div class="card border-2">
    <div class="grid grid-cols-2 px-2 py-2">
      <span class="place-self-start text-3xl">{minutes}:{seconds}</span>
      <div class="place-self-end">
        <button class="btn-primary" on:click={startTimer}>START</button>
      </div>
    </div>
    <!-- progress bar -->
    <div class="h-3 relative w-full rounded-full overflow-hidden mt-2">
      <div class="w-full h-full bg-gray-200 absolute" />
      <div
        id="bar"
        class="h-full bg-green-500 relative"
        style="width: {($timer / initialTime) * 100}%;"
      />
    </div>

    <!-- <progress class="w-full bg-indigo-600" value={$timer / original} /> -->
  </div>

  <div class="card px-6 mt-4 mb-6">
    <div class="grid grid-cols-12 gap-4 mb-5">
      <input
        class="col-span-12 input-text w-full"
        type="text"
        placeholder="Title"
      />
      <!-- <button class="col-span-1">Date</button> -->
      <!-- timer dropdown -->
    </div>

    {#each tasksInput.subTasks as subTask}
      <div class="grid grid-cols-12 mt-4">
        <input
          class="checkbox col-span-1 line-through {subTask.isTaskDone == true
            ? 'line-through'
            : ''}"
          type="checkbox"
          on:change={() => {
            subTask.isTaskDone = true;
            subTask = subTask;
          }}
        />
        <input
          class="col-span-11"
          type="text"
          placeholder="Task name"
          bind:value={subTask.title}
        />
      </div>
    {/each}
    <div class="">
      <button class="btn-secondary mt-5" on:click={addTask}>Add a task</button>
    </div>
  </div>
</div>
