import React from 'react'
import './Home.css';
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YTQzYWRkNWYt/YTQzYWRkNWYt-ZDkyNTQ5OGMt-w1500._CB413865922_.jpg"/>
            

            <div className="home__row">
                <Product title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"price={19.99}image="https://images-na.ssl-images-amazon.com/images/I/41Q419CMtfL._SX325_BO1,204,203,200_.jpg"rating="3"/>
                <Product title="Redmi Note 9 Pro (Champagne Gold, 4GB RAM, 64GB Storage) - Latest 8nm Snapdragon 720G"price={299.99}rating="4"image="https://images-na.ssl-images-amazon.com/images/I/81DvimWN5xL._SL1500_.jpg"/>

                {/* <Product/> */}
                {/* Product component */}
                {/* Product component */}

            </div>

            <div className="home__row">
            <Product title="Acer 54 cm (21.5 inch) LED Backlit Computer Monitor - IPS Full HD, Zero Frame Design" image="https://images-na.ssl-images-amazon.com/images/I/714mr6GxecL._SL1200_.jpg"price="149.99"rating="2"/>
            <Product title="Amazon Brand - Solimo Rover Multi-purpose Laptop Table (Wenge) " rating="3" price="10.99" image="https://images-na.ssl-images-amazon.com/images/I/811fnqwL5WL._SX522_.jpg"/>
            <Product title="All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Black)" price="99" rating="4" image="https://images-na.ssl-images-amazon.com/images/I/61bNwGAVm-L._SL1000_.jpg"/>
                
            </div>

            <div className="home__row">
            <Product title="MSI GE75 Raider 10SFS 17.3 FHD Gaming Laptop - Core i7-10875H+HM470 I DDR IV 8GB*2 (3200MHz) I 512GB NVMe PCIe SSD +1TB (SATA) 7200rpm I NVIDIA RTX2070 Super, GDDR6 8GB I Windows 10 Home - Black" image="https://images-na.ssl-images-amazon.com/images/I/51RlAohouoL._SL1024_.jpg" price="2,299"/> 
            </div>
            </div>
        </div>
    )
}

export default Home
