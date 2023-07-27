import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const MemberLoading = () => {
    return (
        <div style={{display:"flex", justifyContent: "center", alignItems: "center", height : "50vh"}}>
            <div className="container">
                <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                    <CircularProgress color="inherit" />
                </Stack>
            </div>
        </div>
    );
}

export default MemberLoading