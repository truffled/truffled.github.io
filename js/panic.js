function handlePanicKey(event) {
    const panicKey = localStorage.getItem('panicKey') || '`'; 
  
    if (event.key === panicKey) {
      window.location.href = 'https://www.ixl.com'; 
    }
  }
  
  function displayCurrentPanicKey() {
    const panicKey = localStorage.getItem('panicKey') || '`';
    document.getElementById('currentPanicKey').textContent = `Current Panic Key: '${panicKey}'`;
  }
  
  function changePanicKey() {
    const instruction = document.getElementById('instruction');
    instruction.textContent = 'Press the key you want to set as your panic key:';
  
    function captureKeyPress(event) {
      const newPanicKey = event.key;
      localStorage.setItem('panicKey', newPanicKey); 
      alert(`Panic key set to: '${newPanicKey}'`); 
  
      window.removeEventListener('keydown', captureKeyPress);
  
      instruction.textContent = `(it'l say ~ but its your key)`;
      displayCurrentPanicKey(); 
    }
  
    window.addEventListener('keydown', captureKeyPress);
  }
  
  window.addEventListener('keydown', handlePanicKey);
  
  window.onload = function () {
    displayCurrentPanicKey();
  };
  