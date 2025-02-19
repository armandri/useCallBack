import React, {useEffect, useState} from "react";


function List({getItems}) {

    const [items, setItems]  = useState([])

    useEffect(() => {

        console.log("render")
        console.log(getItems(10))
        setItems(getItems(10))  // 10 is argument in function

    }, [getItems]);

    // getItems() ==> runTime call
    // getItems ==> andiman call

    return (

        <div>

            <ul>
                {items.map( (item, index) =>
                    <li key={index}>{item}</li>
                )}
            </ul>
        </div>

    )


}


export default List;