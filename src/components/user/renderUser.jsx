import React, { useState } from 'react'


export default props => {

  const [nome, setNome] = useState()
  const [email, setEmail] = useState()

  const armazenar = (nome, email) => {
    localStorage.setItem('nome', nome)
    localStorage.setItem('email', email)

  }
  return (
    <div className="form">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" className="form-control"
              name="nome"
              placeholder="Digite o Nome"
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input type="email" className="form-control"
              name="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 d-flex justify-content end">
          <button className="btn btn-primary"
            onclick={armazenar(nome, email)}>Salvar</button>
        </div>
      </div>
      <div>
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{nome}</td>
              <td>{email}</td>
              <td>
                <button className="btn btn-warning mr-2">
                  <i className="fa fa-pencil"></i>
                </button>
                <button className="btn btn-danger">
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}