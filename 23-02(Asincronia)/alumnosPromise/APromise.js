const arrayAlumnos = [
    { id: 1, nombre: "Pepe" },
    { id: 2, nombre: "Ana" },
    { id: 3, nombre: "Juan" },
    { id: 4, nombre: "Pepi" },
    { id: 5, nombre: "bea" },
  ];
  
  const arrayNotas = [
    { id: 1, nota: 8 },
    { id: 2, nota: 7 },
    { id: 5, nota: 9 },
  ];
  
  const arrayBeca = [
    { id: 2, beca: true },
    { id: 5, beca: false },
  ];
  
  const id = 5;
  
  const getAlumnos = (id) => {
    let alumno = arrayAlumnos.find((item) => item.id == id)?.nombre;
    
    const promise = new Promise((resolve, reject) => {
        if (!alumno) {
            reject(`El alumno con id ${id} no existe`)
        }   else {
            resolve(alumno);
        }
    })
}
  
  const getNotas = (id) => {
    let nota = arrayNotas.find((item) => item.id == id)?.nota

    const promise = new Promise((resolve, reject) => {
        if (!nota) {
            reject(`El alumno no tiene nota`)
        }   else {
            resolve(nota);
        }
    });
  }
  
  const getBecas = (id) => {
    let beca = arrayBeca.find((item) => item.id == id)?.beca

    const promise = new Promise((resolve, reject) => {
      if (!beca) {
          reject(`El alumno no tiene acceso a beca`)
      }   else if (beca == true) {
          resolve(`El alumno ${id} ha aplicado a beca`)
      }   else {
          resolve(`El alumno ${id} SI ha aplicado a una beca`)
      }
    });    
  }
  
  getAlumnos(id)
    .then((resp) => {
        alumno = resp;
        return getNotas(id)
    })
    .then((resp) => {
        nota = resp;
        return getBecas(id);
    })
    .then((resp) => {
      if(resp=1) {
        (console.log(`${alumno} no aplica a beca`))
      } else {
        (console.log(`${alumno} no ha solicitado a beca`))
      }
    });