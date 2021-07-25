import React from 'react'
import Main from '../template/main'
import RenderForm from './renderForm'

const headerProps = {
    icon: 'shopping-cart',
    title: 'Produtos',
    subtitle: 'Cadastro de Produtos'
}


export default function products() {
    return (
        <Main {...headerProps}>
            <RenderForm />
        </Main>
    );
}