import { Stack, Typography } from "@mui/material"
import BasicCard from "../components/Card"

export default function Dashboard() {
    return (
        <>
            <Typography>DASHBOARD OVERVIEW</Typography>
            <Stack 
                direction='row' 
                sx={{
                    justifyContent:"space-between",
                    marginTop:"20px"
                }}
            >
                <BasicCard></BasicCard>
                <BasicCard></BasicCard>
                <BasicCard></BasicCard>
                <BasicCard></BasicCard>
                <BasicCard></BasicCard>
            </Stack>
        </>
    )
}