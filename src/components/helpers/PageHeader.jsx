import PropTypes from 'prop-types'
import { Paper, Card, Typography, Box } from '@mui/material'

const PageHeader = ({title, subtitle, icon}) => {
  return (
    <Paper sx={{display:"flex", padding:"20px"}}>
        <Card sx={{width:"80px", height:"80px", display:"flex", justifyContent:"center", alignItems:"center"}}>
            {icon}
        </Card>
        <Box sx={{marginLeft:"20px"}}>
            <Typography variant='h6'>{title}</Typography>
            <Typography>{subtitle}</Typography>
        </Box>
    </Paper>
  )
};

PageHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,   
    icon: PropTypes.element, 
};

export default PageHeader;