import React, {useEffect, useState} from 'react';
import {css} from '@emotion/css'
import s from './mainMenu.module.css'
import Link from "next/link";
import {wrapperStyle, innerStyle, buttonStyle, labelFirstStyle, labelSecondStyle, playButtonStyle}  from '../emotionVars/mainMenuVars'


const MainMenu = () => {



    const [quantity, setQuantity] = useState(1)
    const [arrayType, setArrayType] = useState(1)
    const [activeOrder, setActiveOrder] = useState('up')
    const changeQuantity = (e: any) => {
        setQuantity(e.target.value)
        let audio = new Audio();
        audio.src = '/sounds/4.mp3';
        audio.autoplay = true;
    };
    const changeType = (e: any) => {
        setArrayType(e.target.value)
        let audio = new Audio();
        audio.src = '/sounds/4.mp3';
        audio.autoplay = true;
    };
    const orderHandler = (e: any) => {
        setActiveOrder(e.target.name)
        let audio = new Audio();
        audio.src = '/sounds/4.mp3';
        audio.autoplay = true;
    }
    function soundClick() {
        let audio = new Audio();
        audio.src = 'click4.mp3';
        audio.autoplay = true;
    }
    useEffect(() => {
        let audio = new Audio();

        audio.src = '/sounds/4.mp3';
        audio.autoplay = true;
    }, [])
    return (
        <div className={s.wrap}>
            <div className={wrapperStyle}>
                <div className={innerStyle}>
                    <div>
                        <div className={css`margin-top: 2rem`}>Кол-во предметов</div>
                        <div className={labelFirstStyle}>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                        </div>
                        <input className={s.firstRange} onChange={changeQuantity} type="range" min="1" max="4" step="1"
                               value={quantity}/>
                    </div>

                    <div>
                        <div>Значения</div>
                        <div className={labelSecondStyle}>
                            <span>A</span>
                            <span>9</span>
                            <span>19</span>
                            <span>50</span>
                            <span>99</span>
                            <span>999</span>
                        </div>
                        <input className={s.secondRange} onChange={changeType} type="range" min="1" max="6" step="1"
                               value={arrayType}/>
                    </div>

                    <div className={css`margin-top: 4rem`}>
                        <button style={{
                            background: activeOrder === 'up' ? '#FFD748' : '#FFD7488F',
                            color: activeOrder === 'up' ? '#423F45' : '#423F458F'
                        }} name='up'
                                className={buttonStyle} onClick={orderHandler}>По возрастанию
                        </button>
                        <button style={{
                            background: activeOrder === 'down' ? '#FFD748' : '#FFD7488F',
                            color: activeOrder === 'down' ? '#423F45' : '#423F458F'
                        }} name='down'
                                className={buttonStyle} onClick={orderHandler}>По убыванию
                        </button>
                    </div>

                    <button onMouseEnter={soundClick} className={playButtonStyle}><Link href={{
                        pathname: "/components/game",
                        query: {
                            quantity,
                            arrayType,
                            activeOrder
                        },
                    }}>Играть</Link></button>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;