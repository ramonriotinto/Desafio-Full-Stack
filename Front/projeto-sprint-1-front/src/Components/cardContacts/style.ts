import styled from "styled-components";

export const ListRenderContacts = styled.ul`
    li {
        .names {
            color: var(--color-name-contacts);
            font-weight: 600;
        }
        p {
            color: var(--color-white);
        }

        button {
            border-radius: 10px;
            border: none;

            padding: 5px 10px 5px 10px;

            cursor: pointer;

            :hover {
                background-color: red;
            }
        }
    }
`;
