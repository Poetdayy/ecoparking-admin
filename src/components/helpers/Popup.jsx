import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    }
}))

const Popup = props => {

  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <>
        <Dialog open={openPopup} maxWidth='md' className={classes.dialogWrapper}>
            <DialogTitle>
                <div>title goes here.</div>
            </DialogTitle>
            <DialogContent>
                <div>content goes here.</div>
            </DialogContent>
        </Dialog>
    </>
  )
}

Popup.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
    openPopup: PropTypes.bool
}

export default Popup;