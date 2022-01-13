const flexColumnCenter = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export const styles = {
  mainContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bgcolor: 'background.main',
  },
  ratingFormContainer: {
    width: '400px',
    ...flexColumnCenter,
  },
  ratingInput: {
    marginBottom: '20px',
  },
  quoteOverviewContainer: {
    width: 620,
    ...flexColumnCenter,
  },
  box: {
    ...flexColumnCenter,
  },
  card: {
    maxWidth: 300,
    minHeight: 200,
    bgcolor: 'background.light',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardBox: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  text: {
    marginBottom: '10px',
    width: '100%',
  },
};
