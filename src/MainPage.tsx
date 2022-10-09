import React, { useState } from "react";
import './MainPage.css';
import JASONDATA from './Data.json';

const MainPage = () => {
    
    const [searchItem, setSearchItem] = useState('');
    
    return(
        <div>
            <div>
                <h1>Jackets Most popular today</h1>
            </div>
            <div className="searchBar">
                <input type='text' 
                    placeholder='Search...'
                    onChange={(event) => {
                        setSearchItem(event.target.value);
                    }} 
                />
                <div>
                <button>All</button>
                <button>Walking</button>
                <button>Running</button>
            </div>
            {/* displaying the items in data with matching search fields */}
            <br />
                {JASONDATA.filter((val) => {
                    if (searchItem == ''){
                        return val;
                    } else if (val.name.toLowerCase().includes(searchItem.toLowerCase())) {
                        return val;
                    }
                }).map((val,key) => {
                return (
                    <div className="createCards" key={key}>
                        <img src={(val.image)}/>
                        <p>{val.price}</p>
                        <p>{val.name}</p> 
                    </div>
                );
                })}
            </div>
            
        </div>
    );
}

export default MainPage;