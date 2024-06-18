import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  {
  id:'1',
  title : 'My first product',
  price : 6,
  description : 'first ever product'
},
  {
  id:'2',
  title : 'My second product',
  price : 6,
  description : 'second ever product'
},

]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
          title={product.title}
          price={product.price}
          description={product.description}
          key={product.id}
          id={product.id}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
