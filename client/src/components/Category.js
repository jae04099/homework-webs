import React from 'react'
import './Category.css'

const Category = ({cardData}) => {
    return (
        <div className="category-wrap">
            <ul className="categories">
                <li>전체<span className='countAll'>{`(${cardData.length})`}</span></li>
                <li>디자인<span className='countDesign'>{`(${cardData.length})`}</span></li>
                <li>레포트<span className='countReport'>()</span></li>
                <li>논문<span className='countReport'>()</span></li>
                <li>코딩<span className='countCS'>()</span></li>
                <li>그외<span className='countEx'>()</span></li>
            </ul>
        </div>
    )
}

export default Category;
