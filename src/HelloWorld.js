import React from 'react'

const HelloWorld = () => {
    const width = 500;
    const showData = () => {
        alert("TampilKan");
    }
    const listData = [1, 2, 3, 4, 5];
    return (
        <div>
            <h1>Hello World</h1>
            <img
                src="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
                width={width}
                onClick={showData}
            />
            <ul>
                {
                    listData.map((val) => 
                        val % 2 === 0 ? <li>{val}</li> : ""
                    )
                }
            </ul>
        </div>
    )
};

export default HelloWorld