import styled from "styled-components";

export const StyledPreview = styled.section`
    width: 50%;
    height: 100%;
    overflow: hidden;

    &.expandPreview{
        width: 100vw;
        
    }

     @media screen and (max-width: 412px) {
        width: 100%;
        height: 100%;
    }

    & > div{
        width: 100%;
        height: 42px;
        padding: 0 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #979797;

                        
        @media screen and (max-width: 412px) {
            width: 100vw;
            padding: 0 15px;
        }

        &#light{
            background-color: #979797;
        }

        &#dark{
            background-color: #979797;
        }
    }

    & > div > h1{
        font-size: 20px;
        text-transform: uppercase;
    }

    & > div > img {
        width: 25px;
        height: 20px;
        cursor: pointer;

        @media screen  and (max-width: 412px){
            display: none;
        }
    }

        & > section{
        width: 100%;
        padding: 10px 20px;
        height: 93%;
        overflow: scroll;

                
        @media screen and (max-width: 412px) {
            width: 100vw;
            padding: 10px;
        }
    }

    &.light > section{
        background-color: #1D1F22;
        color: #ffffff;
    }

    &.dark > section {
        background-color: #ffffff;
        color: #000000;
    }

    & > section > .output {
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




    & > div > h1 {
        font-size: 20px;
        text-transform: uppercase;
    }

    & > div > img {
        width: 25px;
        height: 20px;
        cursor: pointer;

        @media screen  and (max-width: 412px){
            display: none;
        }
    }

    & > section {
        width: 100%;
        padding: 20px;
        height: 93%;
        overflow: scroll;


                
        @media screen and (max-width: 412px) {
            width: 100vw;
            /* height: 60vh; */
            padding: 10px;
        }
    }



    &.light > section{
        background-color: #1D1F22;
        color: #ffffff;
    }

    &.dark > section {
        background-color: #ffffff;
        color: #000000;
    }


    & > section > .output {
        width: 100%;
        margin: 10px;
        height: auto;
        line-height: 1.6; 
        height: 100%;
        border: none;
        outline: none;

               
        @media screen and (max-width: 412px) {
            height: 100vh;
        } 
    } 

        & h1 {
        font-size: 2em; 
        font-weight: bold;

                        
        @media screen and (max-width: 412px) {
            white-space: pre-wrap;
        }
    }
    

    & h2 {
        font-size: 1.5em;
        font-weight: bold;

                                    
        @media screen and (max-width: 412px) {
            white-space: pre-wrap;
        }
    }


    /* Styling for code blocks */
    pre {
        padding: 10px;
        border-radius: 10px;
        overflow-x: auto; 

                                
        @media screen and (max-width: 412px) {
            white-space: pre-wrap;
        }
    }



    &.light > section > code{
        background-color: #979797;
        color: #ffffff;

                                
        @media screen and (max-width: 412px) {
            white-space: pre-wrap;
        }
    }

    &.light pre code {
        background-color: #7c8187;
        color: #fff;
        border-radius: 5px;

                                
        @media screen and (max-width: 412px) {
            white-space: pre-wrap;
        }
    }

    &.dark pre code {
        background-color: #f5f5f5;
        color: #000;
        border-radius: 5px;

                                
        @media screen and (max-width: 412px) {
            white-space: pre-wrap;
        }
    } 

    /* Styling for blockquotes */
    blockquote {
        background-color: #f7f7f7;
        border-left: 5px solid #ccc;
        padding: 10px;
        margin: 10px 0;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        font-style: italic;
        background-color: #979797;
        border-left: 5px solid #e46643;

                                
        @media screen and (max-width: 412px) {
            white-space: pre-wrap;
        }
    }

    &.light blockquote{
        color: #fff;
    }

    &.dark blockquote{
        color: #000;
    }

    li{
        margin-left: 50px;

                                
        @media screen and (max-width: 412px) {
            white-space: pre-wrap;
        }
    }

    h1{
        font-family: 'Roboto Slab bold';
        font-size: 32px;

                                        
        @media screen and (max-width: 412px) {
            white-space: pre-wrap;
        }
    }

    h2{
        font-family: 'Roboto Slab Light';
        font-size: 28px;

                                        
        @media screen and (max-width: 412px) {
            white-space: pre-wrap;
        }
    }

    h3{
        font-family: 'Roboto Slab bold';
        font-size: 24px;

                                        
        @media screen and (max-width: 412px) {
            white-space: pre-wrap;
        }
    }

    h4{
        font-family: 'Roboto Slab bold';
        font-size: 20px;

                                        
        @media screen and (max-width: 412px) {
            white-space: pre-wrap;
        }
    }

    h5{
        font-family: 'Roboto Slab bold';
        font-size: 16px;

                                        
        @media screen and (max-width: 412px) {
            white-space: pre-wrap;
        }
    }

    h6{
        font-family: 'Roboto Slab bold';
        font-size: 14px;
        color: #e46643;

                                        
        @media screen and (max-width: 412px) {
            white-space: pre-wrap;
        }
    } 
    
`;
