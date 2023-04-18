import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
;

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'FinGen '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
        <Box
          component="footer"
          sx={{
              py: 3,
              px: 2,
              mt: "auto",
              backgroundColor: (theme) => theme.palette.mode === "light"
                  ? theme.palette.grey[200]
                  : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
              <Typography marginLeft={31} variant="body1">
                  FinGen
              </Typography>
              <Copyright />
          </Container>
        </Box>
  );
}