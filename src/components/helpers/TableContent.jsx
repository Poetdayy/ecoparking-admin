import { useMemo, useState } from "react";
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    TablePagination,
    Paper, 
    IconButton, 
    Typography, 
    Box, 
    Button,
} from "@mui/material";
import { ModeEdit, Delete, ControlPoint } from '@mui/icons-material';
import SearchInput from "./SearchInput";  
import Popup from "./Popup";

function createData(number, item, qty, price) {
 return { number, item, qty, price };
}
  
const rows = [
 createData(1, "Bai do xe 1", 5, 3),
 createData(2, "Bai do xe 2", 2, 2),
 createData(3, "Bai do xe 3", 3, 1),
 createData(4, "Bai do xe 4", 2, 1.6),
 createData(5, "Bai do xe 5", 1.5, 4),
 createData(5, "Bai do xe 6", 1.5, 4),
 createData(5, "Bai do xe 7", 1.5, 4),
 createData(5, "Bai do xe 8", 1.5, 4),
];
  
export default function BasicTable({name}) {

    const [row, setRow] = useState(rows);
    const [searched, setSearched] = useState("");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [openPopup, setOpenPopup] = useState(false);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
  
    const requestSearch = (searchedVal) => {
      const filteredRows = row.filter((row) => {
        return row.name.toLowerCase().includes(searchedVal.toLowerCase());
      });
      setRow(filteredRows);
    };
  
    const cancelSearch = () => {
      setSearched("");
      requestSearch(searched);
    };


    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = useMemo(() =>
      row.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ), 
      [row, page, rowsPerPage],
    );

 return (
   <TableContainer sx={{padding:"10px"}} component={Paper}>
     <Box sx={{paddingY:"24px", borderBottom:"1px solid"}}>
         <Typography sx={{ fontSize: 'h5.fontSize', marginLeft:"24px"}}>{name}</Typography>
     </Box>
     <Box sx={{paddingY:"24px", display:"flex", justifyContent:"space-between"}}>
        <SearchInput></SearchInput>
        <Button 
          variant="contained" 
          color="success"
          onClick={() => setOpenPopup(true)}
        >
            <Typography sx={{marginRight:"10px"}}>Add</Typography>
            <ControlPoint></ControlPoint>
        </Button>
     </Box>
     <Table aria-label="simple table" size="small">
       <TableHead>
         <TableRow>
           <TableCell>S.No</TableCell>
           <TableCell align="left">Name</TableCell>
           <TableCell align="left">Address</TableCell>
           <TableCell align="left">Quantity</TableCell>
           <TableCell align="left">Price&nbsp;(vnd)</TableCell>
           <TableCell align="left">Action</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {visibleRows.map((row) => (
           <TableRow key={row.number}>
             <TableCell component="th" scope="row">
               {row.number}
             </TableCell>
             <TableCell align="left">{row.item}</TableCell>
             <TableCell align="left">{row.qty}</TableCell>
             <TableCell align="left">{row.price}</TableCell>
             <TableCell align="left">{row.price}</TableCell>
             <TableCell align="left">
                <IconButton color="secondary">
                    <ModeEdit></ModeEdit>
                </IconButton>
                <IconButton color="black">
                    <Delete></Delete>
                </IconButton>
             </TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
     <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={row.length}
          rowsPerPage={rowsPerPage}
          page={page}       
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
    />
    <Popup
      openPopup={openPopup}
    >
    </Popup>
   </TableContainer>
 );
}