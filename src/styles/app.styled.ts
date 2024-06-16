import styled from "styled-components";

export const StyledApp = styled.main`
    width: 100vw;
    height: 100%;
    overflow: hidden;
    position: relative;

    @media screen and (max-width: 412px){
        margin-bottom: 30px;
    }

    /* &.light{
        background-color: #fff;
    }

    &.light{
        background-color: #1D1F22;
    } */

    & > .left-sidebar{
        position: fixed;
        top: 0;
        left: -250px;
        width: 250px;
        height: 100%;
        background: #1D1F22;
        padding: 20px 30px;
        display: flex;
        gap: 20px;
        flex-direction: column;
        align-items: flex-start;
        z-index: 100;

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
        bottom: 10%;
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

     /* toggle show full preview on mobile screen*/


    & > .showFullPreview{
        position: absolute;
        z-index: 90;
        width: 25px;
        height: 25px;
        top: 13%;
        right: 2.5%;
        display: none;

        @media screen  and (max-width:412px){
            display: block;
        }
    }



/* top sidebar */
    & > .top-sidebar{
        position: fixed;
        top: 0;
        height: 11%;
        width: 100vw;
        background-color: #2B2D31;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;

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

        @media screen and (max-width: 412px){
            width: 50px;
            height: 50px;
        }
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

        @media screen and (max-width: 412px){
            max-width: 80px;
            gap: 10px;
            margin-right: 0;
        }
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

        @media screen  and (max-width: 412px){
            width: 40px;
            height: 40px;
            border-radius: 5px;
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

        @media screen and (max-width: 412px){
            display: none;
        }
    }


    /* workspace */
    & > .markedown-editor{
        margin-top: 5.5%;
        height: 89vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: flex-start;

        &.moveLeft{
            left: 250px;
        }
    }

    @media screen and (max-width: 412px) {
        & > .markedown-editor{
            margin-top: 21%;
            max-width: 412px;
            height: 82.5vh;
            top: 20%;
            flex-direction: column;
            overflow-y: scroll;
        }
    }
/*
    & > .left-sidebar{
        position: fixed;
        /* left: -250px; 
        right: 0%;
        top: 20%;
        bottom: 0%;
        background: #1D1F22;
        width: 250px;
        height: 100%;
        padding: 20px 30px;
        display: flex;
        gap: 20px;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        overflow: hidden;
    } */

`


           
//     @media screen and (max-width: 412px) {
//         max-width: 412px;
//         overflow: hidden;
//     }



        // &.active{
        //     left: 0%;
        // }

//     }

    // & > .left-sidebar > h1{
    //     height: 23px;
    //     top: calc(50% - 16px/2 - 477px);
    //     font-family: 'Roboto';
    //     font-style: normal;
    //     font-weight: 500;
    //     font-size: 16px;
    //     text-transform: uppercase;
    //     line-height: 16px;
    //     letter-spacing: 1.5px;
    //     color: #7C8187;
    // }

    // & > .left-sidebar > button{
    //     background: #E46643;
    //     border-radius: 4px;
    //     width: 202px;
    //     height: 40px;
    //     font-family: 'Roboto';
    //     font-style: normal;
    //     font-weight: 400;
    //     font-size: 15px;
    //     line-height: 18px;
    //     color: #FFFFFF;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     border: none;
    //     outline: none;
    //     cursor: pointer;
    //     transition: 0.3s ease-in;

    //     &:hover{
    //         background: #F39765;
    //     }
    // }

    // & > .left-sidebar > .created-documents{
    //     margin-top: 20px;
    //     display: flex;
    //     flex-direction: column;
    //     gap: 25px;
    //     align-items: flex-start;
    // }

    // & > .left-sidebar > .created-documents > .document{
    //     width: 200px;
    //     height: 50px;
    //     display: flex;
    //     gap: 20px;
    //     justify-content: flex-start;
    //     align-items: center;
    //     border-top: 1px solid #1D1F22;
    //     border-bottom: 1px solid #1D1F22;
    //     transition: 0.3s ease-in;

    //     &:hover{
    //         border-top-color: rgba(100, 100, 100, 0.7);
    //         border-bottom-color: rgba(100, 100, 100, 0.7);
    //         cursor: pointer;
    //     }
    // }

    // & > .left-sidebar > .created-documents > .document > .icon{
    //     width: 13.71px;
    //     height: 16px;
    // }

    // & > .left-sidebar > .created-documents > .document > .icon > img{
    //     width: 100%;
    //     height: 100%;
    // }

    // & > .left-sidebar > .created-documents > .document > .info{
    //     display: flex;
    //     gap: 0px;
    //     flex-direction: column;
    //     align-items: flex-start;
    //     height: 40px;
    // }

    // & > .left-sidebar > .created-documents > .document > .info > .date{
    //     font-family: 'Roboto';
    //     font-style: normal;
    //     padding: 0;
    //     margin: 0;
    //     font-weight: 300;
    //     font-size: 13px;
    //     color: #7C8187;
    // }

    // & > .left-sidebar > .created-documents > .document > .info > .name{
    //     font-family: 'Roboto';
    //     font-style: normal;
    //     padding: 0;
    //     margin: 0;
    //     font-weight: 400;
    //     font-size: 15px;
    //     color: #FFFFFF;
    // }

