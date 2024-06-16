import styled from "styled-components";

export const StyledToast = styled.div`
    position: absolute;
    inset: 0;
    width: 100%; 
    height: 100%;
    background-color: rgba(50, 50, 50, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    & > .card{
        padding: 15px;
        width: 343px;
        height: 218px;
        border-radius: 5px;

        &.light{
            background-color: #fff;

            & > h1{
                color: #35393F;
            }

            & > p{
                /* color: #C1C4CB; */
                color: #7C8187;
            }

            /* & > button{
                /* color: #C1C4CB; */
                /* color: #7C8187; 
                display: none;
            } */
        }

        &.dark{
            background-color: #000;


            & > h1{
                color: #fff;
                /* color: #35393F; */
            }

            & > p{
                color: #C1C4CB;
            }
        }
    }


    & > .card > h1{
        width: 295px; 
        height: 26px;
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 26px;
        margin: 10px 0px;
        /* color: #35393F; */
    }

    & > .card > p{
        width: 295;
        height: 72px;
        margin: 10px 0;
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        /* color: #7C8187; */
    }

    & > .card > div > button{
        width: 295px; 
        height: 40px;
        background: #E46643;
        border-radius: 4px;
        border: none;
        outline: none;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        color: #FFFFFF;
        transition: 0.3s ease-in;

        &:hover{
            cursor: pointer;
            background-color: #F39765;
        }
    }
`