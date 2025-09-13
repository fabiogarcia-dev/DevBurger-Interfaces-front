import { OffersCarousel, CategoriesCarousel } from "../../components";
import { Banner, Container } from "./styles";

/**Pagina principal */

export function Home() {
    return (
        <main>
            <Banner>
                <h1>Bem-Vindo</h1>
            </Banner>
            <Container>
                <div>
                    <CategoriesCarousel/>
                    <OffersCarousel/>
                </div>
            </Container>
        </main>      
    );
}