import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuote, selectQuote, selectAuthor } from './quotesSlice'

export const Quote = () => {
    const dispatch = useDispatch()
    const quote = useSelector(selectQuote)
    const author = useSelector(selectAuthor)

    useEffect(() => {
        dispatch(fetchQuote())
    }, [dispatch])

    return (
    <div className="quote-container">
        <blockquote className="quote">
          &ldquo;{quote}&rdquo; &mdash;{' '}
          <div className="quote-author">{author}</div>
        </blockquote>
      </div>
    )
}

export default Quote;
