import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from './styles';
import VariableOptionsCard from './VariableOptionCard';

const QuoteOverview = ({ quoteRes, setQuoteRes }) => {
  const updateQuote = async (resBody) => {
    try {
      const res = await fetch(
        `https://fed-challenge-api.sure.now.sh/api/v1/quotes/${resBody.quote.quoteId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(resBody),
        }
      );
      return res.json();
    } catch (err) {
      throw err;
    }
  };

  const handleUpdateQuote = async (value, title) => {
    const body = {
      quote: {
        quoteId: quoteRes.quoteId,
        rating_address: { ...quoteRes.rating_address },
        policy_holder: { ...quoteRes.policy_holder },
        variable_selections: {
          deductible:
            title === 'Deductible'
              ? +value
              : quoteRes.variable_selections.deductible,
          asteroid_collision:
            title === 'Asteroid Collision Limit'
              ? +value
              : quoteRes.variable_selections.asteroid_collision,
        },
      },
    };
    const newQuote = await updateQuote(body);
    if (newQuote) {
      setQuoteRes(newQuote);
    }
  };

  return (
    <Box sx={styles.quoteOverviewContainer}>
      <Typography variant="h5" color="primary" sx={styles.text}>
        Quote Overview
      </Typography>
      <Typography variant="body1" color="primary.light" sx={{ width: '100%' }}>
        {`${quoteRes.policy_holder.first_name} ${quoteRes.policy_holder.last_name}`}
      </Typography>
      <Typography variant="body1" color="primary.light" sx={{ width: '100%' }}>
        {`${quoteRes.rating_address.line_1} ${
          quoteRes.rating_address.line_2 ? quoteRes.rating_address.line_2 : ''
        }`}
      </Typography>
      <Typography variant="body1" color="primary.light" sx={{ width: '100%' }}>
        {`${quoteRes.rating_address.city}, ${quoteRes.rating_address.region} ${quoteRes.rating_address.postal}`}
      </Typography>
      <Box sx={styles.cardBox}>
        <VariableOptionsCard
          option={quoteRes.variable_options.deductible}
          handleUpdateQuote={handleUpdateQuote}
        />
        <VariableOptionsCard
          option={quoteRes.variable_options.asteroid_collision}
          handleUpdateQuote={handleUpdateQuote}
        />
      </Box>
      <Typography
        variant="h6"
        color="primary"
        sx={{ width: '100%', marginTop: '20px' }}
      >
        Annual Premium: $
        {quoteRes.premium.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Typography>
    </Box>
  );
};

export default QuoteOverview;
