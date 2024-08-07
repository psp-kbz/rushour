export async function getTaskName() {
  try {
    const response = await fetch("data/task.json", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
