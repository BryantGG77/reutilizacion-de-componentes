import './App.css'

//imports

import { jobList } from './shared/infoJob'


function App() {

  return (
    <>

      <div className="container-grandpa">
        {
          jobList.map((job, index) => (
            <div className="container-father" key={index}>

              {/* imagen contenedor izquierdo  */}

              <div className="container-left">
                <img className='img' src={job.image} alt="" />
              </div>

              {/* contenedor informacion  */}

              <div className="container-right">

                {/* division de arriba a la derecha  */}

                <div className="container-right-top">

                  <button className='btn-job'>
                    <h2>{job.profession}</h2>
                  </button>
                  <ul className='subCategorias'>
                    {job.subCategorias.map((subCategoria, index) => (
                      <li className="subCategoria-item" key={index}>{subCategoria}</li>
                    ))}
                  </ul>


                </div>

                {/* division de abajo a la derecha */}

                <div className="container-right-bottom">
                  <p className='parraph'><i class='bx bxs-building' ></i>{job.empresa}</p>
                  <p className='parraph'><i class='bx bx-current-location bx-tada bx-rotate-90'></i>{job.lugar}</p>
                  <p className='parraph'><i class='bx bx-money' ></i>${job.salario}</p>
                  <p className='parraph'><i class='bx bxs-group'></i>{job.vacantes} Vacantes</p>
                  <p className='parraph'><i class='bx bxs-calendar' ></i>{job.publicacion}</p>
                  <div>
                    <button className='btn'><i class='emoji bx bx-check-square' ></i></button>
                    <button className='btn'><i class='emoji bx bx-cool' ></i></button>
                    <button className='btn'><i class='emoji bx bx-calendar-check' ></i></button>
                  </div>
                </div>
              </div>


            </div>
          ))}
      </div>

    </>
  )
}

export default App
