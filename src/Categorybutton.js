import {React, useState, useEffect} from "react";
import axios from 'axios'


function Categorybutton() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await axios.get("http://localhost:8000/categories/");
    setCategories(response.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="list">
        {categories.map((category, index) => (
        <button class="button2">
        <span className="calltoact2">{category.category+': '+category.subcategory}</span>
        <div className="gift">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </button>
      ))}
    </div>
  );
}

export default Categorybutton;
