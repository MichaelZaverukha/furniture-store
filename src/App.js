import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

const App = () => {
  const [items, setItems] = useState([
    {
      id:1,
      title: "Gray chair",
      img: "152509.276.jpg",
      desc: "A chair is a piece of furniture with a raised surface supported by legs. It is designed for one person to sit on and often has a backrest and armrests for comfort.",
      category: "chairs",
      price: "50"
    },
    {
      id:2,
      title: "Wood Table",
      img: "DSCF0773.jpg",
      desc: "A table is a piece of furniture with a flat surface, typically supported by legs. It is used for various purposes, such as dining, working, or displaying objects.",
      category: "tables",
      price: "100"
    },
    {
      id:3,
      title: "Sofa",
      img:"001-001-min-900x675.jpg",
      desc: "A sofa is a long, upholstered piece of furniture designed for seating multiple people. It typically has a backrest and armrests, providing comfort for relaxation and socializing.",
      category: "sofas",
      price: "150"
    },
    {
      id:4,
      title: "Lamp",
      img: "mebel_signal_lampa_napolnaya_ls85_chern_enl.jpg",
      desc: "A lamp is a device that produces light, usually by the means of an electric bulb or other light source. It is used to illuminate a room or specific area.",
      category: "lights",
      price: "35"
    },
    {
      id:5,
      title: "Chandelier",
      desc: "A chandelier is a decorative light fixture suspended from the ceiling, often designed with multiple arms or branches for holding light bulbs or candles. It is used to provide ambient lighting and add an aesthetic touch to a room.",
      img: "18640559-1000x1000.jpg",
      category: "lights",
      price: "75"
    },
    {
      id:6,
      title: "Sofa",
      img:"001-001-min-900x675.jpg",
      desc: "A sofa is a long, upholstered piece of furniture designed for seating multiple people. It typically has a backrest and armrests, providing comfort for relaxation and socializing.",
      category: "sofas",
      price: "150"
    },
    {
      id:7,
      title: "Lamp",
      img: "mebel_signal_lampa_napolnaya_ls85_chern_enl.jpg",
      desc: "A lamp is a device that produces light, usually by the means of an electric bulb or other light source. It is used to illuminate a room or specific area.",
      category: "lights",
      price: "35"
    },
    {
      id:8,
      title: "Gray chair",
      img: "152509.276.jpg",
      desc: "A chair is a piece of furniture with a raised surface supported by legs. It is designed for one person to sit on and often has a backrest and armrests for comfort.",
      category: "chairs",
      price: "50"
    },
    {
      id:9,
      title: "Gray chair",
      img: "152509.276.jpg",
      desc: "A chair is a piece of furniture with a raised surface supported by legs. It is designed for one person to sit on and often has a backrest and armrests for comfort.",
      category: "chairs",
      price: "50"
    },
  ]);
  const [orders, setOrders] = useState ([])
  const [currentItems, setCurrentItems] = useState(items)
  const [showFullItem, setShowFullItem] = useState()
  const [fullItem, setFullItem] = useState()
  const addToOrder = (item) => {
    let isInArray = orders.some(el => el.id === item.id);
    if (!isInArray){
      setOrders(prevOrders => [...prevOrders, item])
    }
  }
  const deleteOrder  = (itemId) => {
    setOrders(prevOrders => prevOrders.filter(order => order.id !== itemId));
  }

  const chooseCategory = (category) => {
    if(category === 'all'){
      setCurrentItems(items)
      return
    }
    setCurrentItems(items.filter(el => el.category === category))
  }

  const onShowItem = (item) => {
    setFullItem(item)
    setShowFullItem(!showFullItem);
  }

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder}/>
      <Categories chooseCategory={chooseCategory} />
      <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder}/>
      {showFullItem && <ShowFullItem item={fullItem} onAdd={addToOrder} onShowItem={onShowItem}/>}
      <Footer />
    </div>
  );
};

export default App;
