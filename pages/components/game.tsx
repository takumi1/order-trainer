import React, {useEffect, useState} from 'react';
import {css} from "@emotion/css";
import Link from "next/link";
import {useRouter} from "next/router";
import {
    numArray,
    winWrapper,
    winInner,
    newGameButton,
    item0Style,
    item1Style,
    item2Style,
    item3Style,
    item4Style,
    item0Text,
    item1Text,
    item2Text,
    item3Text,
    item4Text
} from '../emotionVars/gameVars'


const Game = () => {
    const router = useRouter();
    const query = router.query;
    const itemsQuantity = query.quantity;
    const itemsType = typeof query.arrayType === 'string' ? +query.arrayType : query.arrayType;
    const itemsOrder = query.activeOrder;
    const [range, setRange] = useState(itemsType)
    const [theme, setTheme] = useState<string>('tulips')
    const [order, setOrder] = useState(itemsOrder)

    const chooseSymbolMarginsX = (theme: string, item: number) => {
        switch (theme) {
            case 'coins':
                if (item === 0) return '0';
                if (item === 1) return '0';
                if (item === 2) return '0';
                if (item === 3) return '0';
                if (item === 4) return '0';
                break;
            case 'food':
                if (item === 0) return '-.4';
                if (item === 1) return '-1';
                if (item === 2) return '-.5';
                if (item === 3) return '-.5';
                if (item === 4) return '-.5';
                break;
            case 'toys':
                if (item === 0) return '1.5';
                if (item === 1) return '1';
                if (item === 2) return '2';
                if (item === 3) return '1';
                if (item === 4) return '1.5';
                break;
            case 'tulips':
                if (item === 0) return '1';
                if (item === 1) return '2';
                if (item === 2) return '1';
                if (item === 3) return '2';
                if (item === 4) return '1';

        }
    }
    const chooseSymbolMarginsY = (theme: string, item: number) => {
        switch (theme) {
            case 'coins':
                if (item === 0) return '-.5';
                if (item === 1) return '-.1';
                if (item === 2) return '-.5';
                if (item === 3) return '-.5';
                if (item === 4) return '-.5';
                break;
            case 'food':
                if (item === 0) return '-.7';
                if (item === 1) return '-.4';
                if (item === 2) return '-.7';
                if (item === 3) return '';
                if (item === 4) return '-.4';
                break;
            case 'toys':
                if (item === 0) return '-1.4';
                if (item === 1) return '-1.4';
                if (item === 2) return '-1.4';
                if (item === 3) return '-1.4';
                if (item === 4) return '-1.4';
                break;
            case 'tulips':
                if (item === 0) return '3';
                if (item === 1) return '-2';
                if (item === 2) return '-2.5';
                if (item === 3) return '-1';
                if (item === 4) return '3.7';
        }
    }

    const randomiseTheme = () => {
      let res = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        switch (res) {
            case 1:
                return 'coins';
            case 2:
                return 'food';
            case 3:
                return 'toys';
            case 4:
                return 'tulips';
        }

    }

    const buildAnswerOrder = (arr: any[]) => {
        let localArr = arr;
        switch (range) {
            case 1:
                let alphabet: any[] = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
                return localArr.map(item => alphabet.indexOf(item)).sort((a, b) => a - b).map(item => alphabet[item]);
            default:
                return localArr.map(item => item).sort((a, b) => a - b);
        }
    }

    const calcArray = (q: number, max: number, min: number) => {
        let range: any[] = [];
        for (let i = 0; i <= q; i++) {
            while (range.length <= q) {
                let res = Math.floor(Math.random() * (max - min + 1)) + min;
                if (!range.includes(res)) range.push(res)
            }
        }
        return range;
    }

    const generateItems = (q: number, r: number) => {
        let range: any[] = [];
        switch (r) {
            case 1:
                let arr: any[] = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
                for (let i = 0; i <= q; i++) {
                    while (range.length <= q) {
                        let res = (Math.floor(Math.random() * (33 - 1 + 1)) + 1) - 1;
                        if (!range.includes(arr[res])) range.push(arr[res])
                    }
                }
                return range;
            case 2:
                return calcArray(q, 9, 1)
            case 3:
                return calcArray(q, 19, 10)
            case 4:
                return calcArray(q, 50, 20)
            case 5:
                return calcArray(q, 99, 51)
            case 6:
                return calcArray(q, 999, 100)
        }
    }
    let itemArray;
    let answerArray;

    const [answerList, setAnswerList] = useState([])
    const [itemsList, setItemsList] = useState([])

    useEffect(() => {
        let result = randomiseTheme()
        setTheme(result)
        itemArray = generateItems(itemsQuantity, range)
        setItemsList(itemArray)
        answerArray = buildAnswerOrder(itemArray);
        itemsOrder === 'up' ? setAnswerList(answerArray) : setAnswerList(answerArray.reverse())
    }, [])


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let currentDragging = '';
    let currentBackground: number;

    const [finishedItems, setFinishedItems] = useState<number[]>([])
    const dragStart = (e: React.ChangeEvent<HTMLInputElement>, item: number) => {
        currentDragging = e.target.innerText;
        currentBackground = item;
        let audio = new Audio();
        audio.src = '/sounds/2.mp3';
        audio.autoplay = true;
    };
    const [answerBackground, setAnswerBackground] = useState([])
    const [dropchange, setDropchange] = useState(0)
    const [showWin, setShowWin] = useState(false)
    let spliceAnswerArr: string[] = answerBackground;

    const onDrop = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        let okplayed = false
        if (e.target.id === currentDragging) {
            theme === 'tulips' ? spliceAnswerArr.splice(id, 0, `url(/images/themes/${theme}/answerItem${currentBackground}.png)`) : spliceAnswerArr.splice(id, 0, `url(/images/themes/${theme}/item${currentBackground}.png)`);
            setAnswerBackground(spliceAnswerArr)
            if (itemsType === 1) setFinishedItems(finishedItems => [...finishedItems, currentDragging])
            if (itemsType !== 1) setFinishedItems(finishedItems => [...finishedItems, +currentDragging])
            let audio = new Audio();
            audio.src = '/sounds/1.mp3';
            audio.autoplay = true;
            okplayed = true
        }
        if (!okplayed) {
            let audio = new Audio();
            audio.src = '/sounds/3.mp3';
            audio.autoplay = true;
        }

        setDropchange(prev => prev + 1);
        finishedItems.length === +itemsQuantity ? setShowWin(true) : ''
    };
    useEffect(() => {
        let audio = new Audio();
        showWin ? audio.src = '/sounds/5.mp3' : '';
        audio.autoplay = true;
    }, [showWin])

    return (

        <div className={theme}>
            <div className={numArray}>

                {itemsList.length >= 1 ? <div draggable id={theme} onDragStart={(e) => dragStart(e, 1)} style={{
                    backgroundImage: !finishedItems.includes(itemsList[0]) ? `url(/images/themes/${theme}/item1.png)` : '',
                    height: theme === 'tulips' ? '690px' : '157px',
                    width: theme === 'tulips' ? '235px' : '159px',

                }} className={item0Style}>

                    <div style={{
                        marginTop: `${chooseSymbolMarginsX(theme, 0)}rem`,
                        marginLeft: `${chooseSymbolMarginsY(theme, 0)}rem`
                    }} className={item0Text}>{!finishedItems.includes(itemsList[0]) ? itemsList[0] : ''}</div>

                </div> : ''}

                {itemsList.length >= 2 ? <div id={theme} draggable onDragStart={(e) => dragStart(e, 2)} style={{
                    backgroundImage: !finishedItems.includes(itemsList[1]) ? `url(/images/themes/${theme}/item2.png)` : '',
                    height: theme === 'tulips' ? '690px' : '157px',
                    width: theme === 'tulips' ? '235px' : '159px'
                }} className={item1Style}>

                    <div style={{
                        marginTop: `${chooseSymbolMarginsX(theme, 1)}rem`,
                        marginLeft: `${chooseSymbolMarginsY(theme, 1)}rem`
                    }} className={item1Text}>{!finishedItems.includes(itemsList[1]) ? itemsList[1] : ''}</div>

                </div> : ''}

                {itemsList.length > 2 ? <div id={theme} draggable onDragStart={(e) => dragStart(e, 3)} style={{
                    cursor: 'move',
                    backgroundImage: !finishedItems.includes(itemsList[2]) ? `url(/images/themes/${theme}/item3.png)` : '',
                    height: theme === 'tulips' ? '690px' : '157px',
                    width: theme === 'tulips' ? '235px' : '159px'
                }} className={item2Style}>

                    <div style={{
                        marginTop: `${chooseSymbolMarginsX(theme, 2)}rem`,
                        marginLeft: `${chooseSymbolMarginsY(theme, 2)}rem`
                    }} className={item2Text}>{!finishedItems.includes(itemsList[2]) ? itemsList[2] : ''}</div>

                </div> : ''}

                {itemsList.length > 3 ? <div id={theme} draggable onDragStart={(e) => dragStart(e, 4)} style={{
                    backgroundImage: !finishedItems.includes(itemsList[3]) ? `url(/images/themes/${theme}/item4.png)` : '',
                    height: theme === 'tulips' ? '690px' : '157px',
                    width: theme === 'tulips' ? '235px' : '159px'
                }} className={item3Style}>

                    <div style={{
                        marginTop: `${chooseSymbolMarginsX(theme, 3)}rem`,
                        marginLeft: `${chooseSymbolMarginsY(theme, 3)}rem`
                    }} className={item3Text}>{!finishedItems.includes(itemsList[3]) ? itemsList[3] : ''}</div>

                </div> : ''}

                {itemsList.length > 4 ? <div id={theme} draggable onDragStart={(e) => dragStart(e, 1)} style={{
                    backgroundImage: !finishedItems.includes(itemsList[4]) ? `url(/images/themes/${theme}/item1.png)` : '',
                    height: theme === 'tulips' ? '690px' : '157px',
                    width: theme === 'tulips' ? '235px' : '159px'
                }} className={item4Style}>

                    <div style={{
                        marginTop: `${chooseSymbolMarginsX(theme, 4)}rem`,
                        marginLeft: `${chooseSymbolMarginsY(theme, 4)}rem`
                    }} className={item4Text}>{!finishedItems.includes(itemsList[4]) ? itemsList[4] : ''}</div>

                </div> : ''}

            </div>
            <div style={{
                backgroundImage: order === 'up' ? 'url(/images/up.png)' : 'url(/images/down.png)',
                minHeight: '69px',
                width: '358px',
                marginLeft: order === 'up' ? '4rem' : '38rem'
            }} className='order'/>
            {itemsOrder === 'up' ?
                <div className="answerBar">

                    <div id={answerList[0]} style={{
                        backgroundImage: `${answerBackground[0]}`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }} onDragOver={(event) => event.preventDefault()} onDrop={(e) => onDrop(e, 0)}
                         className="answer">{answerBackground[0] ? answerList[0] : ''}</div>
                    <div id={answerList[1]} style={{
                        backgroundImage: `${answerBackground[1]}`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }} onDragOver={(event) => event.preventDefault()} onDrop={(e) => onDrop(e, 1)}
                         className="answer">{answerBackground[1] ? answerList[1] : ''}</div>
                    <div id={answerList[2]} style={{
                        backgroundImage: `${answerBackground[2]}`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }} onDragOver={(event) => event.preventDefault()} onDrop={(e) => onDrop(e, 2)}
                         className="answer">{answerBackground[2] ? answerList[2] : ''}</div>
                    <div id={answerList[3]} style={{
                        backgroundImage: `${answerBackground[3]}`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }} onDragOver={(event) => event.preventDefault()} onDrop={(e) => onDrop(e, 3)}
                         className="answer">{answerBackground[3] ? answerList[3] : ''}</div>
                    <div id={answerList[4]} style={{
                        backgroundImage: `${answerBackground[4]}`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }} onDragOver={(event) => event.preventDefault()} onDrop={(e) => onDrop(e, 4)}
                         className="answer">{answerBackground[4] ? answerList[4] : ''}</div>
                    <div id={answerList[5]} style={{
                        backgroundImage: `${answerBackground[5]}`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }} onDragOver={(event) => event.preventDefault()} onDrop={(e) => onDrop(e, 5)}
                         className="answer">{answerBackground[5] ? answerList[5] : ''}</div>

                </div> :
                <div className="answerBar">

                    <div id={answerList[5]} style={{
                        backgroundImage: `${answerBackground[5]}`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }} onDragOver={(event) => event.preventDefault()} onDrop={(e) => onDrop(e, 5)}
                         className="answer">{answerBackground[5] ? answerList[5] : ''}</div>
                    <div id={answerList[4]} style={{
                        backgroundImage: `${answerBackground[4]}`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }} onDragOver={(event) => event.preventDefault()} onDrop={(e) => onDrop(e, 4)}
                         className="answer">{answerBackground[4] ? answerList[4] : ''}</div>
                    <div id={answerList[3]} style={{
                        backgroundImage: `${answerBackground[3]}`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }} onDragOver={(event) => event.preventDefault()} onDrop={(e) => onDrop(e, 3)}
                         className="answer">{answerBackground[3] ? answerList[3] : ''}</div>
                    <div id={answerList[2]} style={{
                        backgroundImage: `${answerBackground[2]}`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }} onDragOver={(event) => event.preventDefault()} onDrop={(e) => onDrop(e, 2)}
                         className="answer">{answerBackground[2] ? answerList[2] : ''}</div>
                    <div id={answerList[1]} style={{
                        backgroundImage: `${answerBackground[1]}`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }} onDragOver={(event) => event.preventDefault()} onDrop={(e) => onDrop(e, 1)}
                         className="answer">{answerBackground[1] ? answerList[1] : ''}</div>
                    <div id={answerList[0]} style={{
                        backgroundImage: `${answerBackground[0]}`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }} onDragOver={(event) => event.preventDefault()} onDrop={(e) => onDrop(e, 0)}
                         className="answer">{answerBackground[0] ? answerList[0] : ''}</div>
                </div>}

            {
                showWin ?
                    <div className={winWrapper}>
                        <div className={winInner}>
                            <div style={{
                                backgroundImage: 'url(/images/star.png)',
                                height: '150px',
                                width: '150px',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                position: 'absolute',
                                top: '21rem',
                                left: '-6rem'
                            }}/>
                            <div style={{
                                backgroundImage: 'url(/images/star.png)',
                                height: '95px',
                                width: '95px',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                position: 'absolute',
                                top: '-2rem',
                                left: '-2.6rem'
                            }}/>
                            <div style={{
                                backgroundImage: 'url(/images/star.png)',
                                height: '95px',
                                width: '95px',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                position: 'absolute',
                                top: '24rem',
                                left: '34rem'
                            }}/>
                            <div style={{
                                backgroundImage: 'url(/images/star.png)',
                                height: '150px',
                                width: '150px',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                position: 'absolute',
                                top: '7rem',
                                left: '32rem'
                            }}/>
                            <h2>Победа!</h2>
                            <h3>Молодец! Ты успешно справился с заданием!</h3>
                            <button className={newGameButton}><Link href="/">Заново</Link></button>
                        </div>
                    </div>
                    : ''
            }
            <audio src="/sounds/maintheme.mp3" autoPlay="autoplay"></audio>
        </div>
    );
};

export default Game;