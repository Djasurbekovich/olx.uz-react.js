import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { FiSearch } from 'react-icons/fi';
import { FaMicrophone } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { instance } from '../../Api/instance';
import { ContextColor } from '../../Context/ThemeContext';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Container from '../../Utils/Container/Container';
import "./Search.scss";

const Search = () => {
    const { t } = useTranslation()

    const [searchTitle, setSearchTitle] = useState([])
    const [search, setSearch] = useState("")
    const navigate = useNavigate();
    const { theme } = useContext(ContextColor)
    const [modal, setModal] = useState(false);

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    
    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    if(!listening && transcript.length > 1){
        return navigate(`/search/${transcript}`)
    }

    const handleModal = () => {
        setModal(!modal)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
        if (e.target.value.length > 2) {
            instance.get(`products/?title=${e.target.value}`)
                .then(res => setSearchTitle(res.data))
        }
        else {
            setSearchTitle([])
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        return navigate(`/search/${search}`)
    }

    return (
        <section className='search'>
            <Container>
                <div className="search__wrapper">
                    <form className='search__form' onSubmit={handleSubmit}>
                        <div className='search__input-wrapper'>
                            <FiSearch className='search__icon' />
                            <input className='search__input' type="text" onChange={handleSearch} />
                                {
                                    searchTitle.length > 3 ?
                                        <div className='search__suggestions'>
                                            {
                                                searchTitle.map(searchItem =>
                                                    <Link to={`/singleproduct/${searchItem.id}`} key={searchItem.id} className="transarent-link search__result-item">
                                                    <p className='search__title'>{searchItem.title}</p>
                                                    </Link>
                                                )
                                            }
                                        </div> : <></>
                                }
                            </div>
                        <button className='search__btn' type='submit'>{t("search__button")}</button>
                        <button className='search__btn' type='button' onClick={handleModal}><FaMicrophone/></button>
                        <div className={ modal ? 'modal__open' : 'modal__close' }>
                            <p className='modal__text'>Microphone: {listening ? 'on' : 'off'}</p>
                            <button className='modal__btn start' type='button' onClick={SpeechRecognition.startListening}>Start</button>
                            <button className='modal__btn stop' type='button' onClick={SpeechRecognition.stopListening}>Stop</button>
                            <button className='modal__btn reset' type='button' onClick={resetTranscript}>Reset</button>
                            <p className='modal__text'>{transcript}</p>
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    )
}

export default Search