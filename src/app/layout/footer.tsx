import NextLink from "next/link";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import GooglePlaystore from '../../../public/images/Google_Play_Store.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
return (
<footer>
    <Box>
        <Grid container>
            <Grid item lg={1} >

            </Grid>
            <Grid item xs={12} lg={7} display={"flex"} justifyContent={'start'} mb={5}>
                <Grid container  color={'#fff'}>
                    <Grid item xs={12} lg={12}>
                        <Typography variant="body1" display={"flex"} justifyContent={'start'} textAlign={'start'}>© 2022 PT Mayar Kernel
                            Supernova. All Rights reserved</Typography>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <Typography sx={{fontSize:'13px', lineHeight:'1rem', marginTop:2, textAlign:'start !important'}}
                            display={"flex"} justifyContent={'start'}>Mayar is a commerce platform, not a bank or
                            payment gateway. Payment service provided by connecting merchants to multiple licensed
                            payment service provider partnered with Mayar</Typography>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <Typography sx={{fontSize:'13px', lineHeight:'1rem', marginTop:2, textAlign:'start !important'}}
                            display={"flex"} justifyContent={'start'}>Terdaftar di PSE Kominfo dengan Nomor
                            12640003103480000000</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={2} mb={5} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Typography component={NextLink} target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.mayarlite">
                    <Image width={0} height={0} src={GooglePlaystore} alt="Mayar Playtstore" unoptimized style={{
                                    height:'auto',
                                    width:'170px'
                                }} />
                </Typography>
            </Grid>
            <Grid item xs={12} mb={5} lg={1} display={"flex"} alignItems={"center"} justifyContent={'center'} color={'#fff'}>
                <Typography component={NextLink} target="_blank" href={'https://www.instagram.com/mayar_id/'}>
                    <InstagramIcon sx={{margin:'5px'}} />
                </Typography>
                <Typography component={NextLink} href={'https://twitter.com/mayar_id_'}>
                    <XIcon sx={{margin:'5px'}} />
                </Typography>
                <Typography component={NextLink} href={'https://github.com/mayarid'}> 
                    <GitHubIcon sx={{margin:'5px'}} />
                </Typography>
            </Grid>
            <Grid item lg={1} >

</Grid>
        </Grid>
    </Box>
</footer>
);
}