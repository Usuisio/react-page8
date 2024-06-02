import styled from "styled-components";
import { ChatbotPR } from "./chatbotPR/ChatbotPR";
import { RouteMap } from "./RouteMap/RouteMap";
import { Topics } from "./Topics/Topics";

const ContentStyle = styled.div`
display: flex;
flex-direction: column;
    background-color: #EEEEDD;
    text-align: center;
    width:100%;
    `

export const Content = () => {
    return (
        <ContentStyle>
            <ChatbotPR/>
            <Topics/>
            <RouteMap/>
        </ContentStyle>
    )
}
