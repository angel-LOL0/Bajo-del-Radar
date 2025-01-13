// import Card from "@src/components/Card";
import FeaturedPosts from "@src/components/FeaturedPosts";
import Layout from "@src/components/Layout";
import Slider from "@src/components/Slider";
import TypedComponent from "@src/components/Typed";

export default function Home() {
  return (
    <Layout
      title="Bajo del Radar"
      metaDescription="Página de inicio de la aplicación"
    >
      <div className="p-10 text-black dark:text-white">
        <h1 className="text-3xl font-bold text-center">
          Bienvenidos a{" "}
          <span className="text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 bg-clip-text">
            "Bajo del Radar"
          </span>
          <br />
          Donde encontrarlas de casos de: <TypedComponent /> y mas
        </h1>
      </div>
      <Slider />
      <FeaturedPosts />
    </Layout>
  );
}
