import React, { useEffect, useMemo, useState } from 'react';

const url = "https://dummyjson.com/products";

const Debounce = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    const getData = async () => {
        try {
            const response = await fetch(`${url}/search?q=${search.toLowerCase()}`);
            const responseData = await response.json();
            setData(responseData.products);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            getData();
        }, 1000);

        return () => {
            clearTimeout(debounceTimeout);
        };
    }, [search]);

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="container my-5">
            <div className="form-group">
                <input
                    placeholder='Search Title'
                    type="text"
                    value={search}
                    onChange={handleInputChange}
                    className='mb-3 form-control'
                />
            </div>

            {data?.map((item) => (
                <h6 className='mb-3' key={item.id}>{item.title}</h6>
            ))}
        </div>
    );
};

export default Debounce;

// https://dummyjson.com/products 
// https://dummyjson.com/products/search?q=phone 