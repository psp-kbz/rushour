export const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "green";
    case "in-progress":
      return "blue";
    case "pending":
      return "yellow";
    case "planned":
      return "red";
    default:
      return "gray";
  }
};
