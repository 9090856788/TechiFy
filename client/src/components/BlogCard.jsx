import React from "react";
import "./styles/blogCard.css";

const BlogCard = ({ selectedCategory }) => {
  const dummyBlogData = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x200?text=Tech+Trends",
      title: "Top 5 Tech Trends in 2025",
      description:
        "Explore the most exciting technology trends shaping the future.",
      categories: ["Technology", "Innovation", "Future"],
      mainCategory: "Technology",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x200?text=Healthy+Living",
      title: "10 Habits for a Healthier Life",
      description:
        "Simple daily habits that can improve your physical and mental well-being.",
      categories: ["Health", "Lifestyle", "Wellness"],
      mainCategory: "Lifestyle",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x200?text=Travel+Guide",
      title: "Ultimate Guide to Solo Travel",
      description: "Tips and tricks for traveling the world on your own.",
      categories: ["Travel", "Adventure", "Tips"],
      mainCategory: "Lifestyle",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300x200?text=Finance+Tips",
      title: "How to Save Money in 2025",
      description: "Smart budgeting strategies for modern living.",
      categories: ["Finance", "Budgeting", "Personal Growth"],
      mainCategory: "Finance",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/300x200?text=Design+Inspo",
      title: "Minimalist Home Decor Ideas",
      description:
        "Create a peaceful and stylish space with minimalist design.",
      categories: ["Design", "Home", "Minimalism"],
      mainCategory: "Lifestyle",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/300x200?text=Career+Growth",
      title: "Mastering Remote Work",
      description: "Boost your productivity and work-life balance from home.",
      categories: ["Career", "Remote Work", "Productivity"],
      mainCategory: "Lifestyle",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/300x200?text=Food+Lovers",
      title: "5 Easy Vegan Recipes",
      description: "Delicious and healthy plant-based meals for beginners.",
      categories: ["Food", "Vegan", "Cooking"],
      mainCategory: "Lifestyle",
    },
    {
      id: 8,
      image: "https://via.placeholder.com/300x200?text=Learning+Code",
      title: "Why You Should Learn JavaScript",
      description:
        "A beginner-friendly guide to getting started with JavaScript.",
      categories: ["Programming", "JavaScript", "Education"],
      mainCategory: "Technology",
    },
    {
      id: 9,
      image: "https://via.placeholder.com/300x200?text=Mindfulness",
      title: "Daily Mindfulness Practices",
      description: "Simple ways to stay present and reduce stress.",
      categories: ["Mindfulness", "Mental Health", "Self-Care"],
      mainCategory: "Lifestyle",
    },
    {
      id: 10,
      image: "https://via.placeholder.com/300x200?text=Startup+Tips",
      title: "How to Launch Your First Startup",
      description:
        "From idea to execution: a roadmap for aspiring entrepreneurs.",
      categories: ["Business", "Startup", "Entrepreneurship"],
      mainCategory: "Startup",
    },
  ];

  const filteredBlogs =
    selectedCategory === "All"
      ? dummyBlogData
      : dummyBlogData.filter((blog) =>
          blog.mainCategory.includes(selectedCategory)
        );
  console.log("Selected Category:", selectedCategory);
  console.log("Filtered Blogs:", filteredBlogs);

  return (
    <div className="blog-container">
      {filteredBlogs.map((blog) => (
        <div className="blog-card" key={blog.id}>
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <div className="blog-categories">
            {blog.categories.map((cat, index) => (
              <span key={index} className="blog-category">
                {cat}
              </span>
            ))}
          </div>
          <h2 className="blog-title">{blog.title}</h2>
          <p className="blog-description">{blog.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
