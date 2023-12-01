import { Grid, Box } from "@mui/material";
import Form from "../components/Form";
import ImageComponent from "../components/ImageComponent";

const commonStyles = {
  bgcolor: 'transparent',
  m: 2,
  borderColor: '#242323',
  borderRadius: '10px',
  width: '100%',
  height: '100%',
};

const SectionFormWrapper = () => {
  return (
    <Grid container spacing={4} justifyContent="center" alignItems="center" >
      <Box sx={{ ...commonStyles, border: 1, boxShadow: 3, display: 'flex', overflow: 'hidden' }}>
        <Grid item xs={5} > 
          <Form />
        </Grid>
        <Grid item xs={7}> 
          <ImageComponent src="images/banner.jpg" alt="banner" width="100%" height="100%" />
        </Grid>
      </Box>
    </Grid>
  );
}

export default SectionFormWrapper;
