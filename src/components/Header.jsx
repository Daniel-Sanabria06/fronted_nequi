import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const Header = () => {

  return (
    <header>
        <div className="px-4 pt-3 sm:p-7 lg:p-9 text-center bg-white border-b">
            <div className="text-center row">
              <div className="col-12">
                 <a  className='paginainst p-2' href="https://www.4-72.com.co/institucional/" target="_blank">Ir a página institucional 4-72</a>
              </div>

              <div className="col-12 mt-5 text-center mx-auto">
                  <a href='/' className='cursor-pointer text-center'>
                    
                  </a>
              </div>
             
                 
            </div>

        </div>
    </header>
  )
}

export default Header