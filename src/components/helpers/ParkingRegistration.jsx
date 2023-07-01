import { Grid } from '@mui/material';
import Controls from "../../components/controls/Controls";


const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

export default function ParkingRegistrationForm() {

    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                    />
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                    />

                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        items={genderItems}
                    />
                    <Controls.Select
                        name="departmentId"
                        label="Department"
                    />
                    <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                    />
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit"
                            color="success"
                       />
                        <Controls.Button
                            text="Reset"
                            color="info"
                        />
                    </div>
                </Grid>
            </Grid>
        </form>
    )
}