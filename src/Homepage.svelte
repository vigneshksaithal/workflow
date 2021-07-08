<script>
  import { tweened } from "svelte/motion";
  let original = 10 * 60; // TYPE NUMBER OF SECONDS HERE
  let timer = tweened(original);

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
  <div class="border-2">
    <div class="grid grid-cols-12 px-2 py-2">
      <span class="col-span-8 text-4xl">{minutes}:{seconds}</span>
      <button class="col-span-4 btn-primary" on:click={startTimer}>START</button
      >
    </div>
    <progress class="w-full bg-indigo-600" value={$timer / original} />
  </div>

  <div class="card px-4 mb-6">
    <div class="mb-4">
      <input class="input-text w-full" type="text" placeholder="Title" />
    </div>

    {#each tasksInput.subTasks as subTask}
      <div class="grid grid-cols-12">
        <input class="col-span-1" type="checkbox" />
        <input
          class="col-span-10 my-2"
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
