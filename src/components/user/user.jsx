import React from 'react'
import Main from '../template/main'
import RenderUser from './renderUser'

const headerProps = {
    icon: 'users',
    title: 'usuários',
    subtitle: 'Cadastro de usuário'
}

export default function users() {
    return (
        <Main {...headerProps}>

            <RenderUser />

        </Main>
    );
}
