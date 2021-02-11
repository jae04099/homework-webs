import React from 'react'
import './Category.css'

const Category = () => {
    return (
        <div className="category-wrap">
            <ul className="categories">
                <li>전체</li>
                <li>디자인</li>
                <li>논문</li>
                <li>그외</li>
            </ul>
        </div>
    )
}

export default Category;
