import styled from "styled-components";

export const ButtonLoginPage = styled.button`
    background-color: var(--color-grey-3);
    color: var(--color-white);
    font-size: medium;

    height: 30px;
    padding: 0px 10px 0px 10px;

    border: none;
    border-radius: 8px;

    cursor: pointer;

    :hover {
        background-color: var(--color-white);
        color: var(--color-black);
    }

    .linkResgt {
        text-decoration: none;
        color: var(--color-black);
    }
`;
