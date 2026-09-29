function Cupos(setCount) {

  function handleCuposIncrement() {
    setCount(prev => prev + 1);
  }

  return { handleCuposIncrement };
}

export default Cupos;