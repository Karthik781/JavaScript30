const inputs = document.querySelectorAll('.controls input');

  function handleUpadte(){
  const suffix = this.dataset.sizing|| '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }

  inputs.forEach(input => input.addEventListener('change', handleUpadte));
  inputs.forEach(input => input.addEventListener('mousemove', handleUpadte));
