import { FormControl, InputLabel, Card, TextField, CardContent, OutlinedInput, Box, Typography, CardActions, Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import 'react-quill//dist/quill.snow.css';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        },
    },
    outlinedInput: {
        '&:not(.Mui-error):not(.Mui-focused):not(.Mui-disabled) .MuiOutlinedInput-notchedOutline': {
          borderColor: 'blue',
        },
    }
}))

export default function ParkingRegistrationForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const classes = useStyles();

    const [values, setValues] = useState('');

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setValues({   
        ...values,
        [name]: value
      })
    };
    
    return (
        <div>
            
            <form className={classes.root}>
                <Grid container>
                    <Grid item xs= {6}>
                        <TextField
                            variant="outlined"
                            label="full name"
                            name="fullname"
                            value={values.fullname}
                            onChange={handleInputChange}
                            className={classes.outlinedInput}
                        >
                            Ten bai do
                        </TextField>
                    </Grid>
                </Grid>
            </form>
            <Card
                sx={{padding:"20px"}}
            >
                <Box sx={{ borderBottom:"1px solid", paddingBottom:"12px"}}>
                    <Typography variant="h4" align="center">PHIẾU ĐĂNG KÝ BÃI ĐỖ XE</Typography>
                </Box>
                <CardContent>
                    <TextField>
                        <InputLabel htmlFor="my-textfield">Ten bai do</InputLabel>
                        <OutlinedInput
                            id="my-textfield"
                            value={values}
                            onChange={handleInputChange}
                            label="Label"
                        />
                    </TextField>
                    <InputLabel>Dia chi</InputLabel>
                    <TextField>
                        <InputLabel htmlFor="my-textfield">Label</InputLabel>
                        <OutlinedInput
                            id="my-textfield"
                            value={values}
                            onChange={handleInputChange}
                            label="Label"
                        />
                    </TextField>
                    <InputLabel>So luong cho trong bai do</InputLabel>
                    <TextField>
                        <InputLabel htmlFor="my-textfield">Label</InputLabel>
                        <OutlinedInput
                            id="my-textfield"
                            value={values}
                            onChange={handleInputChange}
                            label="Label"
                        />
                    </TextField>
                    <InputLabel>Hinh anh</InputLabel>
                    <TextField type="file">
                        <InputLabel htmlFor="my-textfield">Label</InputLabel>
                        <OutlinedInput
                            id="my-textfield"
                            value={values}
                            onChange={handleInputChange}
                            label="Label"
                        />
                    </TextField>
                    <InputLabel>Giay phep kinh doanh</InputLabel>
                    <TextField type="file">
                        <InputLabel htmlFor="my-textfield">Label</InputLabel>
                        <OutlinedInput
                            id="my-textfield"
                            value={values}
                            onChange={handleInputChange}
                            label="Label"
                        />
                    </TextField>
                    <InputLabel>Mieu ta bai do xe</InputLabel>
                    <ReactQuill  theme="snow" className="add-new-post__editor mb-1" />
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="success">Dang ky</Button>
                </CardActions>
            </Card>
        </div>
    )
}