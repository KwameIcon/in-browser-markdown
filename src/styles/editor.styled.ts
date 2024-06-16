import styled from "styled-components";

export const StyledEditor = styled.section`
    width: 50%;
    border-right: 1px solid #E4E4E4;
    height: 100%;
    overflow: hidden;

    &.hideEditor{
        width: 0;
    }


    @media screen and (max-width: 412px) {
        width: 100%;
        height: 100%;
    }

    & > div{
        width: 100%;
        height: 42px;
        padding-left: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

                        
        @media screen and (max-width: 412px) {
            width: 100vw;
            padding-left: 15px;
        }

        &#light{
            background-color: #979797;
        }

        &#dark{
            background-color: #979797;
        }
    }

    & > div > h1{
        text-transform: uppercase;
    }

    & > section{
        width: 100%;
        padding: 0 20px;
        height: 100%;
        overflow: hidden;

                
        @media screen and (max-width: 412px) {
            width: 100vw;
            padding: 10px;
        }

        &#light{
            background-color: #ffffff;
            color: #000000;
        }

        &#light{
            background-color: #1D1F22;
            color: #ffffff;
        }

        &#light > textarea{
            background-color: #ffffff;
            color: #000000;
        }

        &#light > textarea{
            background-color: #1D1F22;
            color: #ffffff;
        }
    }
 
    & > section > textArea{
        width: 100%; 
        height: 100%;
        margin: 10px;
        margin-bottom: 100px;
        line-height: 30px;
        border: none;
        outline: none;

        @media screen  and (min-width: 720px){
            min-width: 640px;
            min-height: 535px;
        }

                        
        @media screen and (max-width: 412px) {
            width: 100%;
            max-height: 520px;
            padding-bottom: 10px;
        }
    } 
    

`