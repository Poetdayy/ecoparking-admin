import PropTypes from 'prop-types';
import ParkingRegistrationForm from '../components/helpers/ParkingRegistration';
import PageHeader from '../components/helpers/PageHeader';
import { DriveEta } from '@mui/icons-material'
import { makeStyles } from '@mui/styles';
import { Paper } from '@mui/material';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

const UsersProfile = props => {

  const classes = useStyles();

  return (
    <>
      <PageHeader
        title="DANH SÁCH BÃI ĐỖ XE"
        subtitle="Xem thông tin các bãi đỗ xe đã đăng ký"
        icon={<DriveEta></DriveEta>}
      >
      </PageHeader>
      <Paper className={classes.pageContent}>
        <ParkingRegistrationForm></ParkingRegistrationForm>
      </Paper>
    </>
  )
}

UsersProfile.propTypes = {}

export default UsersProfile