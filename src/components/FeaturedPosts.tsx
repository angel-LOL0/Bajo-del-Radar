import React from "react";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  link: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Publicación Destacada 1",
    excerpt: "Este es un resumen corto de la primera publicación destacada.",
    imageUrl: "https://via.placeholder.com/400x300/7f7fff/333333?text=Post+1",
    link: "#",
  },
  {
    id: 2,
    title: "Publicación Destacada 2",
    excerpt: "Este es un resumen corto de la segunda publicación destacada.",
    imageUrl: "https://via.placeholder.com/400x300/7fff7f/333333?text=Post+2",
    link: "#",
  },
  {
    id: 3,
    title: "Publicación Destacada 3",
    excerpt: "Este es un resumen corto de la tercera publicación destacada.",
    imageUrl: "https://via.placeholder.com/400x300/ff7f7f/333333?text=Post+3",
    link: "#",
  },
  {
    id: 4,
    title: "Publicación Destacada 4",
    excerpt: "Este es un resumen corto de la cuarta publicación destacada.",
    imageUrl: "https://via.placeholder.com/400x300/fff77f/333333?text=Post+4",
    link: "#",
  },
];

const FeaturedPosts: React.FC = () => {
  return (
    <div className="container px-4 py-16 mx-auto">
      <h2 className="mb-8 text-3xl font-semibold text-center">
        Publicaciones Destacadas
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="overflow-hidden transition-shadow duration-300 bg-white border rounded-lg shadow-lg hover:shadow-xl"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="mt-2 text-gray-600">{post.excerpt}</p>
              <a
                href={post.link}
                className="inline-block mt-4 text-blue-500 transition-colors hover:text-blue-700"
              >
                Leer más &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
