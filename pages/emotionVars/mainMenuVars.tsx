import {css} from '@emotion/css'

export const wrapperStyle = css`
  margin: 0 auto;
  margin-top: 2rem;
  width: 699px;
  height: 660px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: Helvetica, sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 44px;
  background: linear-gradient(#7F75F0, #101F32);
  border-radius: 40px;
`
export const innerStyle = css`
  position: absolute;
  background-color: white;
  width: 659px;
  height: 620px;
  border-radius: 20px;
  left: 20px;
`
export const buttonStyle = css`
  border-radius: 20px;
  border: none;
  font-size: 32px;
  font-family: Calibri, san-serif;
  font-weight: 700;
  line-height: 39px;
  margin-right: 2rem;
  padding: 2px 21px 4px 24px;
  cursor: pointer;
`
export const labelFirstStyle = css`
  display: flex;
  font-family: Calibri, san-serif;
  margin-left: 135px;
  margin-top: 10px;
  margin-bottom: -10px;
  justify-content: space-between;
  width: 390px;
  font-size: 24px;
`
export const labelSecondStyle = css`
  display: flex;
  font-family: Calibri, san-serif;
  margin-left: 40px;
  margin-top: 10px;
  margin-bottom: -10px;
  justify-content: space-between;
  width: 610px;
  font-size: 24px;
`
export const playButtonStyle = css`
  background-color: #38DF7A;
  color: #FFF;
  font-family: 'Helvetica';
  font-size: 32px;
  line-height: 44px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border: none;
  padding: 8px 77px 8px 73px;
  margin-top: 5rem;
  cursor: pointer;
`