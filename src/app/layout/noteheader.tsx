import { Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import NextLink from "next/link";

export default function NoteHeader() {
    return (
        <div>
            <Grid container display={"flex"} alignItems={"center"} justifyContent={"center"} color={'#fff'}
            sx={{ backgroundColor: '#eb1c7c'}}>
                <Grid item lg={12}>
                    <Stack direction={'row'} display={"flex"} justifyContent={"center"}>
                        <Typography sx={{fontSize: '1rem', lineHeight: '3rem', fontWeight: '600'}}>🚀 Mayar New API Available!</Typography>
                        <Typography sx={{fontSize: '1rem', lineHeight: '3rem', fontWeight: '600'}} component={NextLink} href="https://documenter.getpostman.com/view/25084670/2s8Z6x1sr8" target="_blank"> &nbsp; Check it out → </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    );
    }