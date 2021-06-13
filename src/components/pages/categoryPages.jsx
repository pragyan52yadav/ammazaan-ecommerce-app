import "../../styles/category_page.css";
import { Nav, Footer } from "../layout";
import Category from "../category/category";

const CategoryPage = () => {
  return (
    <>
      <Nav />
      <Category />
      <Footer />
    </>
  );
};

export default CategoryPage;
