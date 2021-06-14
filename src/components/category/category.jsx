import React from "react";
import Item from "../item/item";
import "../../styles/category.css";

class Category extends React.Component {
    state = { products: [], category: "" };

    getCategoryProducts = async (category) => {
        let s = "https://fakestoreapi.com/products";
        const response = await fetch(s);
        const wtf = await response.json();
        //console.log(wtf["2"]);
        let x = Object.keys(wtf);
        let khw = [];
        if (category === "") {
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
        } else {
            for (let pro in x) {
                //console.log("wtf", wtf[pro]["id"]);
                console.log(wtf[pro]["category"]);
                if (wtf[pro]["category"] === category) {
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
            }
        }
        //console.log(s);

        return khw;
    };

    componentDidMount = async () => {
        let khw = await this.getCategoryProducts("");
        this.setState({ products: khw });
    };

    handleChange = async (e) => {
        //console.log(e.target.value);
        let khw = await this.getCategoryProducts(e.target.value);
        this.setState({ products: khw });
    };

    render() {
        const prl = this.state.products.map((stt) => {
            //console.log(stt, "stt");
            return (
                <Item
                    key={stt[0].id}
                    data={stt[0]}
                    onAddToCart={this.props.onAddToCart}
                />
            );
        });
        //console.log(prl);
        return (
            <div className="">
                <div className="select_div">
                    <select
                        onChange={this.handleChange}
                        name="cars"
                        className="select_cat"
                        id="cars"
                    >
                        <option value="">Select Category</option>
                        <option value="women's clothing">
                            Women's clothing
                        </option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="men's clothing">Men's clothing</option>
                    </select>
                </div>
                <div className="product_list" style={{ marginTop: "10px" }}>
                    {prl}
                </div>
            </div>
        );
    }
}

export default Category;
