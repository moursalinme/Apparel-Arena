import { useNavigate } from 'react-router-dom';
import shorts from '../../assets/icons/shorts.svg';

const CategoryCard = ({ category }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate('/category')} className="min-w-[300px] px-4 py-5 border rounded flex justify-between cursor-pointer">
            <div className='flex gap-2 items-center'>
                <div className='bg-gray-200 p-2 rounded-md'>
                    <img className='rounded-md h-[30px] w-[30px] object-cover' src={category.icon} alt="" />
                </div>
                <div>
                    <p className='font-bold text-black/80'>{category.name}</p>
                    <button className='font-semibold text-sm text-arena-color'>SHOW ALL</button>
                </div>
            </div>
            <div>
                <p className='text-gray-500'>({category.count})</p>
            </div>
        </div>
    );
};

export default CategoryCard;