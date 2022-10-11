import React, { useEffect, useState } from "react";
import { showMeFetch } from "./fetch";
import './MainPage.css';

interface Product {
    id: number;
    name: string;
    type: string;
    price: number;
    image: string;
}

const MainPage = () => {
    const [error, setError] = useState<string | undefined>();
    const [searchText, setSearchText] = useState<string | undefined>();
    const [products, setProducts] = useState<Product[] | undefined>(undefined);
    const [type, setType] = useState<"Walking" | "Running" | undefined>();
    useEffect(() => {
        showMeFetch({
            url: 'http://localhost:3001/show_me_products',
            method: 'POST',
            body: { searchText, type }
        }).then((r) => {
            if (r.status !== 200) {
                setError(r.body.message);
                return;
            }
            setProducts(r.body.data);
        })
    }, [searchText, type])

    return (
        <div className="pageView">
            <div>
                <h1>The most popular jackets today</h1>
            </div>
            <div>
                <div className="searchBar">
                    <input type='text'
                        placeholder='Search...'
                        onChange={(event) => {
                            setSearchText(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <button className="buttonStyle" onClick={() => setType(undefined)}>All</button>
                    <button className="buttonStyle" onClick={() => setType('Walking')}>Walking</button>
                    <button className="buttonStyle" onClick={() => setType('Running')}>Running</button>
                </div>
                <br />
                {error && <div>{error}</div>}
                {products === undefined && <div>Loading...</div>}
                {products?.map((val, key) => {
                    return (
                        <div className="createCards" key={key}>
                            <img className="jacketImages" src={(val.image)} />
                            <h3 className="jacketName">{val.name}</h3>
                            <h3 className="jacketPrice">${(val.price).toFixed(2)}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MainPage;