
import { useState } from "react";

function Bar({ item }) {

    const [isHovered, setIsHovered] = useState(false);

    let height = `${parseInt(((parseFloat(item.percentage)) * 200) / 100)}px`

    return (
        <>
            <div className=' flex flex-col justify-center items-center cursor-pointer' onMouseEnter={() =>{setIsHovered(true)}} onMouseLeave={() =>{setIsHovered(false)}} >
                {isHovered && (
                    <div className='bg-Dark_brown text-Cream m-2 p-1 rounded-[4px] font-[700]'>
                        {item.percentage}%
                    </div>
                )}
                <div style={{ height: height }} className={` bg-Soft_red  md:w-12 w-8 rounded-[5px] hover:bg-light_soft_red cursor-pointer`} ></div>
                <p className='text-Medium_brown'>{item.week}</p>
            </div>
        </>
    )
}

export default Bar
