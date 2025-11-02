import React from "react";
import "./style.css";
import Title from "../../shared/ui/title";
import Container from "../../shared/ui/container";

function Our() {
    return (
        <Container>

            <div className="our">
                <Title align="left">OUR CAPABILITIES</Title>
                <p className="lorem2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                <button className="all">ALL SERVICES</button>
            </div>

            <div className="bitMap">
                <div className="bitMap__sevice">
                    <img src="" alt="" />
                    {/* компонент для заголовков h3 */}
                    {/* компонент для текстов */}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos et consectetur odio, illum labore non. Fugiat, ipsum a eius commodi veniam reiciendis beatae deserunt tempore odio at tempora alias assumenda eum rem consectetur repellat animi labore amet repudiandae corporis! Officiis, sed impedit voluptates voluptatibus dolores quidem iusto ipsam obcaecati voluptas eius atque dolor cumque doloremque illum ducimus? Dolorum aliquam necessitatibus pariatur cum voluptatum beatae incidunt quas. Animi corrupti laudantium consequuntur assumenda molestiae minus nam quas harum amet eum qui saepe quibusdam nemo dignissimos, officia pariatur, est laborum vel? Perspiciatis tempora repudiandae qui, exercitationem nemo corporis ipsam necessitatibus consectetur temporibus!
                </div>
                <div className="bitMap__sevice">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla ratione inventore totam dolorum consectetur numquam. Dignissimos, quos? Cum, harum eligendi eaque porro quis nihil rerum dolor placeat rem. Labore maxime sint fuga excepturi itaque eveniet iure quo consectetur tenetur commodi praesentium quae vero deserunt dolorem nobis laborum, ad eaque! Consectetur odio illum voluptatem autem unde corporis velit tempore magnam voluptate aliquam deleniti eum, sapiente reiciendis accusantium veniam quis assumenda. Cupiditate quas, rem impedit odit nisi facilis? Possimus totam blanditiis dicta architecto! Totam, cupiditate culpa adipisci impedit tenetur ullam dolor asperiores natus quaerat. Quam inventore fugiat labore, provident voluptates excepturi? Adipisci enim eaque ex officia, doloribus expedita, est rerum ratione quidem, debitis rem. Deleniti animi a molestiae? Aliquam, recusandae quos expedita sit modi dignissimos esse molestiae, est nesciunt iure aspernatur possimus assumenda repellat dolore deserunt reprehenderit vero voluptatibus nam! Iste accusantium magnam maxime reiciendis ab obcaecati, unde sequi perferendis repudiandae ratione consectetur sed. Nesciunt, explicabo maiores eligendi eum voluptatum vero soluta quis consectetur eius sit iste, placeat cumque neque perspiciatis incidunt ea natus, obcaecati omnis libero amet fugit corrupti. Voluptate itaque ducimus numquam perspiciatis culpa cumque suscipit aperiam. Earum eaque cupiditate asperiores facere tempore laboriosam quibusdam repudiandae quidem dolorum laudantium.
                </div>
                <div className="bitMap__sevice"></div>
            </div>


            {/* <div className="bitmap">
                <div className="proj">
                <img className="bit1" src="/bitmap.png" alt="bitman" />
                <p className="projtext">PROJECT AND CONSTRUCTION MANAGEMENT</p>
                <p className="ipsum">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                </div>
                <div className="str">
                <img className="bit2" src="/bitmap (1).png" alt="bitman" />
                <p className="strtext">STRUCTURE AUDIT AND MAINTENANCE</p>
                <p className="dolor">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                </div>
                <div className="fact">
                <img className="bit3" src="/bitmap (2).png" alt="bitman" />
                <p className="facttext">FACTORY CONSTRUCTION AND MODELING</p>
                <p className="sit">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                </div>
            </div> */}
        </Container>
    );
}
export default Our;