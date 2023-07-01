import ParkingRegistrationForm from "../components/add-new-post/RegisterParking";
import PageHeader  from "../components/helpers/PageHeader";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export default function AddNewPost() {
    return (
        <>
            <PageHeader
                title="Dang ky bai do xe"
                subtitle="Nguoi dung dien phieu de dang ky bai do xe"
                icon={<DirectionsCarIcon></DirectionsCarIcon>}

            >
            </PageHeader>
            <ParkingRegistrationForm></ParkingRegistrationForm>
        </>
    )
}