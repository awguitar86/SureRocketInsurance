import {
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { styles } from './styles';

const VariableOptionCard = ({ option, handleUpdateQuote }) => {
  return (
    <Card sx={styles.card}>
      <CardContent>
        <Typography variant="h5" component="div">
          {option?.title}
        </Typography>
        <Typography variant="body2">{option?.description}</Typography>
      </CardContent>
      <CardActions>
        <FormControl fullWidth>
          <InputLabel id="vairable-option-values-label">Options</InputLabel>
          <Select
            labelId="vairable-option-values"
            id="vairable-option-values"
            defaultValue={option?.values[0]}
            label="Age"
            onChange={(e) => handleUpdateQuote(e.target.value, option?.title)}
          >
            {option?.values.map((val) => {
              return (
                <MenuItem key={val} value={val}>
                  ${val.toLocaleString('en-US')}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardActions>
    </Card>
  );
};

export default VariableOptionCard;
