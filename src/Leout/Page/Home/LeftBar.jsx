import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftBar = () => {
    const [catData, setCatData] = useState([]);
    
    
    useEffect(() => {
        fetch('../../../../public/data/categories.json')
            .then(res => res.json())
            .then(data => setCatData(data))

    }, []);
    

    return (
        <div>
            <h1>All Caterogy</h1>
            <div>
                {
                    catData.map(catgory => <NavLink to={`/home/${catgory.id}`}
                        key={catgory.id}
                        className='block text-2xl ml-3'
                        >
                        {catgory.name}
                    </NavLink>)
                }

            </div>
        </div>
    );
};

export default LeftBar;