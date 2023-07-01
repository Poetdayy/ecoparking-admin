import PropTypes from 'prop-types'
import { Card, CardContent, FormControl, InputLabel, TextField, Typography } from '@mui/material'

const UserProfileCard = props => {
  return (
    <Card>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Account Details
            </Typography>
            <FormControl>
                <InputLabel shrink htmlFor="bootstrap-input">
                    Bootstrap
                </InputLabel>
                <TextField defaultValue="react-bootstrap" id="bootstrap-input" />   
            </FormControl>
            <TextField id="outlined-basic" label="FirstNamed" variant="outlined" />
        </CardContent>
    </Card>
  )
}

UserProfileCard.propTypes = {}

export default UserProfileCard