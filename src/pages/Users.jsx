import { useState } from "react";
import { Box, Button } from "@mui/material";
import TableContent from "../components/helpers/TableContent";

export default function Dashboard() {

    const [toogleButton, setToogleButton] = useState(1);

    return (
        <>
            <Box sx={{borderBottom:"solid 1px", color:""}}>
                <Button 
                    variant="text" 
                    color="secondary"
                    onClick={() => setToogleButton(1)}
                >
                    Customers
                </Button>
                <Button 
                    variant="text" 
                    color="secondary"
                    onClick={() => setToogleButton(2)}
                >
                    Parking Managers
                </Button>
            </Box>
            {
                toogleButton && toogleButton === 1 ? (
                    <Box sx={{marginTop:"25px"}}>
                        <TableContent
                            name="Customers List"
                        >
                        </TableContent>
                    </Box>
                ) : toogleButton === 2 ? (
                    <Box sx={{marginTop:"25px"}}>
                        <TableContent
                            name="Parking Managers List"
                        >
                        </TableContent>
                    </Box>      
                ) : (<div>Hello</div>)
            }
        </>
    )
}