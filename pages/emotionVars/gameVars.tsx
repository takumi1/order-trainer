import {css} from '@emotion/css'

export const numArray = css`
      display: flex;
      justify-content: space-around;
    `
export const winWrapper = css`margin: 0 auto;
      margin-top: 9rem;
      margin-left: 12rem;
      width: 621px;
      height: 480px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      font-family: Helvetica, sans-serif;
      font-size: 32px;
      font-weight: 400;
      line-height: 44px;
      background: linear-gradient(#67DF89, rgba(141, 103, 223, 0));
      border-radius: 40px;
      position: absolute;
    `
export const winInner = css`position: absolute;
      background-color: white;
      width: 581px;
      height: 440px;
      border-radius: 20px;
      left: 20px;

      & h2 {
        margin-top: 2rem;
        font-size: 90px;
        line-height: 90px;

        background: linear-gradient(180deg, #FFF9D8 8.65%, #FFE44F 69.58%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(0 0 10px #017901);
      }

      & h3 {
        font-size: 30px;

        color: #5F40A1;
      }
    `
export const newGameButton = css`
      background-color: #2BD600;
      color: #FFF;
      font-family: 'Helvetica';
      font-size: 32px;
      line-height: 44px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      border: none;
      padding: 8px 77px 8px 73px;
      margin-top: 1.8rem;
      cursor: pointer;`

export const item0Style = css`margin-top: 13rem;
      background-repeat: no-repeat;
      background-size: contain;

      &:active {
        overflow: hidden;
        opacity: 0.999;

      }
    `
export const item1Style = css`margin-top: 10rem;
      background-repeat: no-repeat;
      background-size: contain;

      &:active {
        overflow: hidden;
        opacity: 0.999;
        border-radius: 50%;
      }`
export const item2Style = css`margin-top: 17rem;
      background-repeat: no-repeat;
      background-size: contain;

      &:active {
        overflow: hidden;
        opacity: 0.999;
        border-radius: 50%;
      }`
export const item3Style = css`margin-top: 10rem;
      background-repeat: no-repeat;
      background-size: contain;

      &:active {
        overflow: hidden;
        opacity: 0.999;
        border-radius: 50%;
      }`
export const item4Style = css`margin-top: 15rem;
      background-repeat: no-repeat;
      background-size: contain;

      &:active {
        overflow: hidden;
        opacity: 0.999;
        border-radius: 50%;
      }`

export const item0Text = css`font-size: 56px;
      color: white;
      text-shadow: 2px 2px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
      text-align: center;
      margin-top: 2rem;
      border-radius: 100%;
      cursor: move;
      padding: 40px 40px;

    `
export const item1Text = css`font-size: 56px;
      color: white;
      text-shadow: 2px 2px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
      text-align: center;
      margin-top: 2rem;
      border-radius: 100%;
      cursor: move;
      padding: 40px 40px;
    `
export const item2Text = css`font-size: 56px;
      color: white;
      text-shadow: 2px 2px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
      text-align: center;
      border-radius: 100%;
      cursor: move;
      padding: 40px 40px;
      margin-top: 2rem;`
export const item3Text = css`font-size: 56px;
      color: white;
      text-shadow: 2px 2px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
      text-align: center;
      border-radius: 100%;
      cursor: move;
      padding: 40px 40px;
      margin-top: 2rem;`
export const item4Text = css`font-size: 56px;
      color: white;
      text-shadow: 2px 2px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;
      text-align: center;
      border-radius: 100%;
      cursor: move;
      padding: 40px 40px;
      margin-top: 2rem;`