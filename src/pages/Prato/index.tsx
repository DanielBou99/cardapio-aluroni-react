import classNames from 'classnames';
import styles from './Prato.module.scss';
import { useParams } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import { useNavigate } from 'react-router-dom';
import TagsPrato from 'components/Tags';

export default function Prato() {
    const navigate = useNavigate();
    const { id } = useParams();
    const prato = cardapio.find(item => item.id === Number(id));
    if (!prato) {
        return '';
    }
    return (
        <>
            <button onClick={() => navigate(-1)} className={styles.voltar}>
                {'< Voltar'}
            </button>
            <section className={styles.container}>
                <h1 className={styles.titulo}>
                    {prato.title}
                </h1>
                <div className={styles.imagem}>
                    <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={styles.conteudo}>
                    <p className={styles.conteudo__descricao}>
                        {prato.description}
                    </p>
                    <TagsPrato {...prato}/>
                </div>
            </section>
        </>
    );
}