import {
  Box,
} from '@mui/material'
import Header from "../components/layout/Header";
import { Sidebar } from "../components/layout/Siderbar";

function DefaultLayout({ children }) {

  const sidebarWidth = 300;

  return (
    <>
      <div className='d-flex flex-row'>
        <Sidebar sidebarWidth={sidebarWidth}></Sidebar>
        <Box sx={{ml:`${sidebarWidth}px`}}>
          <Header></Header>
          <Box 
            component='main'
            sx={{
              backgroundColor:'primary.gray',
              height:'100vh',
              padding:'30px'
            }}
          >
            { children }
          </Box>
        </Box>
      </div>
    </>
  )
}

export default DefaultLayout;