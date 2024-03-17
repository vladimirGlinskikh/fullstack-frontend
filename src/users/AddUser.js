import React from "react";

export default function AddUser() {
    return <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Регистрация</h2>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        Имя
                    </label>
                    <input type={"text"} className="form-control" placeholder="Введите свое имя" name="name"/>
                    <div className="mb-3">
                        <label htmlFor="Surname" className="form-label">
                            Фамилия
                        </label>
                        <input type={"text"} className="form-control" placeholder="Введите фамилию" name="surname"/>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                Почтовый адрес
                            </label>
                            <input type={"text"} className="form-control" placeholder="Введите почтовый адрес" name="email"/>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Зарегистрировать</button>
                        <button type="submit" className="btn btn-outline-danger mx-2">Войти</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}