import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Collapse, Button, Typography, Box } from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <Card className="w-full h-full shadow-md border border-gray-100 flex flex-col justify-between">
      <Box>
        <CardActionArea>
          <CardMedia component="img" height="160" image={property.image || '/default-image.jpg'} alt={property.name} />
          <CardContent>
            <CardHeader title={property.name} subheader={property.project} />
            <Typography className="text-xs text-gray-400 mb-2">{property.style}</Typography>
            <Box className="flex space-x-2 mb-2">
              {property.oldPrice && 
              <Typography variant='body1' color='error'><span className="line-through">{property.oldPrice}</span></Typography>}
              <Typography variant='body1'>{property.price}</Typography>
            </Box>
            <Typography className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <HotelIcon /> {property.bedrooms} Phòng ngủ
              <BorderStyleIcon /> {property.area} m²
            </Typography>
            <Typography variant='subtitle1' className="text-gray-600 mb-2">{property.description}</Typography>
            <Typography variant='subtitle2' className="text-gray-500">{property.location}</Typography>
          </CardContent>
        </CardActionArea>
      </Box>
      <Box>
        <CardActions>
          <Button component={Link} to={`/itemdetails/${property.id}`} fullWidth variant="contained" color="primary">
            Xem chi tiết
          </Button>
        </CardActions>
        <Collapse in={true} timeout="auto" unmountOnExit>
          <Typography variant="body2" className="text-gray-500 pl-2">{property.interest.toLocaleString()} khách hàng quan tâm</Typography>
        </Collapse>
      </Box>
    </Card>
  );
};

export default PropertyCard;
