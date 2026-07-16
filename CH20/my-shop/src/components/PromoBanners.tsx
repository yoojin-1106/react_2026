import { Link } from "react-router-dom";
import BannerJSon from '../data/banners.json'
import type { Banner } from "../types/banner";

// .json import java object로 바꿔주지만 any type으로 들어옴, 다시 원하는 Banner[] type으로 좁힌다.
const banners = BannerJSon as Banner[];

export default function PromoBanners(){
    return(
        <section className="stack">
            <div className="page-head">
                <h1>기획전</h1>
            </div>
            <div className="product-grid">
                {
                    banners.map((b) => 
                        <div className="product-card" key={b.id}>
                            <Link to={b.href} className="card-link" >
                                <img src={b.image} className="thumb" />
                                <div className="body">
                                    <p className="p-name">{b.title}</p>
                                    <span className="muted">{b.subtitle}</span>
                                </div>
                            </Link>    
                        </div>

                    )
                }
            </div>
        </section>
    )
}