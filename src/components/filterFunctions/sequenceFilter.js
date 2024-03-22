function sequence(data) {
  data.sort((a, b) => a.sequence - b.sequence);

  return data;
}

export default sequence;
