import React from 'react'
import './TrendCard.css'
import {TrendData} from '../../Data/TrendData'

const TrendCard = () => {
  return (
    <div className="TrendCard">
        <h3>Trends for you</h3>
        {TrendData.map((trend, index) => {
            return (
                <div className='Trend' key={index}>
                    <span>#{trend.name}</span>
                    <span>{trend.growth}% growth</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard