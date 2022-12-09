import home from "../data/01-Home.png";
import books from "../data/01-Books.png";
import lifestyle from "../data/02-Lifestyle.png";
import lifestyle_b from "../data/29-Lifestyle_b-o.png";
import home_hem from "../data/45-Home_hem.png";
import home_bm from "../data/46-Home_bm.png";
import "./Main.css";
const Main = () => {
    return (
        <main>
            <section>
                <img src={`${home}`} alt="" />
                <p>Vifa Copenhagen 2.0 Loudspeaker</p>
                <p>$799.00</p>
            </section>
            <section>
                <img src={`${lifestyle_b}`} alt="" />
                <p>Bang & Olufsen Wireless Headphones</p>
                <p>$174.00</p>
            </section>
            <section>
                <img src={`${books}`} alt="" />
                <p>Poketo: Creative Spaces</p>
                <p>$25.00</p>
            </section>
            <section>
                <img src={`${lifestyle}`} alt="" />
                <p>Ucon Acrobatics Hajo Backpack</p>
                <p>$79.00</p>
            </section>
            <section>
                <img src={`${home_bm}`} alt="" />
                <p>Summer Print by Bratislav Milenkovic</p>
                <p>$27.00</p>
            </section>
            <section>
                <img src={`${home_hem}`} alt="" />
                <p>Palo Modular Corner Sofa by Hem</p>
                <p>$3,699.00</p>
            </section>
        </main>
    );
};

export default Main;
