import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
                <header>
                    <img src="https://avatars1.githubusercontent.com/u/24196255?s=460&u=b2ce00d38b1fe73a9814ed0ba7d8f3939c0f1d9e&v=4" alt="Arnaldo Souza"/>    
                    <div>
                        <strong>Arnaldo Souza</strong>    
                        <span>Modelagem 3D</span>
                    </div>
                </header>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    <br/>
                    Minus ducimus unde magnam? Molestiae cum id, commodi error adipisci sed delectus quisquam enim temporibus illum. Quidem iusto laboriosam voluptatibus quod. Facere.    
                </p>
                <footer>
                    <p>
                        Preço/hora
                        <strong>R$ 20,00</strong>
                    </p>
                    <button>
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
            </article>   
    );
}

export default TeacherItem;