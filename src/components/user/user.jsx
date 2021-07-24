import React from 'react'
import Main from '../template/main'

const headerProps = {
    icon: 'users',
    title: 'usuários',
    subtitle: 'Cadastro de usuário'
}

const initState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends React.Component {

    state = { ...initState }

    renderForm() {
        /**jsx que ira renderizar o formulário */
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                placeholder="Digite o nome.." required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">E-mail</label>
                            <input type="email" className="form-control"
                                name="email"
                                placeholder="Digite o email.." required
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
                        <th>Nome</th>
                        <th>E-mail</th>
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
        return this.state.list.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning mr-2"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger"
                            onClick={() => this.remove(user)}>
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