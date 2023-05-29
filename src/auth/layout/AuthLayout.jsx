import { Avatar, Grid, Typography, } from '@mui/material';
import { AccountCircleOutlined } from '@mui/icons-material';

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      textAlign="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}>

      <Grid
            item
            className='box-shadow'
            xs={ 3 }
            sx={{
                width: { md: 450 },
                backgroundColor: 'white',
                padding: 3,
                borderRadius: 2
          }}>

          <Grid>
            <AccountCircleOutlined sx={{ mb: 1 , fontSize: 60, }} />
          </Grid>
          <Typography variant='h5' sx={{ mb: 1 }}>{ title }</Typography>

            { children }

        </Grid>
    </Grid>
  )
}
