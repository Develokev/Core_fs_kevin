//

document.addEventListener('DOMContentLoaded', () => {

//VARIABLES +++++++++++++++++++++++++++++++++++++++

//Elementos capturados del DOM
const section = document.querySelector('#section');
const table2paint = document.querySelector('#table2paint');
const button = document.querySelector('#button');
const btn = document.querySelector('#btn');

//EVENTOS +++++++++++++++++++++++++++++++++++++++
btn.addEventListener('click', ({target}) => {
    if(target.matches('#button')) {
        paintAll();
    }
})


//FECTH +++++++++++++++++++++++++++++++++++++++++

const peticion = async () => {

    try {
        
        let solicitud = await fetch('https://reqres.in/api/users?page=2')

        if(solicitud.ok){   //response
            let solicitudJSON = await solicitud.json();
            return {
                ok: true,
                solicitudJSON
            }
            } else {
            throw ({
                ok: false,
                msg: 'Error en la peticion'
            })
            }
            
            } catch (error) {
            return console.log(error)
            }
}

// return {
//     ok: true
//     solicitudJSON

// }    {

// }

// } catch (error) { //reject

// }

// }

//FUNCIONES +++++++++++++++++++++++++++++++++++++++

const paintAll = async () => {

    const {ok, solicitudJSON} = await peticion()
    const {data} = solicitudJSON

    table2paint.innerHTML = "";

    if(ok) {
        data.forEach((item) => {
            const tableR = document.createElement('TR');
            let nameTD = document.createElement('TD');
            nameTD.textContent = item.first_name;
            let lastNameTD = document.createElement('TD');
            lastNameTD.textContent = item.last_name;
            let emailTD = document.createElement('TD');
            emailTD.textContent = item.email;
            let avatarTD = document.createElement('TD');
            let imgTD = document.createElement('IMG');
            imgTD.src = item.avatar;

            avatarTD.append(imgTD)

            table2paint.append(tableR, nameTD, lastNameTD, emailTD, avatarTD);
        
})
}};



})//* ++++++++++++++++++++++++++ LOADED
