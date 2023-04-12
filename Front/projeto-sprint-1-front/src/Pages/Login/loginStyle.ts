import styled from "styled-components";

export const DivContainerLogin = styled.div`
    width: 100%;
    height: 100vh;

    background-image: url("https://www.10wallpaper.com/wallpaper/1920x1080/1908/2019_iOS_13_Dark_Mode_Black_Gradient_Abstract_1920x1080.jpg");

    h1 {
        color: var(--color-white);
        text-align: center;
        padding-top: 15px;
        font-family: var(--font-title);
    }
`;

export const DivFlexLogin = styled.div`
    width: 100%;
    height: 70%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;

    padding-top: 50px;
`;

export const FormLogin = styled.form`
    border: solid 1px var(--color-grey-3);
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    padding: 15px;

    .LoginTitle {
        margin: 0px 0px 25px 0px;

        color: var(--color-white);
        font-family: var(--font-title);
    }

    input {
        background-color: transparent;

        color: var(--color-white);
        border-radius: 8px;
        border: none;

        height: 40px;
        width: 350px;

        padding-left: 10px;

        font-family: var(--font-text);

        ::placeholder {
            color: var(--color-grey-3);

            font-family: var(--font-text);
            font-size: medium;
        }
    }

    p {
        color: var(--color-red);
    }
    span {
        color: var(--color-white);
    }
`;

export const DivInfo = styled.div`
    h1 {
        font-family: "Ballet", cursive;
        font-weight: normal;
        font-size: 90px;
    }

    p {
        color: var(--color-white);
    }
`;
