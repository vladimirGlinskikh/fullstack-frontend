import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function AddUser() {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    const {firstName, lastName, email} = user

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user)
        navigate("/")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Регистрация</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Имя
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Введите свое имя"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Surname" className="form-label">
                                Фамилия
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Введите фамилию"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                Почтовый адрес
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Введите почтовый адрес"
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}/>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Зарегистрировать</button>
                        <Link className="btn btn-outline-danger mx-2" to="/">Отменить</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}