//     & > .left-sidebar > .theme{
//         position: absolute;
//         width: 104px;
//         height: 24px;
//         left: 24px;
//         bottom: 10%;
//         display: flex;
//         gap: 10px;
//         justify-content: center;
//         align-items: center;

                           
    //     // @media screen and (max-width: 412px) {
    //     //     // height: 100%;
    //     // }
    // }

    // & > .left-sidebar > .theme > .sun,
    // & > .left-sidebar > .theme > .moon{
    //     width: 18px;
    //     height: 18px;
    // }

    // & > .left-sidebar > .theme > .toggle-button{
    //     width: 48px;
    //     height: 24px;
    //     background-color: #B4B4B4;
    //     border-radius: 30px;
    //     display: flex;
    //     align-items: center;
    //     overflow: hidden;
    //     position: relative;

    //     &::before{
    //         position: absolute;
    //         content: '';
    //         width: 22px;
    //         left: 2px;
    //         transform: translateX(0%);
    //         height: 90%;
    //         border-radius: 100%;
    //         background: #FFFFFF;
    //         z-index: 10;
    //     }

//         &.dark::before{
//             transform: translateX(100%);
//         }
//     }

    // /* show full preview icon */
    // & > .showFullPreview{
    //     position: absolute;
    //     z-index: 90;
    //     width: 25px;
    //     height: 25px;
    //     top: 11.5%;
    //     right: 2.5%;
    //     display: none;

    //     @media screen  and (max-width:412px){
    //         display: block;
    //     }
    // }

//     /* top sidebar  */
//     & > .top-sidebar{
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 100vw;
//         height: 11%;
//         background: #2B2D31;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         z-index: 100;

        // &.moveLeft{
        //     left: 250px;
        // }
