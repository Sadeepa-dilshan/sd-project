export default function Product() {
    // const products = ["Laptops","Desktops","Monitors","VGA"];
    const products = [{id:1,name:"Laptops",price:"$2500"},
                    {id:1,name:"Laptops",price:"$2500"},
                    {id:1,name:"Laptops",price:"$2500"},
                    ];

    const productList = products.map((product) => ( <h3 key={product.id}>
        {"LG " + product.name} {product.price}
        </h3>) );
    return(
        <>
            {productList}
        </>
    );
}