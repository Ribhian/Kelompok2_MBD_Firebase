import React from 'react'
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion'; 
import { useEffect } from 'react';
import { useRef } from 'react';


const RowContainer = ({flag, data, scrollValue}) => {
  console.log(data);
  const rowContainer = useRef()
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue])
  return (
    <div 
    ref={rowContainer}
    className={`w-full flex items-center gap-3 my-12 ${
        flag 
        ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap"
      }`}
>
  {data && data.map(item => (
      <div key={item.id} 
      className='w-300 min-w-[300px] md:w-340 md:min-w-[340px] h-auto bg-cardOverlay rounded-lg p-2
      my-12 backdrop-blur-lg hover:drop-shadow-lg'>
       <div className='w-full flex items-center justify-between'>
       <motion.img 
       whileHover={{ scale : 1.2 }}
       src='https://firebasestorage.googleapis.com/v0/b/restaurantapp-c2ed6.appspot.com/o/Images%2F1669979609916-i1.png?alt=media&token=5bfa0580-7084-494c-baa3-87b3c953199e'
       alt=''
       className='w-40 -mt-8 drop-shadow-2xl'/>
         <motion.div  
             whileTap={{ scale : 0.75 }}
             className='w-8 h-8 rounded-full bg-red-600 flex items-center
             justify-center cursor-pointer hover:shadow-md'>
             
             <MdShoppingBasket className='text-white'/>
         </motion.div>
         </div>  
 
         <div className='w-full flex flex-col items-end justify-end'>
             <p className='text-textColor font-semibold text-base md:text-lg'>
                 Ice Cream Chocolate</p>
             <p className='mt-1 text-sm  text-gray-500'>45 calories</p>
             <div className='flex items-center gap-8'>
             <p className='text-lg text-headingColor font-semibold'>
               <span className='text-sm text-red-500'>Rp</span> 15.000
             </p>
             </div>
         </div>
 
     </div>
  ))}
</div>
  )
}

export default RowContainer;