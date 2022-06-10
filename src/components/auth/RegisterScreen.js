import { Link } from "react-router-dom"

export const RegisterScreen = () => {
  return (
    <>
       <div className="h-screen  bg-gray-light">
          <div className="container shadow-2xl  px-6 py-12 h-full  ">
              <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 ">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="w-full"
                    alt="Phone"
                  />

                </div>

          

                <div className="md:w-8/12 lg:w-5/12 lg:ml-20 ">
                  <form>

                    <div className="grid grid-cols-1 m-3 justify-items-center ">
          
                        <h2 className="text-gray-400 font-bold text-3xl ">Registrarse</h2>
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Nombre"
                      />
                    </div>

                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Email address"
                      />
                    </div>

                    <div className="mb-6">
                      <input
                        type="password"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Password"
                      />
                    </div>

                    <div className="mb-6">
                      <input
                        type="password"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Confirm Password"
                      />
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <div className="form-group form-check">
                        <Link to="/auth/login" className="text-blue-600">Ya tienes cuenta? Inicia Sesion!</Link>
                      </div>

                    </div>

                    <button
                      type="submit"
                      className="inline-block px-7 py-3 bg-midnight text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Registrarse
                    </button>
           
                </form>
              </div>
            </div>
          </div>
        </div >
    </>
  )
}
