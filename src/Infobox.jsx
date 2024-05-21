import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InfoBox({ info }) {
    const IMG_URL = "https://images.unsplash.com/photo-1715151696404-aa4e214ade78?q=80&w=3029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={IMG_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <li>Temp: {info.temp}</li>
        <li>Minimum: {info.tempMin}</li>
        <li>Maximum: {info.tempMax}</li>
        <li>Humidity: {info.humidity}</li>
        <li>FeelsLike: {info.feelsLike}</li>
        </Typography>
      </CardContent>
    </Card>
    </div>
    );
}