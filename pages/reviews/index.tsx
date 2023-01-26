import React from 'react'
import { getReviews } from '../../Api/reviews'
import Info from '../../components/Info'
import Quote from '../../components/Quote'
import { IReview } from '../../models/IReview'

interface IReviews {
    data: IReview[]
}

const Reviews: React.FC<IReviews> = ({ data }) => {
  return (
    <>
        <Info array={data}/>
        <Quote />
    </>
  )
}

export default Reviews

export const getServerSideProps = async () => {
    return getReviews()
}