//     }

    // & > .top-sidebar > .left{
    //     display: flex;
    //     gap: 40px;
    //     align-items: center;

                
    //     @media screen and (max-width: 412px){
    //         gap: 0;
    //     }
    // }

    // & > .top-sidebar > .left > .toggle-menu-icons-container{
    //     width: 72px;
    //     height: 72px;
    //     background: #35393F;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     position: relative;
    //     cursor: pointer;

    //     @media screen and (max-width: 412px){
    //         width: 50px;
    //         height: 50px;
    //     }
    // }

    // & > .top-sidebar > .left > .toggle-menu-icons-container > img{
    //     position: absolute;
    //     width: 30px;
    //     height: 18px;
    // }

    // & > .top-sidebar > .left > .markdown{
        
    //     @media screen and (max-width: 412px){
    //         display: none;
    //     }
    // }

    // & > .top-sidebar > .left > .markdown > h1{
    //     color: #fff;
    //     font-size: 20px;
    //     font-weight: 900;
    // }

    // & > .top-sidebar > .left > .vertical-bar{
    //     width: 1px;
    //     height: 40px;
    //     background: #5A6069;

                
    //     @media screen and (max-width: 412px){
    //         display: none;
    //     }
    // }

    // & > .top-sidebar > .left > .document-title{
    //     width: fit-content;
    //     height: 36px;
    //     display: flex;
    //     gap: 10px;
    //     align-items: center;

                        
    //     @media screen and (max-width: 412px){
    //         margin-left: 10px;
    //     }
    // }

    // & > .top-sidebar > .left > .document-title > img{
    //     width: 13.71px;
    //     height: 16px;
    // }

    // & > .top-sidebar > .left > .document-title > .info{
    //     height: 36px;
    // }

    // & > .top-sidebar > .left > .document-title > .info > .placeholder{
    //     font-family: 'Roboto';
    //     font-style: normal;
    //     font-weight: 300;
    //     font-size: 13px;
    //     line-height: 15px;
    //     color: #7C8187;
    // }

    // & > .top-sidebar > .left > .document-title > .info > .name{
    //     font-family: 'Roboto';
    //     font-style: normal;
    //     font-weight: 400;
    //     font-size: 15px;
    //     line-height: 18px;
    //     color: #FFFFFF;
    // }

    // & > .top-sidebar > .left > .document-title > .info > .name > input{
    //     width: fit-content;
    //     border: none;
    //     outline: none;
    //     background: transparent;
    //     border-bottom: 1px solid rgba(100, 100, 100, 0.7);
    //     color: #fff;

    // }

    // & > .top-sidebar > .actions{
    //     margin-right: 30px;
    //     width: 200px;
    //     display: flex;
    //     gap: 40px;
    //     justify-content: space-between;
    //     align-items: center;

    //     @media screen and (max-width: 412px){
    //         max-width: 80px;
    //         gap: 10px;
    //         margin-right: 0;
    //     }
    // }

    // & > .top-sidebar > .actions > .delete{
    //     width: 25px;
    //     height: 25px;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     cursor: pointer;
    // }

    // & > .top-sidebar > .actions > .delete > img{
    //     width: 18px;
    //     height: 20px;
    // }

    // & > .top-sidebar > .actions > .save{
    //     width: 152px;
    //     height: 40px;
    //     border-radius: 10px;
    //     background-color: #E46643;
    //     display: flex;
    //     gap: 10px;
    //     justify-content: center;
    //     align-items: center;
    //     cursor: pointer;
    //     transition: 0.3s ease-in;

    //     &:hover{
    //         background-color: #F39765;
    //     }

    //     @media screen  and (max-width: 412px){
    //         width: 40px;
    //         height: 40px;
    //         border-radius: 5px;
    //     }
    // }

    // & > .top-sidebar > .actions > .save > img{
    //     width: 16px;
    //     height: 16px;
    // }

    // & > .top-sidebar > .actions > .save > p{
    //     font-family: 'Roboto';
    //     font-style: normal;
    //     font-weight: 400;
    //     font-size: 15px;
    //     line-height: 18px;
    //     color: #FFFFFF;

    //     @media screen and (max-width: 412px){
    //         display: none;
    //     }
    // }

//     /* markdown editor */
//     & > .markedown-editor{
//         position: absolute;
//         width: 100vw;
//         height: 100%;
//         top: 11%;
//         display: flex;
//         justify-content: center;
//         align-items: flex-start;

//         &.moveLeft{
//             left: 250px;
//         }
//     }
    
    // @media screen and (max-width: 412px) {
    //     & > .markedown-editor{
    //         max-width: 412px;
    //         height: 100vh;
    //         top: 20%;
    //         flex-direction: column;
    //         overflow-y: scroll;
    //     }
    // }


// `