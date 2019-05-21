import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Destination = () => {
    const [eventsLength, setEventsLength] = useState(0);

    useEffect(() => {
        axios
            .get(
                'https://b2ng.bpower2.com/index.php/restApi/events/{"pipeline":13, "details: true"}'
            )
            .then(res => {
                setEventsLength(res.data.length);
            });
    }, []);
    return (
        <div className="destination container-fluid">
            <div className="container p-0">
                <div className="row">
                    <div className="text-center">
                        <h3>Featured destination</h3>
                        <h2>Poland</h2>
                        <p>
                            Poland is a part of the global tourism market with
                            constantly increasing number of visitors. Tourism in
                            Poland contributes to the country's overall economy.
                            The most popular cities are Kraków, Warsaw, Wrocław,
                            Gdańsk, Poznań, Szczecin, Lublin, Toruń, Zakopane,
                            the Salt Mine in Wieliczka and the historic site of
                            Auschwitz – A German nazi concentration camp in
                            Oświęcim. The best recreational destinations include
                            Poland's Masurian Lake District, Baltic Sea coast,
                            Tatra Mountains (the highest mountain range of
                            Carpathians), Sudetes and Białowieża Forest.
                            Poland's main tourist offers consist of sightseeing
                            within cities and out-of-town historical monuments,
                            business trips, qualified tourism, agrotourism,
                            mountain hiking (trekking) and climbing among
                            others.
                        </p>
                        {
                            // context.state.isAuth ? <Link to="/all-events">See {context.state.events.length} events in Poland</Link> : <button data-toggle="modal" data-target="#loginModal">See {context.state.events.length} events in Poland</button>
                        }
                        <Link to="/all-events">
                            See {eventsLength} events in Poland
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;
