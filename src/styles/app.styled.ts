import styled from "styled-components";

export const StyledApp = styled.main`
    width: 100%;
    position: relative;

           
    @media screen and (max-width: 412px) {
        max-width: 412px;
        overflow: hidden;
    }

    & > .left-sidebar{
        position: fixed;
        left: -250px;
        right: 0%;
        top: 0%;
        bottom: 0%;
        background: #1D1F22;
        width: 250px;
        height: 100vh;
        padding: 20px 30px;
        display: flex;
        gap: 20px;
        flex-direction: column;
        align-items: flex-start;
        position: relative;

        &.active{
            left: 0%;
        }
    }

    & > .left-sidebar > h1{
        height: 23px;
        top: calc(50% - 16px/2 - 477px);
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        text-transform: uppercase;
        line-height: 16px;
        letter-spacing: 1.5px;
        color: #7C8187;
    }

    & > .left-sidebar > button{
        background: #E46643;
        border-radius: 4px;
        width: 202px;
        height: 40px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        cursor: pointer;
        transition: 0.3s ease-in;

        &:hover{
            background: #F39765;
        }
    }

    & > .left-sidebar > .created-documents{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 25px;
        align-items: flex-start;
    }

    & > .left-sidebar > .created-documents > .document{
        width: 200px;
        height: 50px;
        display: flex;
        gap: 20px;
        justify-content: flex-start;
        align-items: center;
        border-top: 1px solid #1D1F22;
        border-bottom: 1px solid #1D1F22;
        transition: 0.3s ease-in;

        &:hover{
            border-top-color: rgba(100, 100, 100, 0.7);
            border-bottom-color: rgba(100, 100, 100, 0.7);
            cursor: pointer;
        }
    }

    & > .left-sidebar > .created-documents > .document > .icon{
        width: 13.71px;
        height: 16px;
    }

    & > .left-sidebar > .created-documents > .document > .icon > img{
        width: 100%;
        height: 100%;
    }

    & > .left-sidebar > .created-documents > .document > .info{
        display: flex;
        gap: 0px;
        flex-direction: column;
        align-items: flex-start;
        height: 40px;
    }

    & > .left-sidebar > .created-documents > .document > .info > .date{
        font-family: 'Roboto';
        font-style: normal;
        padding: 0;
        margin: 0;
        font-weight: 300;
        font-size: 13px;
        color: #7C8187;
    }

    & > .left-sidebar > .created-documents > .document > .info > .name{
        font-family: 'Roboto';
        font-style: normal;
        padding: 0;
        margin: 0;
        font-weight: 400;
        font-size: 15px;
        color: #FFFFFF;
    }

    & > .left-sidebar > .theme{
        position: absolute;
        width: 104px;
        height: 24px;
        left: 24px;
        bottom: 35px;
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
    }

    & > .left-sidebar > .theme > .sun,
    & > .left-sidebar > .theme > .moon{
        width: 18px;
        height: 18px;
    }

    & > .left-sidebar > .theme > .toggle-button{
        width: 48px;
        height: 24px;
        background-color: #B4B4B4;
        border-radius: 30px;
        display: flex;
        align-items: center;
        overflow: hidden;
        position: relative;

        &::before{
            position: absolute;
            content: '';
            width: 22px;
            left: 2px;
            transform: translateX(0%);
            height: 90%;
            border-radius: 100%;
            background: #FFFFFF;
            z-index: 10;
        }

        &.dark::before{
            transform: translateX(100%);
        }
    }

    /* top sidebar  */
    & > .top-sidebar{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 72px;
        background: #2B2D31;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 10;

        &.moveLeft{
            left: 250px;
        }
    }

    & > .top-sidebar > .left{
        display: flex;
        gap: 40px;
        align-items: center;

                
        @media screen and (max-width: 412px){
            gap: 0;
        }
    }

    & > .top-sidebar > .left > .toggle-menu-icons-container{
        width: 72px;
        height: 72px;
        background: #35393F;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
    }

    & > .top-sidebar > .left > .toggle-menu-icons-container > img{
        position: absolute;
        width: 30px;
        height: 18px;
    }

    & > .top-sidebar > .left > .markdown{
        
        @media screen and (max-width: 412px){
            display: none;
        }
    }

    & > .top-sidebar > .left > .markdown > h1{
        color: #fff;
        font-size: 20px;
        font-weight: 900;
    }

    & > .top-sidebar > .left > .vertical-bar{
        width: 1px;
        height: 40px;
        background: #5A6069;

                
        @media screen and (max-width: 412px){
            display: none;
        }
    }

    & > .top-sidebar > .left > .document-title{
        width: fit-content;
        height: 36px;
        display: flex;
        gap: 10px;
        align-items: center;

                        
        @media screen and (max-width: 412px){
            margin-left: 10px;
        }
    }

    & > .top-sidebar > .left > .document-title > img{
        width: 13.71px;
        height: 16px;
    }

    & > .top-sidebar > .left > .document-title > .info{
        height: 36px;
    }

    & > .top-sidebar > .left > .document-title > .info > .placeholder{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 15px;
        color: #7C8187;
    }

    & > .top-sidebar > .left > .document-title > .info > .name{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }

    & > .top-sidebar > .left > .document-title > .info > .name > input{
        width: fit-content;
        border: none;
        outline: none;
        background: transparent;
        border-bottom: 1px solid rgba(100, 100, 100, 0.7);
        color: #fff;

    }

    & > .top-sidebar > .actions{
        margin-right: 30px;
        width: 200px;
        display: flex;
        gap: 40px;
        justify-content: space-between;
        align-items: center;
    }

    & > .top-sidebar > .actions > .delete{
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    & > .top-sidebar > .actions > .delete > img{
        width: 18px;
        height: 20px;
    }

    & > .top-sidebar > .actions > .save{
        width: 152px;
        height: 40px;
        border-radius: 10px;
        background-color: #E46643;
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: 0.3s ease-in;

        &:hover{
            background-color: #F39765;
        }
    }

    & > .top-sidebar > .actions > .save > img{
        width: 16px;
        height: 16px;
    }

    & > .top-sidebar > .actions > .save > p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }

    /* markdown editor */
    & > .markedown-editor{
        position: absolute;
        width: 100vw;
        height: 100%;
        top: 90px;
        display: flex;
        justify-content: center;
        align-items: flex-start;

        &.moveLeft{
            left: 250px;
        }
    }
    
    @media screen and (max-width: 412px) {
        & > .markedown-editor{
            max-width: 412px;
            flex-direction: column;
            top: 13%;
        }
    }


`