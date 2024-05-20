import CategorySection from "./CategorySection";
import Hero from "./Hero";
import HomeTestimonial from "./HomeTestimonial";
import ProductSection from "./ProductSection";

const Home = () => {
    return (
        <div className="containerArena">
            <div>
                <Hero/>
            </div>
            <div className="py-4">
                <CategorySection/>
            </div>
            <div className="pb-4">
                <ProductSection/>
            </div>
            <div className="pt-10 pb-16">
                <HomeTestimonial/>
            </div>
        </div>
    );
};

export default Home;