import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCard = styled(Link)`
    display: block;
    text-decoration: none;
    width: 100%;
    max-width: 500px;
    min-width: 250px;
    border: 1px solid rgb(227, 227, 227);
    border-radius: 8px;
    overflow: hidden;
    color: rgb(48, 46, 45); 
`;