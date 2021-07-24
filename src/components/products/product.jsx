import React from 'react'
import Main from '../template/main'

const headerProps = {
    icon: 'shopping-cart',
    title: 'Products',
    subtitle: 'Cadastro de Produtos'
}

const initState = {
    products: { locale: '', description: '', price: '', urlImage: '', },
    list: []
}

export default class ProductCrud extends React.Component {

    state = { ...initState }

    renderForm() {
        /**jsx que ira renderizar o formulário */
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="name">Local</label>
                            <input type="text" className="form-control"
                                name="name"
                                placeholder="Digite o Local"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Descrição</label>
                            <input type="text" className="form-control"
                                name="email"
                                placeholder="Breve descrição"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Preço</label>
                            <input type="currency" className="form-control"
                                name="email"
                                placeholder="Preço"
                            />
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 d-flex justify-content end">
                        <button className="btn btn-primary"
                        >Salvar</button>
                        <button className="btn btn-secondary ml-2"
                        >Cancelar</button>
                    </div>
                </div>

            </div>
        );
    }

    /**list users */
    rendertable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Local</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderows()}
                </tbody>
            </table>
        );
    }
    renderows() {
        /**mapeando usuários que estão no estado do objeto */
        return this.state.list.map((products, index) => {
            return (
                <tr key={index}>
                    <td>{products.local}</td>
                    <td>{products.description}</td>
                    <td>{products.price}</td>
                    <td>
                        <button className="btn btn-warning mr-2"
                            onClick={() => this.load(products)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger"
                            onClick={() => this.remove(products)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            );
        })
    }



    render() {
        return (
            <Main {...headerProps}>

                {this.renderForm()}
                {this.rendertable()}

            </Main>
        );
    }
}