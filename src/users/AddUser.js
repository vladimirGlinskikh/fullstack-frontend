import React, {useState} from "react";

export default function AddUser() {

    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: ""
    })

    const {name, surname, email} = user

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Регистрация</h2>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        Имя
                    </label>
                    <input type={"text"} className="form-control" placeholder="Введите свое имя" name="name"
                           value={name} onChange={(e) => onInputChange(e)}/>
                    <div className="mb-3">
                        <label htmlFor="Surname" className="form-label">
                            Фамилия
                        </label>
                        <input type={"text"} className="form-control" placeholder="Введите фамилию" name="surname"
                               value={surname} onChange={(e) => onInputChange(e)}/>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                Почтовый адрес
                            </label>
                            <input type={"text"} className="form-control" placeholder="Введите почтовый адрес"
                                   name="email" value={email} onChange={(e) => onInputChange(e)}/>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Зарегистрировать</button>
                        <button type="submit" className="btn btn-outline-danger mx-2">Войти</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}