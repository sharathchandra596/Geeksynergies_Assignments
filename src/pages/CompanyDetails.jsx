
import { Link } from 'react-router-dom'

function CompanyDetails() {
  return (
    <div className=' flex-col w-full h-full justify-center  gap-5  items-center   text-2xl shadow-md'>
        <div>
     <h1>company: <span>Geeksynergy Technologies Pvt Ltd</span></h1>
     <h1>Address: <span>Sanjayanagar, Bengaluru-56</span></h1>
     <h1>Phone: <span>XXXXXXXX09</span></h1>
     <h1>Email: <span>XXXXXX@gmail.com</span></h1>
        </div>
       
       <Link to={'/home'} > 
       <button className='bg-blue-500 p-2 mt-7 rounded ml-2'>
       Go to Home
        </button>
       </Link>
       
    </div>
  )
}

export default CompanyDetails
