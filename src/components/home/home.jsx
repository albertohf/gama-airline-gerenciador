import React from 'react'
import './home.css'
import Main from '../template/main'

export default props =>
    <Main icon="home" title="Início" subtitle="Sistema Administrativo de cadastro pacotes e clientes">

        <div className="display-4">Bem vindo</div>
        <hr />
        <h2 className="mt-4 mb-4">Gama Airline Pacotes de Viagens.</h2>
        <div className="d-flex justify-content-between flex-wrap">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="img-thumbnail" src="https://images.pexels.com/photos/1187911/pexels-photo-1187911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Amsterdam</h5>
                            <p className="card-text">Amsterdã é a capital da Holanda, conhecida por seu patrimônio artístico, um elaborado sistema de canais e casas estreitas com telhados de duas águas, legados da era dourada do século XVII na cidade.</p>
                            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="img-thumbnail" src="https://images.pexels.com/photos/7245230/pexels-photo-7245230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Praga</h5>
                            <p className="card-text">Conhecida como a "Cidade das Cem Cúpulas", Praga impressiona o visitante desde o primeiro instante por reunir uma grande quantidade de monumentos e construções de valor arquitetônico incomensurável.</p>
                            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="img-thumbnail" src="https://images.pexels.com/photos/1837591/pexels-photo-1837591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Londres</h5>
                            <p className="card-text">Londres, capital da Inglaterra e do Reino Unido, é uma cidade do século 21 com uma história que remonta à era romana. Seu centro abriga as sedes imponentes do Parlamento, a famosa torre do relógio do Big Ben e a Abadia de Westminster, local de coroação dos monarcas britânicos. Do outro lado do rio Tâmisa, a roda gigante London Eye tem vista panorâmica do complexo cultural da margem sul e de toda a cidade.</p>
                            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="img-thumbnail" src="https://images.pexels.com/photos/2901581/pexels-photo-2901581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">New York</h5>
                            <p className="card-text">A cidade de Nova York compreende 5 distritos situados no encontro do rio Hudson com o Oceano Atlântico. No centro da cidade fica Manhattan, um distrito com alta densidade demográfica que está entre os principais centros comerciais, financeiros e culturais do mundo. Entre seus pontos emblemáticos, destacam-se arranha-céus, como o Empire State Building, e o enorme Central Park. O teatro da Broadway fica em meio às luzes de neon da Times Square.</p>
                            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Main>
