import React, { useState, useEffect } from 'react';
import './Pies.css';
import DisplayPies from './Pie/Pie';
import CreatePies from './CreatePie/CreatePie';

const Pies = (props) => {
    console.log(props);
    const [pies, setPies] = useState([]);
    const[createPie, setCreatePie] = useState(false)

    const fetchPies = () =>{
        let url = "http://localhost:4000/pies/";

        fetch(url, {
            method: "GET",
            headers: new Headers({
                'Content-type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(res => res.json())
        .then(json => setPies(json))
    }

    useEffect(() =>{
        fetchPies();
    }, [createPie])

    //UseEffect runs a function as soon as the component loads 

    const buttonHandler = () => setCreatePie(true)


    const pie = [
        {
            nameOfPie: 'pumpkin',
            baseOfPie: 'Pumpkin Puree',
            crust: 'pastry',
            timeToBake: 50,
            servings: 8,
            rating: 4
        },
        {
            nameOfPie: 'apple',
            baseOfPie: 'candied apples',
            crust: 'pastry',
            timeToBake: 70,
            servings: 8,
            rating: 10
        },
        {
            nameOfPie: 'chocolate',
            baseOfPie: 'chocolate pudding',
            crust: 'pastry',
            timeToBake: 20,
            servings: 3,
            rating: 5
        },
    ];

    return(
        <>
            {createPie ? <CreatePies setCreatePie={setCreatePie} sessionToken={props.sessionToken}/> : null}
            {!createPie ? <button onClick={buttonHandler}>Create new Pie!</button> : null}

            <table>
                <thead>
                    <tr>
                        <th>Name of Pie</th>
                        <th>Base of Pie</th>
                        <th>Crust</th>
                        <th>Bake Time</th>
                        <th>Servings</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <DisplayPies pie={pies} />
                </tbody>
            </table>
        </>
    )
}

export default Pies;