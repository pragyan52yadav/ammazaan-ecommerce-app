import Offer from "../offer/offer";
import React from "react";
import Item from "../item/item";
class Home extends React.Component {
  state = { products: [] };

  getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=5");
      const wtf = await response.json();
      //console.log(wtf["2"]);
      let x = Object.keys(wtf);
      let khw = [];
      for (let pro in x) {
          //console.log("wtf", wtf[pro]["id"]);
          khw.push([
              {
                  category: wtf[pro]["category"],
                  description: wtf[pro]["description"],
                  id: wtf[pro]["id"],
                  image: wtf[pro]["image"],
                  price: wtf[pro]["price"],
                  title: wtf[pro]["title"],
              },
          ]);
      }
      return khw;
  };

  componentDidMount = async () => {
      let khw = await this.getProducts();
      this.setState({ products: khw });
  };

  render() {
      //console.log(this.state.products);
      const prl = this.state.products.map((stt) => {
          //console.log(stt, "stt");
          return <Item key={stt[0].id} data={stt[0]} />;
      });
      //console.log(prl);
      return (
          <div className="">
            <Offer />
              <div className="product_list" style={{ marginTop: "10px" }}>
                  {prl}
              </div>
          </div>
      );
  }
}

export default Home;
