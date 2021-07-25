import React, { useState } from 'react'

export default props => {
  /**jsx que ira renderizar o formulário */
  const [local, setLocal] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()

  const armazenar = (local, description, price) => {
    localStorage.setItem('local', local)
    localStorage.setItem('description', description)
    localStorage.setItem('price', price)
  }
  return (
    <div className="form">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="name">Local</label>
            <input type="text" className="form-control"
              name="local" value={local}
              placeholder="Digite o Local"
              onChange={(e) => setLocal(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Descrição</label>
            <input type="text" className="form-control"
              name="description" value={description}
              placeholder="Breve descrição"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Preço</label>
            <input type="currency" className="form-control"
              name="price" value={price}
              placeholder="Preço"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 d-flex justify-content end">
          <button className="btn btn-primary"
            onclick={armazenar(local, description, price)}>Salvar</button>
        </div>
      </div>
      <div>
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Local</th>
              <th>Descrição</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{local}</td>
              <td>{description}</td>
              <td>{price}</td>
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
  );
}