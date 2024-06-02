import styled from "styled-components";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

const HomepageStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

export const Homepage = () => {
    return (
        <HomepageStyle>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </HomepageStyle>
    )
}
