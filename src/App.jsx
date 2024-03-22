// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { Button, Flex } from 'antd';


function App() {

  return (
    <>
    {/* <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <div className="flex grow flex-row h-[48px] justify-between space-x-2">
          <div>
            aaaaa
          </div>
        </div>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <div className="h-[48px]">
          aaaaa
        </div>
        <div className="h-64">
          aaaaa
        </div>
        <div className="h-64">
          aaaaa
        </div>
        <div className="h-64">
          aaaaa
        </div>
        <div className="h-64">
          aaaaa
        </div>
        <div className="h-64">
          aaaaa
        </div>
      </div>
    </div> */}
      <div className="flex h-screen flex-row overflow-hidden">

        {/* left */}
        <div className="flex-none w-64">

          <div className="flex h-full flex-col py-4 px-2">

            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
              
              <a className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 bg-sky-100 text-blue-600 cursor-pointer'>aaaaaa</a>

              <a className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 cursor-pointer'>aaaaaa</a>

              <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>

              <form>
                <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                  <div className="hidden md:block">Sign Out</div>
                </button>
              </form>


            </div>

          </div>

        </div>

        {/* right */}
        <div className="flex-grow overflow-y-auto p-12">
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
      </div>
      </div>


    </>
  )
}

export default App
