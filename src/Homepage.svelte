<script>
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
  <div class="card mb-6">
    <div class="grid grid-cols-6 gap-4 mb-4">
      <input type="text" class="input-text col-span-3" placeholder="Title" />
      <button class="col-start-6 col-span-2 btn-primary max-w-sm">START</button>
    </div>
    <div class="grid grid-cols-6">
      <button class="col-span-3 text-left" on:click={addTask}>Add a task</button
      >
      <input class="col-span-3" type="range" step="20" />
    </div>
    {#each tasksInput.subTasks as subTask}
      <input type="checkbox" />
      <input type="text" bind:value={subTask.title} /><br />
    {/each}
  </div>

  <!-- {#each subTask as task, index}
    <div class="card">
      <h1>{task.title}</h1>
    </div>
  {/each} -->
</div>
