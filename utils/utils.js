function getLastWeeksDate() {
  const now = new Date();
  let lastWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
  lastWeek = lastWeek.toISOString();
  const exploded = lastWeek.split('T');

  return exploded[0];
}

export { getLastWeeksDate };