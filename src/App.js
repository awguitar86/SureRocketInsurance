import React, { useState } from 'react';
import RatingInfo from './RatingInfo';
import QuoteOverview from './QuoteOverview';
import { Button, Container, Typography } from '@mui/material';
import { styles } from './styles';
import { Box } from '@mui/system';

function App() {
  const [hasLaunched, setHasLaunched] = useState(false);
  const [hasQuote, setHasQuote] = useState(false);
  const [quoteRes, setQuoteRes] = useState();

  const getQuote = async (ratingBody) => {
    try {
      const res = await fetch(
        'https://fed-challenge-api.sure.now.sh/api/v1/quotes',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(ratingBody),
        }
      );
      return res.json();
    } catch (err) {
      throw err;
    }
  };

  const handlePostRating = async (ratingBody) => {
    const quote = await getQuote(ratingBody);
    if (quote) {
      setQuoteRes(quote);
      setHasLaunched(false);
      setHasQuote(true);
    }
  };

  return (
    <Container sx={styles.mainContainer} maxWidth={false}>
      {!hasLaunched && !hasQuote && (
        <Box sx={styles.box}>
          <Typography
            variant="h4"
            color="primary"
            sx={{ marginBottom: '20px' }}
          >
            Get Rocket Insurance 🚀
          </Typography>
          <Button variant="outlined" onClick={() => setHasLaunched(true)}>
            Launch
          </Button>
        </Box>
      )}
      {hasLaunched && <RatingInfo handlePostRating={handlePostRating} />}
      {hasQuote && (
        <QuoteOverview quoteRes={quoteRes.quote} setQuoteRes={setQuoteRes} />
      )}
    </Container>
  );
}

export default App;
