export async function getTaskSelect() {
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

export async function getSubTaskSelect() {
  try {
    const response = await fetch("data/subTasks.json", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getProjectSelect() {
  try {
    const response = await fetch("data/projects.json", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getComplexitySelect() {
  try {
    const response = await fetch("data/taskComplexity.json", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getStatusSelect() {
  try {
    const response = await fetch("data/taskStatus.json", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
export async function getDepartmentSelect() {
  try {
    const response = await fetch("data/departments.json", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
