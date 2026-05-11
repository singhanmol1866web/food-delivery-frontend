import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { MdKitchen } from "react-icons/md";
import { CiPizza } from "react-icons/ci";
import { GiHamburger } from "react-icons/gi";
import { GiOpenedFoodCan } from "react-icons/gi";


export const cateories = [
    {
        id:1,
        name:"All",
        image:<TiThSmallOutline className="w-15 h-15 text-green-500" />
    },
      {
        id:2,
        name:"Breakfast"   ,
        image:<MdOutlineFreeBreakfast className="w-15 h-15 text-green-500"/>
    },
      {
        id:3,
        name:"Soups",
        image:<TbSoupFilled className="w-15 h-15 text-green-500" />
    },
      {
        id:4,
        name:"Pasta",
        image:<GiOpenedFoodCan className="w-15 h-15 text-green-500"/>
    },
      {
        id:5,
        name:"Main_course",
        image:<MdKitchen className="w-15 h-15 text-green-500"/>
    },
      {
        id:6,
        name:"Pizza",
        image:<CiPizza className="w-15 h-15 text-green-500"/>
    },
    {
        id:8,
        name:"Burger",
        image:<GiHamburger className="w-15 h-15 text-green-500" />
    }
]