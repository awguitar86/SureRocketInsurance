import React, {useState} from 'react';
import RatingInfo from './RatingInfo';
import QuoteOverview from './QuoteOverview';
import { Container } from '@mui/material';
import { styles } from './styles';

function App() {
  const [hasQuote, setHasQuote] = useState(false);
  const [quoteRes, setQuoteRes] = useState();

  const handlePostRating = async (ratingBody) => {
    const res = fetch('https://fed-challenge-api.sure.now.sh/api/v1/quotes', {
      method: 'POST',
      body: ratingBody
    })
  }

  return (
    <Container
      sx={styles.mainContainer}
      maxWidth={false}
    >
      {!hasQuote ? (
        <RatingInfo />
      ) : (
        <QuoteOverview />
      )}
    </Container>
  );
}

export default App;
