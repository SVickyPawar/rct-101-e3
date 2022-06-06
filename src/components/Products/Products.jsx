import React from "react";
import {Product} from "../Products/Product"

const Products = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchinfo=async()=>{
      await fetch("http://localhost:8080/products").then(r=>r.json()).then((d)=>{setData(d)});
    }
    fetchinfo()
   
  }, [])
  
  
  return <div>{/* Code here */}
  <Product/>
  </div>;
};

export default Products;
