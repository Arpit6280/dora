function enabledFilter(data) {
  let updatedData = data.filter((ele, i) => ele.enabled === true);
  return updatedData;
}

export default enabledFilter;
