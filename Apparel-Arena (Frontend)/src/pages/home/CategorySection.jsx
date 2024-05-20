import CategoryCard from "../../components/cards/CategoryCard";
import shorts from '../../assets/icons/shorts.svg';
import jacket from '../../assets/icons/jacket.svg';
import watch from '../../assets/icons/watch.svg';
import hats from '../../assets/icons/hat.svg';
import shirts from '../../assets/icons/tee.svg';
import winter from '../../assets/icons/coat.svg';
import glasses from '../../assets/icons/glasses.svg';

const category = [
    {name:'SHORTS & JEANS', count:'37',icon:shorts },
    {name:'JACKET', count:'33' ,icon:jacket},
    {name:'WATCH', count:'22' ,icon:watch},
    {name:'HAT & CAPS', count:'41' ,icon:hats},
    {name:'T-SHIRTS', count:'47' ,icon:shirts},
    {name:'WINTER-WEAR', count:'12' ,icon:winter},
    {name:'GLASSES & LENS', count:'27' ,icon:glasses},
]

const CategorySection = () => {
    return (
        <div className="flex  gap-4 overflow-hidden hover:overflow-x-auto categoryScroll">
            {
                category.map((item, index) => (
                    <CategoryCard key={index} category={item}/>
                ))
            }
        </div>
    );
};

export default CategorySection;