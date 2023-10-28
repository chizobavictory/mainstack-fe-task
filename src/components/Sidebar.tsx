import vector from '../assets/vector.svg'
import vector1 from '../assets/vector1.svg'
import vector2 from '../assets/vector2.svg'
import vector3 from '../assets/vector3.svg'
const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between gap-2 p-1 shadow rouned-full fixed left-4 top-[40%] rounded-full w-12 h-48 items-center'> 
      <div className='p-2'>
        <img src={vector} alt="side-menu" />
      </div>
      <div className='p-2'>
        <img src={vector1} alt="side-menu" />
      </div>
      <div className='p-2'>
        <img src={vector2} alt="side-menu" />
      </div>
      <div className='p-2'>
        <img src={vector3} alt="side-menu" />
      </div>

    </div>
  )
}

export default Sidebar