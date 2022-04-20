import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";


import './style.css'

function Services() {

    const [services, setServices] = useState([]);

    useEffect(() => {
        loadServices();
    }, []);

    const loadServices = async () => {
        const result = await axios.get("http://localhost:3003/services");
        setServices(result.data.reverse());
    };

    const deleteService = async id => {
        await axios.delete(`http://localhost:3003/service/${id}`);
        loadServices();
    };

    return (
        <div>
            <div className="container">
                <div className="py-4">
                    <h1>Services</h1>
                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">minimum subscriber age</th>
                                <th scope="col">minimum age on network</th>
                                <th scope="col">airtime recharged</th>
                                <th scope="col">airtime usage</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{service.name}</td>
                                    <td>{service.minimum_subscriber_age}</td>
                                    <td>{service.minimum_age_on_network}</td>
                                    <td>{service.airtime_recharged}</td>
                                    <td>{service.airtime_usage}</td>
                                    <td>
                                        <Link class="btn btn-primary mr-2" to={`/services/${service.id}`}>
                                            View
                                        </Link>
                                        <Link
                                            class="btn btn-outline-primary mr-2"
                                            to={`/services/edit/${service.id}`}
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            class="btn btn-danger"
                                            onClick={() => deleteService(service.id)}
                                        >
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Services