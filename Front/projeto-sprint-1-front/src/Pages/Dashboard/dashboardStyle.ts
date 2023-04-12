import styled from "styled-components";

export const HeaderDashboard = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;

    h2 {
        color: var(--color-white);
        font-family: "Ballet", cursive;
    }
    h3 {
        color: var(--color-white);
        font-family: var(--font-text);
    }

    img {
        height: 60px;
        width: 60px;
        border-radius: 50%;
    }

    button {
        border-radius: 8px;
        border: none;
        font-size: 18px;
        padding: 8px 8px 5px 8px;

        cursor: pointer;

        :hover {
            background: var(--color-name-contacts);
        }
    }

    border-bottom: solid 1px var(--color-white);
`;

export const DivMainDashboard = styled.div`
    .div_opcions {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10rem;

        font-family: var(--font-text);

        h2 {
            color: var(--color-white);
        }
    }

    .div_contatos {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        color: var(--color-white);

        ul {
            display: flex;
            flex-direction: column;
            gap: 15px;

            li {
                display: flex;
                align-items: center;
                flex-direction: row;
                gap: 30px;

                background-color: var(--color-grey-2);

                border-radius: 15px;

                padding: 0px 15px 0px 15px;

                font-size: large;

                img {
                    height: 45px;
                    width: 45px;
                    border-radius: 50%;
                }
                p {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
            }
        }
    }
`;

export const FormContacts = styled.form`
    width: 295px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    background-image: url("https://static.vecteezy.com/ti/fotos-gratis/p1/10625822-fundo-preto-e-branco-abandonado-parece-retro-com-padrao-aspero-sem-pessoas-para-design-de-plano-de-fundo-ou-texto-publicitario-gratis-foto.JPG");

    padding: 20px 20px 25px 20px;

    border-radius: 0px 0px 5px 5px;

    input {
        height: 40px;
        border-radius: 15px;
        border: solid 1px var(--color-grey-1);

        background-color: transparent;
        color: var(--color-black);

        padding-left: 10px;

        font-size: medium;

        ::placeholder {
            color: var(--color-black);

            font-family: var(--font-text);
            font-size: medium;
        }
    }

    button {
        height: 35px;
        border-radius: 5px;
        border: none;

        background-color: var(--color-primary);
        color: var(--color-grey-5);

        cursor: pointer;
    }
`;
