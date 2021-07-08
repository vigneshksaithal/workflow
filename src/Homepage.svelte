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
    });

    tasksInput.subTasks = tasksInput.subTasks;
  }
</script>

<div class="">
  <div class="card border-2">
    <div class="grid grid-cols-12 px-2 py-2">
      <span class="col-span-10 text-4xl">{minutes}:{seconds}</span>
      <button class="col-span-2 w-full btn-primary" on:click={startTimer}
        >START</button
      >
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
        class="col-span-11 input-text w-full"
        type="text"
        placeholder="Title"
      />
      <!-- <button class="col-span-1">Date</button> -->
      <!-- timer dropdown -->
    </div>

    {#each tasksInput.subTasks as subTask}
      <div class="grid grid-cols-12">
        <input class="col-span-1" type="checkbox" />
        <input
          class="col-span-11 my-2"
          type="text"
          bind:value={subTask.title}
        />
      </div>
    {/each}
    <div class="">
      <button class="btn-secondary my-3" on:click={addTask}>Add a task</button>
    </div>
  </div>
</div>
