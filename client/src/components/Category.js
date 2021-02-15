import React from 'react'
import './Category.css'

const Category = ({cardData, setCategory}) => {

    const getCategoryHandler = (e) => {
        setCategory(e.target.className)
    }
    return (
        <div className="category-wrap">
            <ul className="categories">
                <li onClick={getCategoryHandler} className='countAll'>전체<span className='countAll'>{`(${cardData.length})`}</span></li>
                <li onClick={getCategoryHandler} className='countDesign'>디자인<span className='countDesign'>{`(${cardData.length})`}</span></li>
                <li onClick={getCategoryHandler} className='countTeam'>팀플<span className='countTeam'>()</span></li>
                <li onClick={getCategoryHandler} className='countReport'>레포트<span className='countReport'>()</span></li>
                <li onClick={getCategoryHandler} className='countStat'>통계<span className='countStat'>()</span></li>
                <li onClick={getCategoryHandler} className='countCS'>컴공<span className='countCS'>()</span></li>
                <li onClick={getCategoryHandler} className='countEx'>그외<span className='countEx'>()</span></li>
            </ul>
        </div>
    )
}

export default Category;
