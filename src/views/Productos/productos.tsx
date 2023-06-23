import { type FC, memo } from 'react'
import RecipeReviewCard from '../../components/CardProductos'
import { MainContainer } from './styles'

const Productos: FC = () => {
    return (
        <MainContainer>
            <RecipeReviewCard />
            <RecipeReviewCard />
            <RecipeReviewCard />
            <RecipeReviewCard />
            <RecipeReviewCard />
        </MainContainer>
    )
}

export default memo(Productos)
