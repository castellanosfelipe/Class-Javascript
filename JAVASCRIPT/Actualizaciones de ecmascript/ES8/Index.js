const data = {
    frontend: 'Oscar',
    backend: 'ISabel',
    design: 'Ana',
  }
  
  const entries = Object.entries(data);
  console.log(entries);//mostrar matriz del objeto
  console.log(entries.length);// mostrar tamaño del objeto
  
  const data = {
    frontend: 'Oscar',
    backend: 'ISabel',
    design: 'Ana',
  }
  
  const values = Object.values(data);
  console.log(values) //hacer arreglo de los valores de objeto
  console.log(values.length)
  
  
  const string = 'hello';
  console.log(string.padStart(7, 'hi')); // incluir "hi" desde el inicio solo co 7 caracteres
  console.log(string.padEnd(12, ' -----'))// agregar ---- al final en la posicion 12
  console.log('food'.padEnd(12, '  -----'))// cambiar hello por food y añadir ---
  
  const obj = {
    name: 'oscar',
  }
  
  const helloWorld = () => {
    return new Promise((resolve, reject) => {
      (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
  };
  
  const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
  };
  
  helloAsync();
  
  const anotherFunction = async () => {
    try {
      const hello = await helloWorld();
      console.log(hello);
    } catch (error) {
      console.log(error);
    }
  };
  
  anotherFunction();