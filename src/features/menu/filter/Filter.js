import { useDispatch, useSelector } from 'react-redux';
import { selectCategories, toggleDisplay } from '../../categories/categoriesSlice';

export default function Filter ({ categoryIndex }) {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories);
    const category = categories[categoryIndex];

    return (
        <button className='fitler'
                onClick={() => dispatch(toggleDisplay(categoryIndex))}>
            {category.name + "Filter"}
        </button>
    )
}
