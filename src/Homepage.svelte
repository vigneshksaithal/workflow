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
    <span class="flex justify-center text-center text-4xl"
      >{minutes}:{seconds}</span
    >
    <progress class="w-full bg-indigo-600" value={$timer / original} />
  </div>

  <div class="card px-8 mb-6">
    <div class="grid grid-cols-6 gap-4 mb-4">
      <input type="text" class="input-text col-span-5" placeholder="Title" />
      <button class="col-span-1 btn-primary max-w-sm" on:click={startTimer}
        >START</button
      >
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
    <div class="grid grid-cols-6">
      <button class="btn-secondary col-span-2 my-3" on:click={addTask}
        >Add a task</button
      >
      <!-- <input class="col-span-3" type="range" step="20" /> -->
    </div>
  </div>
</div>
